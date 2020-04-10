import { CommandModule, Arguments } from 'yargs'
import { checkFile } from './common'
import { Compiler } from '@flood/element-compiler'
import { basename, join, dirname, resolve } from 'path'
import { writeFileSync } from 'fs'
import chalk from 'chalk'
import mkdirp from 'mkdirp'
import { promisify } from 'util'
import filesize from 'filesize'

const mkdirpAsync = promisify(mkdirp)

interface RunArguments extends Arguments {
	file: string
	output: string
}

const cmd: CommandModule = {
	command: 'compile <file> [options]',
	describe: 'Compile a test script, including all imported helpers, ready to upload to Flood',

	async handler(args: RunArguments) {
		const { file, output } = args
		const compiler = new Compiler(file)
		const result = await compiler.emit()
		let outputPath = output

		const filename = basename(file).split('.')[0]

		if (outputPath == null) {
			outputPath = join(dirname(file), `${filename}.compiled.js`)
		} else {
			await mkdirpAsync(dirname(outputPath))
		}

		writeFileSync(outputPath, result.content, { encoding: 'utf8' })
		console.log(
			chalk`{grey Compiled to} {green ${resolve(outputPath, '.')}} ({green ${filesize(
				result.content.length,
			)}})`,
		)
	},

	builder(yargs) {
		return yargs
			.positional('file', {
				describe: 'the test script to run',
			})
			.option('output', {
				alias: 'o',
			})
			.check(({ file, output }) => {
				const fileErr = checkFile(file as string)
				if (fileErr) return fileErr

				if (output && !(output as string).endsWith('.js')) {
					throw new Error(`Output path (${output}) must end in .js`)
				}

				return true
			})
	},
}

export default cmd
