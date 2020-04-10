import { ITestScript } from '../ITestScript'
import { readFileSync } from 'fs-extra'
import { TestScriptError } from '../TestScriptError'
import { SourceUnmapper } from './SourceUnmapper'
import { VMScript } from 'vm2'
import parseComments from 'comment-parser'

const INLINE_SOURCEMAP_REGEX = /^data:application\/json[^,]+base64,/
const SOURCEMAP_REGEX = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/

// Copied from https://github.com/rexxars/sourcemap-decorate-callsites/blob/5b9735a156964973a75dc62fd2c7f0c1975458e8/lib/index.js#L35-L111
function loadSourcemap(sourceFile: string): string {
	// Look for a sourcemap URL
	const sourceMapUrl = resolveSourceMapUrl(sourceFile)
	if (!sourceMapUrl) {
		console.warn(`File does not contain a sourcemap URL, skipping`)
		return ''
	}

	// If it's an inline map, decode it and pass it through the same consumer factory
	if (isInlineMap(sourceMapUrl)) {
		console.warn(`File contains an inline sourcemap, attempting to decode`)
		return decodeInlineMap(sourceMapUrl)
	}

	return ''
}

function resolveSourceMapUrl(sourceFile: string) {
	const lines = sourceFile.split(/\r?\n/)
	let sourceMapUrl: RegExpMatchArray | null = null
	for (let i = lines.length - 1; i >= 0 && !sourceMapUrl; i--) {
		sourceMapUrl = lines[i].match(SOURCEMAP_REGEX)
	}

	if (!sourceMapUrl) {
		return null
	}

	return isInlineMap(sourceMapUrl[1]) ? sourceMapUrl[1] : null
}

function isInlineMap(url: string): boolean {
	return INLINE_SOURCEMAP_REGEX.test(url)
}

function decodeInlineMap(data: string): string {
	const rawData = data.slice(data.indexOf(',') + 1)
	return new Buffer(rawData, 'base64').toString()
}

/**
 * Precompiled Test Script is a class that implements a test script loader for files which
 * were compiled in the parent process and subsequently loaded by a worker, or test scripts
 * which were compiled ahead of time outside of Flood in order to use helpers.
 */
export default class PrecompiledTestScript implements ITestScript {
	private sourceUnmapper: SourceUnmapper
	private vmScriptCache: VMScript

	constructor(private originalSource: string, private sourceFile: string) {
		SourceUnmapper.init(originalSource, this.sourceFile, this.sourceMap).then(
			sourceUnmapper => (this.sourceUnmapper = sourceUnmapper),
		)
	}

	static fromFile(filePath: string): PrecompiledTestScript {
		const content = readFileSync(filePath, { encoding: 'utf8' })
		return new PrecompiledTestScript(content, filePath)
	}

	public async compile(): Promise<this> {
		return this
	}

	public get scriptRoot() {
		console.warn('Accessed precompiledScript.scriptRoot. This property is deprecated.')
		return '/'
	}

	public get isFloodElementCorrectlyImported(): boolean {
		return this.originalSource.includes('@flood/element')
	}

	get sandboxedFilename() {
		return this.sourceFile
	}

	get source() {
		return this.originalSource
	}

	get sourceMap() {
		return loadSourcemap(this.originalSource)
	}

	public get testName(): string {
		return this.parsedComments('name')
	}

	public get testDescription(): string {
		return this.parsedComments('description')
	}

	public get formattedErrorString(): string {
		return ''
	}

	public get hasErrors(): boolean {
		// NOTE: Errors should be detected and reported by compiler
		return false
	}

	public isScriptError(error: Error): boolean {
		const stack = error.stack || ''
		return stack.split('\n').filter(s => s.includes(this.sourceFile)).length > 0
	}

	liftError?(error: Error): TestScriptError {
		const stack = error.stack || ''

		const filteredStack = stack.split('\n').filter(s => s.includes(this.sourceFile))
		let callsite
		let unmappedStack: string[] = []

		if (filteredStack.length > 0) {
			callsite = this.sourceUnmapper.unmapCallsite(filteredStack[0])
			unmappedStack = this.sourceUnmapper.unmapStackNodeStrings(filteredStack)
		}

		return new TestScriptError(error.message, stack, callsite, unmappedStack, error)
	}

	public get vmScript(): VMScript {
		if (!this.vmScriptCache) {
			this.vmScriptCache = new VMScript(this.source, this.sandboxedFilename)
		}

		return this.vmScriptCache
	}

	private parsedCommentsMemo: { [index: string]: string; name: string; description: string }

	private parsedComments(key: string) {
		if (!this.parsedCommentsMemo) {
			const comments = parseComments(this.originalSource)
			let description = '',
				name = ''
			if (comments.length) {
				const { description: body } = comments[0]
				const [line1, ...lines] = body.split('\n')
				name = line1
				description = lines
					.filter((l: string) => l.length)
					.join('\n')
					.trim()
			}
			this.parsedCommentsMemo = { name, description }
		}

		return this.parsedCommentsMemo[key]
	}
}
