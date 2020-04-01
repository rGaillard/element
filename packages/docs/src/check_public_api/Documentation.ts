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

export class Documentation {
	public classesArray: any
	public classes: any

	static Class: Class
	static Member: Member
	static Type: Type

	/**
	 * @param {!Array<!Class>} classesArray
	 */
	constructor(classesArray) {
		this.classesArray = classesArray
		/** @type {!Map<string, !Class>} */
		this.classes = new Map()
		for (const cls of classesArray) this.classes.set(cls.name, cls)
	}
}

export class Class {
	public members: Map<string, Member>
	public properties: Map<string, Member>
	public propertiesArray: Member[]
	public methods: Map<string, Member>
	public methodsArray: Member[]
	public events: Map<string, Member>
	public eventsArray: Member[]
	public comment?: string
	public extends?: string | null

	/**
	 * @param {string} name
	 * @param {!Array<!Member>} membersArray
	 * @param {?string=} extendsName
	 * @param {string=} comment
	 */
	constructor(
		public name: string,
		public membersArray: Member[],
		extendsName: string | null = null,
		comment = '',
	) {
		/** @type {!Map<string, !Member>} */
		this.members = new Map()
		/** @type {!Map<string, !Member>} */
		this.properties = new Map()
		/** @type {!Array<!Member>} */
		this.propertiesArray = []
		/** @type {!Map<string, !Member>} */
		this.methods = new Map()
		/** @type {!Array<!Member>} */
		this.methodsArray = []
		/** @type {!Map<string, !Member>} */
		this.events = new Map()
		/** @type {!Array<!Member>} */
		this.eventsArray = []
		this.comment = comment
		this.extends = extendsName
		for (const member of membersArray) {
			this.members.set(member.name, member)
			if (member.kind === 'method') {
				this.methods.set(member.name, member)
				this.methodsArray.push(member)
			} else if (member.kind === 'property') {
				this.properties.set(member.name, member)
				this.propertiesArray.push(member)
			} else if (member.kind === 'event') {
				this.events.set(member.name, member)
				this.eventsArray.push(member)
			}
		}
	}
}

export class Member {
	public args: Map<string, Member>

	constructor(
		public kind: string,
		public name: string,
		public type: Type | null,
		public argsArray: Member[],
		public comment: string = '',
		public returnComment: string = '',
		public required: boolean = true,
	) {
		this.args = new Map()
		for (const arg of argsArray) this.args.set(arg.name, arg)
	}

	static createMethod(
		name: string,
		argsArray: Member[],
		returnType: Type | null,
		returnComment?: string,
		comment?: string,
	) {
		return new Member('method', name, returnType, argsArray, comment, returnComment)
	}

	static createProperty(name: string, type: Type, comment?: string, required?: boolean) {
		return new Member('property', name, type, [], comment, undefined, required)
	}

	static createEvent(name: string, type: Type | null = null, comment?: string) {
		return new Member('event', name, type, [], comment)
	}
}

export class Type {
	constructor(public name: string, public properties: any[] = []) {}
}
