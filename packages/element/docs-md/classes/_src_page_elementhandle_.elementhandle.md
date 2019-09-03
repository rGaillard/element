**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/ElementHandle"](../modules/_src_page_elementhandle_.md) › [ElementHandle](_src_page_elementhandle_.elementhandle.md)

# Class: ElementHandle

ElementHandle represents a remote element in the DOM of the browser. It implements useful methods for querying and interacting with this DOM element.

All methods on this class are asynchronous and must be used with `await` to wait for the result to fulfill from the browser.

## Hierarchy

* **ElementHandle**

## Implements

* [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)
* [Locator](../interfaces/_src_page_types_.locator.md)

## Index

### Constructors

* [constructor](_src_page_elementhandle_.elementhandle.md#constructor)

### Properties

* [element](_src_page_elementhandle_.elementhandle.md#element)
* [errorString](_src_page_elementhandle_.elementhandle.md#errorstring)
* [fs](_src_page_elementhandle_.elementhandle.md#private-fs)

### Accessors

* [elementClient](_src_page_elementhandle_.elementhandle.md#private-elementclient)
* [elementRemoteObject](_src_page_elementhandle_.elementhandle.md#private-elementremoteobject)
* [pageFunc](_src_page_elementhandle_.elementhandle.md#pagefunc)
* [pageFuncArgs](_src_page_elementhandle_.elementhandle.md#pagefuncargs)
* [pageFuncMany](_src_page_elementhandle_.elementhandle.md#pagefuncmany)

### Methods

* [bindBrowser](_src_page_elementhandle_.elementhandle.md#bindbrowser)
* [blur](_src_page_elementhandle_.elementhandle.md#blur)
* [centerPoint](_src_page_elementhandle_.elementhandle.md#centerpoint)
* [clear](_src_page_elementhandle_.elementhandle.md#clear)
* [clearHighlights](_src_page_elementhandle_.elementhandle.md#clearhighlights)
* [click](_src_page_elementhandle_.elementhandle.md#click)
* [dispose](_src_page_elementhandle_.elementhandle.md#dispose)
* [doubleClick](_src_page_elementhandle_.elementhandle.md#doubleclick)
* [find](_src_page_elementhandle_.elementhandle.md#find)
* [findElement](_src_page_elementhandle_.elementhandle.md#findelement)
* [findElements](_src_page_elementhandle_.elementhandle.md#findelements)
* [findMany](_src_page_elementhandle_.elementhandle.md#findmany)
* [focus](_src_page_elementhandle_.elementhandle.md#focus)
* [getAttribute](_src_page_elementhandle_.elementhandle.md#getattribute)
* [getId](_src_page_elementhandle_.elementhandle.md#getid)
* [getProperty](_src_page_elementhandle_.elementhandle.md#getproperty)
* [highlight](_src_page_elementhandle_.elementhandle.md#highlight)
* [initErrorString](_src_page_elementhandle_.elementhandle.md#initerrorstring)
* [isDisplayed](_src_page_elementhandle_.elementhandle.md#isdisplayed)
* [isEnabled](_src_page_elementhandle_.elementhandle.md#isenabled)
* [isSelectable](_src_page_elementhandle_.elementhandle.md#isselectable)
* [isSelected](_src_page_elementhandle_.elementhandle.md#isselected)
* [location](_src_page_elementhandle_.elementhandle.md#location)
* [sendKeys](_src_page_elementhandle_.elementhandle.md#sendkeys)
* [size](_src_page_elementhandle_.elementhandle.md#size)
* [tagName](_src_page_elementhandle_.elementhandle.md#tagname)
* [takeScreenshot](_src_page_elementhandle_.elementhandle.md#takescreenshot)
* [text](_src_page_elementhandle_.elementhandle.md#text)
* [toErrorString](_src_page_elementhandle_.elementhandle.md#toerrorstring)
* [type](_src_page_elementhandle_.elementhandle.md#type)
* [uploadFile](_src_page_elementhandle_.elementhandle.md#uploadfile)

## Constructors

###  constructor

\+ **new ElementHandle**(`elt`: PElementHandle): *[ElementHandle](_src_page_elementhandle_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:134](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`elt` | PElementHandle |

**Returns:** *[ElementHandle](_src_page_elementhandle_.elementhandle.md)*

## Properties

###  element

• **element**: *PElementHandle*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md).[element](../interfaces/_src_page_types_.elementhandle.md#element)*

*Defined in [src/page/ElementHandle.ts:134](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L134)*

**`internal`** 

___

###  errorString

• **errorString**: *string* = "<element-handle>"

*Defined in [src/page/ElementHandle.ts:130](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L130)*

**`internal`** 

___

### `Private` fs

• **fs**: *[FilesystemAccessor](../interfaces/_src_page_elementhandle_.filesystemaccessor.md)*

*Defined in [src/page/ElementHandle.ts:125](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L125)*

**`internal`** 

## Accessors

### `Private` elementClient

• **get elementClient**(): *any*

*Defined in [src/page/ElementHandle.ts:456](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L456)*

**Returns:** *any*

___

### `Private` elementRemoteObject

• **get elementRemoteObject**(): *any*

*Defined in [src/page/ElementHandle.ts:461](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L461)*

**Returns:** *any*

___

###  pageFunc

• **get pageFunc**(): *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Defined in [src/page/ElementHandle.ts:180](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L180)*

**Returns:** *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

___

###  pageFuncArgs

• **get pageFuncArgs**(): *PElementHandle[]*

*Defined in [src/page/ElementHandle.ts:176](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L176)*

**Returns:** *PElementHandle[]*

___

###  pageFuncMany

• **get pageFuncMany**(): *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Defined in [src/page/ElementHandle.ts:184](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L184)*

**Returns:** *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

## Methods

###  bindBrowser

▸ **bindBrowser**(`filesystem`: [FilesystemAccessor](../interfaces/_src_page_elementhandle_.filesystemaccessor.md)): *void*

*Defined in [src/page/ElementHandle.ts:160](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`filesystem` | [FilesystemAccessor](../interfaces/_src_page_elementhandle_.filesystemaccessor.md) |

**Returns:** *void*

___

###  blur

▸ **blur**(): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:237](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L237)*

Clears focus from this element so that it will no longer receive keyboard inputs.

**Returns:** *Promise‹void›*

___

###  centerPoint

▸ **centerPoint**(): *Promise‹[Point](../modules/_src_page_mouse_.md#point)›*

*Defined in [src/page/ElementHandle.ts:434](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L434)*

Returns the center x,y coordinates of the element relative to the page.
This is useful as an input to <[Mouse]> operations such as <drag> or <move>.

**Returns:** *Promise‹[Point](../modules/_src_page_mouse_.md#point)›*

Point The [x,y] coordinates

___

###  clear

▸ **clear**(): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:212](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L212)*

Schedules a command to clear the value of this element.
This command has no effect if the underlying DOM element is neither a text
INPUT, SELECT, or a TEXTAREA element.

**Returns:** *Promise‹void›*

___

###  clearHighlights

▸ **clearHighlights**(): *Promise‹void›*

*Defined in [src/page/ElementHandle.ts:482](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L482)*

**Returns:** *Promise‹void›*

___

###  click

▸ **click**(`options?`: ClickOptions): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:193](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L193)*

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

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:465](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L465)*

**Returns:** *Promise‹void›*

___

###  doubleClick

▸ **doubleClick**(`options?`: ClickOptions): *Promise‹void›*

*Defined in [src/page/ElementHandle.ts:202](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L202)*

Sends a click event to the element attached to this handle. If the element is
currently outside the viewport it will first scroll to that element.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  find

▸ **find**(`context`: never, `node?`: undefined): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

*Defined in [src/page/ElementHandle.ts:168](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | never |
`node?` | undefined |

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

___

###  findElement

▸ **findElement**(`locator`: string | [Locator](../interfaces/_src_page_types_.locator.md)): *Promise‹IElementHandle | null›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:297](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`locator` | string \| [Locator](../interfaces/_src_page_types_.locator.md) |

**Returns:** *Promise‹IElementHandle | null›*

___

###  findElements

▸ **findElements**(`locator`: string | [Locator](../interfaces/_src_page_types_.locator.md)): *Promise‹IElementHandle[]›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:307](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L307)*

Locates all elements using the supplied <[Locator]>, returning an array of <[ElementHandle]>'s

**Parameters:**

Name | Type |
------ | ------ |
`locator` | string \| [Locator](../interfaces/_src_page_types_.locator.md) |

**Returns:** *Promise‹IElementHandle[]›*

___

###  findMany

▸ **findMany**(`context`: never, `node?`: undefined): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)[]›*

*Defined in [src/page/ElementHandle.ts:172](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | never |
`node?` | undefined |

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)[]›*

___

###  focus

▸ **focus**(): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:229](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L229)*

Sends focus to this element so that it receives keyboard inputs.

**Returns:** *Promise‹void›*

___

###  getAttribute

▸ **getAttribute**(`key`: string): *Promise‹string | null›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:331](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L331)*

Fetches the value of an attribute on this element

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  getId

▸ **getId**(): *Promise‹string | null›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:324](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L324)*

Fetches the remote elements `id` attribute.

**Returns:** *Promise‹string | null›*

___

###  getProperty

▸ **getProperty**(`key`: string): *Promise‹string | null›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:343](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L343)*

getProperty

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹string | null›*

___

###  highlight

▸ **highlight**(): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:469](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L469)*

**Returns:** *Promise‹void›*

___

###  initErrorString

▸ **initErrorString**(`foundVia?`: undefined | string): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)›*

*Defined in [src/page/ElementHandle.ts:139](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`foundVia?` | undefined \| string |

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)›*

___

###  isDisplayed

▸ **isDisplayed**(): *Promise‹boolean›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:388](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L388)*

Checks whether the remote element is displayed in the DOM and is visible to the user without being hidden by CSS or occluded by another element.

**Returns:** *Promise‹boolean›*

___

###  isEnabled

▸ **isEnabled**(): *Promise‹boolean›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:396](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L396)*

Checks whether the remote element is enabled. Typically this means it does not have a `disabled` property or attribute applied.

**Returns:** *Promise‹boolean›*

___

###  isSelectable

▸ **isSelectable**(): *Promise‹boolean›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:370](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L370)*

Checks whether the remote element is selectable. An element is selectable if it is an `<option>` or `input[type="checkbox"]` or radio button.

**Returns:** *Promise‹boolean›*

___

###  isSelected

▸ **isSelected**(): *Promise‹boolean›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:350](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L350)*

If the remote element is selectable (such as an `<option>` or `input[type="checkbox"]`) this methos will indicate whether it is selected.

**Returns:** *Promise‹boolean›*

___

###  location

▸ **location**(): *Promise‹object›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:447](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L447)*

Returns a promise that will be resolved to the element's location
as a {x:number, y:number} object.

**Returns:** *Promise‹object›*

___

###  sendKeys

▸ **sendKeys**(...`keys`: string[]): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:247](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L247)*

Sends a series of key modifiers to the element.

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹void›*

___

###  size

▸ **size**(): *Promise‹object›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:420](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L420)*

Returns a promise that will be resolved with the element's size
as a {width:number, height:number} object

**Returns:** *Promise‹object›*

___

###  tagName

▸ **tagName**(): *Promise‹string | null›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:317](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L317)*

Fetches the remote elements `tagName` property.

**Returns:** *Promise‹string | null›*

___

###  takeScreenshot

▸ **takeScreenshot**(`options?`: ScreenshotOptions): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:283](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L283)*

Takes a screenshot of this element and saves it to the results folder with a random name.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScreenshotOptions |

**Returns:** *Promise‹void›*

___

###  text

▸ **text**(): *Promise‹string›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:407](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L407)*

Get the visible (i.e. not hidden by CSS) innerText of this element, including sub-elements, without any leading or trailing whitespace.

**`memberof`** ElementHandle

**Returns:** *Promise‹string›*

___

###  toErrorString

▸ **toErrorString**(): *string*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/ElementHandle.ts:164](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L164)*

**Returns:** *string*

___

###  type

▸ **type**(`text`: string): *Promise‹void›*

*Implementation of [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)*

*Defined in [src/page/ElementHandle.ts:264](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L264)*

Sends a series of key presses to the element to simulate a user typing on the keyboard. Use this to fill in input fields.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *Promise‹void›*

___

###  uploadFile

▸ **uploadFile**(...`names`: string[]): *Promise‹void›*

*Defined in [src/page/ElementHandle.ts:275](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L275)*

Sets the value of the file input these files

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...names` | string[] | The name of a file you uploaded with this script. Relative to the script.  |

**Returns:** *Promise‹void›*