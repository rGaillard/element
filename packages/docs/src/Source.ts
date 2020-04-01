/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path'
import util from 'util'
import fs, { readdirSync, statSync } from 'fs'

const readFileAsync = util.promisify(fs.readFile)
const readdirAsync = util.promisify(fs.readdir)
const writeFileAsync = util.promisify(fs.writeFile)

const PROJECT_DIR = path.join(__dirname, '..', '..')

export class Source {
	private _filePath: string
	private _projectPath: string
	private _name: string
	private _text: string
	private _hasUpdatedText: boolean

	/**
	 * @param {string} filePath
	 * @param {string} text
	 */
	constructor(filePath, text) {
		this._filePath = filePath
		this._projectPath = path.relative(PROJECT_DIR, filePath)
		this._name = path.basename(filePath)
		this._text = text
		this._hasUpdatedText = false
	}

	/**
	 * @return {string}
	 */
	filePath() {
		return this._filePath
	}

	/**
	 * @return {string}
	 */
	projectPath() {
		return this._projectPath
	}

	/**
	 * @return {string}
	 */
	name() {
		return this._name
	}

	/**
	 * @param {string} text
	 * @return {boolean}
	 */
	setText(text) {
		if (text === this._text) return false
		this._hasUpdatedText = true
		this._text = text
		return true
	}

	/**
	 * @return {string}
	 */
	text() {
		return this._text
	}

	/**
	 * @return {boolean}
	 */
	hasUpdatedText() {
		return this._hasUpdatedText
	}

	async save() {
		await writeFileAsync(this.filePath(), this.text())
	}

	/**
	 * @param {string} filePath
	 * @return {!Promise<Source>}
	 */
	static async readFile(filePath) {
		filePath = path.resolve(filePath)
		const text = await readFileAsync(filePath, { encoding: 'utf8' })
		return new Source(filePath, text)
	}

	/**
	 * @param {string} dirPath
	 * @param {string=} extension
	 * @return {!Promise<!Array<!Source>>}
	 */
	static async readdir(dirPath, extension = '') {
		const filePaths: string[] = []

		walkDir(dirPath, fileName => {
			if (fileName.endsWith(extension)) {
				filePaths.push(fileName)
			}
		})

		// const fileNames = await readdirAsync(dirPath)
		// const filePaths = fileNames
		// 	.filter(fileName => fileName.endsWith(extension))
		// 	.map(fileName => path.join(dirPath, fileName))
		// 	.filter(fileName => !fs.statSync(fileName).isDirectory())
		// console.log(filePaths)
		return Promise.all(filePaths.map(filePath => Source.readFile(filePath)))
	}
}

function walkDir(dir, callback: (path: string) => void) {
	readdirSync(dir).forEach(f => {
		const dirPath = path.join(dir, f)
		const isDirectory = statSync(dirPath).isDirectory()
		isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f))
	})
}
