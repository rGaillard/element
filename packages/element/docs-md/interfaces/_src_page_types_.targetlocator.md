**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/types"](../modules/_src_page_types_.md) › [TargetLocator](_src_page_types_.targetlocator.md)

# Interface: TargetLocator

The target locator is accessed through `browser.switchTo()` and enables you to switch frames, tabs, or browser windows. As well as access the `activeElement` or an alert box.

**`class`** TargetLocator

## Hierarchy

* **TargetLocator**

## Implemented by

* [TargetLocator](../classes/_src_page_targetlocator_.targetlocator.md)

## Index

### Methods

* [activeElement](_src_page_types_.targetlocator.md#activeelement)
* [defaultContent](_src_page_types_.targetlocator.md#defaultcontent)
* [frame](_src_page_types_.targetlocator.md#frame)

## Methods

###  activeElement

▸ **activeElement**(): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

*Defined in [src/page/types.ts:166](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L166)*

Locates the DOM element on the current page that corresponds to
`document.activeElement` or `document.body` if the active element is not
available.

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

___

###  defaultContent

▸ **defaultContent**(): *Promise‹void›*

*Defined in [src/page/types.ts:171](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L171)*

Navigates to the topmost frame

**Returns:** *Promise‹void›*

___

###  frame

▸ **frame**(`id`: number | string | [ElementHandle](_src_page_types_.elementhandle.md)): *Promise‹void›*

*Defined in [src/page/types.ts:184](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L184)*

Changes the active target to another frame.

Accepts either:

number: Switch to frame by index in window.frames,
string: Switch to frame by frame.name or frame.id, whichever matches first,
ElementHandle: Switch to a frame using the supplied ElementHandle of a frame.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number \| string \| [ElementHandle](_src_page_types_.elementhandle.md) | number | string | ElementHandle  |

**Returns:** *Promise‹void›*