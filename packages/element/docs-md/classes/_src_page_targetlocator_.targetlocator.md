**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/TargetLocator"](../modules/_src_page_targetlocator_.md) › [TargetLocator](_src_page_targetlocator_.targetlocator.md)

# Class: TargetLocator

**`internal`** 

## Hierarchy

* **TargetLocator**

## Implements

* [TargetLocator](../interfaces/_src_page_types_.targetlocator.md)

## Index

### Constructors

* [constructor](_src_page_targetlocator_.targetlocator.md#constructor)

### Properties

* [apply](_src_page_targetlocator_.targetlocator.md#private-apply)
* [page](_src_page_targetlocator_.targetlocator.md#private-page)

### Methods

* [activeElement](_src_page_targetlocator_.targetlocator.md#activeelement)
* [defaultContent](_src_page_targetlocator_.targetlocator.md#defaultcontent)
* [frame](_src_page_targetlocator_.targetlocator.md#frame)

## Constructors

###  constructor

\+ **new TargetLocator**(`page`: Page, `apply`: function): *[TargetLocator](_src_page_targetlocator_.targetlocator.md)*

*Defined in [src/page/TargetLocator.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L9)*

**Parameters:**

▪ **page**: *Page*

▪ **apply**: *function*

▸ (`frame`: Frame | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame \| null |

**Returns:** *[TargetLocator](_src_page_targetlocator_.targetlocator.md)*

## Properties

### `Private` apply

• **apply**: *function*

*Defined in [src/page/TargetLocator.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L10)*

#### Type declaration:

▸ (`frame`: Frame | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame \| null |

___

### `Private` page

• **page**: *Page*

*Defined in [src/page/TargetLocator.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L10)*

## Methods

###  activeElement

▸ **activeElement**(): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

*Implementation of [TargetLocator](../interfaces/_src_page_types_.targetlocator.md)*

*Defined in [src/page/TargetLocator.ts:12](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L12)*

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

___

###  defaultContent

▸ **defaultContent**(): *Promise‹void›*

*Implementation of [TargetLocator](../interfaces/_src_page_types_.targetlocator.md)*

*Defined in [src/page/TargetLocator.ts:25](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L25)*

Navigates to the topmost frame

**Returns:** *Promise‹void›*

___

###  frame

▸ **frame**(`id`: number | string | IElementHandle): *Promise‹void›*

*Defined in [src/page/TargetLocator.ts:40](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/TargetLocator.ts#L40)*

Changes the active target to another frame.

Accepts either:

number: Switch to frame by index in window.frames,
string: Switch to frame by frame.name or frame.id, whichever matches first,
ElementHandle: Switch to a frame using the supplied ElementHandle of a frame.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number \| string \| IElementHandle | number | string | ElementHandle  |

**Returns:** *Promise‹void›*