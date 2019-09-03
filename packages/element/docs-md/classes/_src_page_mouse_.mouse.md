**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/Mouse"](../modules/_src_page_mouse_.md) › [Mouse](_src_page_mouse_.mouse.md)

# Class: Mouse

Mouse represents a virtual pointing device which can be used for common Mouse or Touch operations.

**`class`** Mouse

## Hierarchy

* **Mouse**

## Index

### Constructors

* [constructor](_src_page_mouse_.mouse.md#constructor)

### Properties

* [browser](_src_page_mouse_.mouse.md#private-browser)

### Methods

* [click](_src_page_mouse_.mouse.md#click)
* [down](_src_page_mouse_.mouse.md#down)
* [drag](_src_page_mouse_.mouse.md#drag)
* [move](_src_page_mouse_.mouse.md#move)
* [up](_src_page_mouse_.mouse.md#up)

## Constructors

###  constructor

\+ **new Mouse**(`browser`: [Browser](_src_runtime_browser_.browser.md)‹any›): *[Mouse](_src_page_mouse_.mouse.md)*

*Defined in [src/page/Mouse.ts:12](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](_src_runtime_browser_.browser.md)‹any› |

**Returns:** *[Mouse](_src_page_mouse_.mouse.md)*

## Properties

### `Private` browser

• **browser**: *[Browser](_src_runtime_browser_.browser.md)‹any›*

*Defined in [src/page/Mouse.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L13)*

## Methods

###  click

▸ **click**(`x`: number, `y`: number, `options?`: ClickOptions): *Promise‹void›*

*Defined in [src/page/Mouse.ts:52](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L52)*

Shortcut for `mouse.move`, `mouse.down` and `mouse.up`.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  down

▸ **down**(`options?`: MousePressOptions): *Promise‹void›*

*Defined in [src/page/Mouse.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L18)*

Dispatches a `mousedown` event

**Parameters:**

Name | Type |
------ | ------ |
`options?` | MousePressOptions |

**Returns:** *Promise‹void›*

___

###  drag

▸ **drag**(...`points`: [Point](../modules/_src_page_mouse_.md#point)[]): *Promise‹void›*

*Defined in [src/page/Mouse.ts:41](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L41)*

Shortcut for `mouse.move`, `mouse.down`, `mouse.move` and `mouse.up`.

**Parameters:**

Name | Type |
------ | ------ |
`...points` | [Point](../modules/_src_page_mouse_.md#point)[] |

**Returns:** *Promise‹void›*

___

###  move

▸ **move**(...`points`: [Point](../modules/_src_page_mouse_.md#point)[]): *Promise‹void›*

*Defined in [src/page/Mouse.ts:32](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L32)*

Dispatches a `mousemove` event

**Parameters:**

Name | Type |
------ | ------ |
`...points` | [Point](../modules/_src_page_mouse_.md#point)[] |

**Returns:** *Promise‹void›*

___

###  up

▸ **up**(`options?`: MousePressOptions): *Promise‹void›*

*Defined in [src/page/Mouse.ts:25](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Mouse.ts#L25)*

Dispatches a `mouseup` event

**Parameters:**

Name | Type |
------ | ------ |
`options?` | MousePressOptions |

**Returns:** *Promise‹void›*