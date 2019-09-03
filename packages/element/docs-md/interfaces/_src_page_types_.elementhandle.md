**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/types"](../modules/_src_page_types_.md) › [ElementHandle](_src_page_types_.elementhandle.md)

# Interface: ElementHandle

Example Handle represents a remote element in the DOM of the browser. It implements useful methods for querying and interacting with this DOM element.

All methods on this class are asynchronous and must be used with `await` to wait for the result to fulfill from the browser.

## Hierarchy

* **ElementHandle**

## Implemented by

* [ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md)

## Index

### Properties

* [element](_src_page_types_.elementhandle.md#element)

### Methods

* [bindBrowser](_src_page_types_.elementhandle.md#bindbrowser)
* [blur](_src_page_types_.elementhandle.md#blur)
* [clear](_src_page_types_.elementhandle.md#clear)
* [click](_src_page_types_.elementhandle.md#click)
* [dispose](_src_page_types_.elementhandle.md#dispose)
* [findElement](_src_page_types_.elementhandle.md#findelement)
* [findElements](_src_page_types_.elementhandle.md#findelements)
* [focus](_src_page_types_.elementhandle.md#focus)
* [getAttribute](_src_page_types_.elementhandle.md#getattribute)
* [getId](_src_page_types_.elementhandle.md#getid)
* [getProperty](_src_page_types_.elementhandle.md#getproperty)
* [highlight](_src_page_types_.elementhandle.md#highlight)
* [isDisplayed](_src_page_types_.elementhandle.md#isdisplayed)
* [isEnabled](_src_page_types_.elementhandle.md#isenabled)
* [isSelectable](_src_page_types_.elementhandle.md#isselectable)
* [isSelected](_src_page_types_.elementhandle.md#isselected)
* [location](_src_page_types_.elementhandle.md#location)
* [sendKeys](_src_page_types_.elementhandle.md#sendkeys)
* [size](_src_page_types_.elementhandle.md#size)
* [tagName](_src_page_types_.elementhandle.md#tagname)
* [takeScreenshot](_src_page_types_.elementhandle.md#takescreenshot)
* [text](_src_page_types_.elementhandle.md#text)
* [toErrorString](_src_page_types_.elementhandle.md#toerrorstring)
* [type](_src_page_types_.elementhandle.md#type)

## Properties

###  element

• **element**: *PElementHandle*

*Defined in [src/page/types.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L35)*

**`internal`** 

## Methods

###  bindBrowser

▸ **bindBrowser**(`browser`: any): *void*

*Defined in [src/page/types.ts:40](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L40)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`browser` | any |

**Returns:** *void*

___

###  blur

▸ **blur**(): *Promise‹void›*

*Defined in [src/page/types.ts:78](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L78)*

Clears focus from this element so that it will no longer receive keyboard inputs.

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(): *Promise‹void›*

*Defined in [src/page/types.ts:58](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L58)*

Schedules a command to clear the value of this element.
This command has no effect if the underlying DOM element is neither a text
INPUT, SELECT, or a TEXTAREA element.

**Returns:** *Promise‹void›*

___

###  click

▸ **click**(`options?`: ClickOptions): *Promise‹void›*

*Defined in [src/page/types.ts:51](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L51)*

Sends a click event to the element attached to this handle. If the element is
currently outside the viewport it will first scroll to that element.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  dispose

▸ **dispose**(): *Promise‹void›*

*Defined in [src/page/types.ts:152](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L152)*

**Returns:** *Promise‹void›*

___

###  findElement

▸ **findElement**(`locator`: string | [Locator](_src_page_types_.locator.md)): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

*Defined in [src/page/types.ts:90](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L90)*

Locates an element using the supplied <[Locator]>, returning an <[ElementHandle]>.

**Parameters:**

Name | Type |
------ | ------ |
`locator` | string \| [Locator](_src_page_types_.locator.md) |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

___

###  findElements

▸ **findElements**(`locator`: [Locator](_src_page_types_.locator.md) | string): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

*Defined in [src/page/types.ts:95](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L95)*

Locates all elements using the supplied <[Locator]>, returning an array of <[ElementHandle]>s.

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [Locator](_src_page_types_.locator.md) \| string |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

___

###  focus

▸ **focus**(): *Promise‹void›*

*Defined in [src/page/types.ts:73](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L73)*

Sends focus to this element so that it receives keyboard inputs.

**Returns:** *Promise‹void›*

___

###  getAttribute

▸ **getAttribute**(`key`: string): *Promise‹string | null›*

*Defined in [src/page/types.ts:45](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L45)*

Fetches the value of an attribute on this element

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  getId

▸ **getId**(): *Promise‹string | null›*

*Defined in [src/page/types.ts:105](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L105)*

Fetches the remote elements `id` attribute.

**Returns:** *Promise‹string | null›*

___

###  getProperty

▸ **getProperty**(`key`: string): *Promise‹string | null›*

*Defined in [src/page/types.ts:145](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L145)*

getProperty

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  highlight

▸ **highlight**(): *Promise‹void›*

*Defined in [src/page/types.ts:80](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L80)*

**Returns:** *Promise‹void›*

___

###  isDisplayed

▸ **isDisplayed**(): *Promise‹boolean›*

*Defined in [src/page/types.ts:120](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L120)*

Checks whether the remote element is displayed in the DOM and is visible to the user without being hidden by CSS or occluded by another element.

**Returns:** *Promise‹boolean›*

___

###  isEnabled

▸ **isEnabled**(): *Promise‹boolean›*

*Defined in [src/page/types.ts:125](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L125)*

Checks whether the remote element is enabled. Typically this means it does not have a `disabled` property or attribute applied.

**Returns:** *Promise‹boolean›*

___

###  isSelectable

▸ **isSelectable**(): *Promise‹boolean›*

*Defined in [src/page/types.ts:115](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L115)*

Checks whether the remote element is selectable. An element is selectable if it is an `<option>` or `input[type="checkbox"]` or radio button.

**Returns:** *Promise‹boolean›*

___

###  isSelected

▸ **isSelected**(): *Promise‹boolean›*

*Defined in [src/page/types.ts:110](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L110)*

If the remote element is selectable (such as an `<option>` or `input[type="checkbox"]`) this methos will indicate whether it is selected.

**Returns:** *Promise‹boolean›*

___

###  location

▸ **location**(): *Promise‹object›*

*Defined in [src/page/types.ts:140](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L140)*

Fetches the remote elements physical location as `x` and `y`.

**Returns:** *Promise‹object›*

___

###  sendKeys

▸ **sendKeys**(...`keys`: string[]): *Promise‹void›*

*Defined in [src/page/types.ts:63](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L63)*

Sends a series of key modifiers to the element.

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹void›*

___

###  size

▸ **size**(): *Promise‹object›*

*Defined in [src/page/types.ts:135](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L135)*

Fetches the remote elements physical dimensions as `width` and `height`.

**Returns:** *Promise‹object›*

___

###  tagName

▸ **tagName**(): *Promise‹string | null›*

*Defined in [src/page/types.ts:100](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L100)*

Fetches the remote elements `tagName` property.

**Returns:** *Promise‹string | null›*

___

###  takeScreenshot

▸ **takeScreenshot**(`options?`: ScreenshotOptions): *Promise‹void›*

*Defined in [src/page/types.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L85)*

Takes a screenshot of this element and saves it to the results folder with a random name.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScreenshotOptions |

**Returns:** *Promise‹void›*

___

###  text

▸ **text**(): *Promise‹string›*

*Defined in [src/page/types.ts:130](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L130)*

Retrieves the text content of this element excluding leading and trailing whitespace.

**Returns:** *Promise‹string›*

___

###  toErrorString

▸ **toErrorString**(): *string*

*Defined in [src/page/types.ts:150](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L150)*

**`internal`** 

**Returns:** *string*

___

###  type

▸ **type**(`text`: string): *Promise‹void›*

*Defined in [src/page/types.ts:68](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L68)*

Sends a series of key presses to the element to simulate a user typing on the keyboard. Use this to fill in input fields.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *Promise‹void›*