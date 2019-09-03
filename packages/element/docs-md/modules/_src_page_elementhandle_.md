**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/ElementHandle"](_src_page_elementhandle_.md)

# External module: "src/page/ElementHandle"

## Index

### Classes

* [ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md)

### Interfaces

* [FilesystemAccessor](../interfaces/_src_page_elementhandle_.filesystemaccessor.md)

### Variables

* [debug](_src_page_elementhandle_.md#const-debug)

### Functions

* [domError](_src_page_elementhandle_.md#domerror)
* [getProperty](_src_page_elementhandle_.md#getproperty)
* [wrapDescriptiveError](_src_page_elementhandle_.md#wrapdescriptiveerror)

## Variables

### `Const` debug

• **debug**: *IDebugger* =  debugFactory('element:page:element-handle')

*Defined in [src/page/ElementHandle.ts:17](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L17)*

## Functions

###  domError

▸ **domError**(`err`: Error, `target`: [ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md), `key`: string, `callCtx`: string, `options?`: ClickOptions): *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹[ActionErrorData](../interfaces/_src_runtime_errors_types_.actionerrordata.md) | [EmptyErrorData](../interfaces/_src_runtime_errors_types_.emptyerrordata.md)› | undefined*

*Defined in [src/page/ElementHandle.ts:86](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L86)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`target` | [ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md) |
`key` | string |
`callCtx` | string |
`options?` | ClickOptions |

**Returns:** *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹[ActionErrorData](../interfaces/_src_runtime_errors_types_.actionerrordata.md) | [EmptyErrorData](../interfaces/_src_runtime_errors_types_.emptyerrordata.md)› | undefined*

___

###  getProperty

▸ **getProperty**<**T**>(`element`: PElementHandle, `prop`: string): *Promise‹T | null›*

*Defined in [src/page/ElementHandle.ts:22](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L22)*

**`internal`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`element` | PElementHandle |
`prop` | string |

**Returns:** *Promise‹T | null›*

___

###  wrapDescriptiveError

▸ **wrapDescriptiveError**(...`errorInterpreters`: [ErrorInterpreter](_src_runtime_errors_types_.md#errorinterpreter)‹[ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md), [AnyErrorData](_src_runtime_errors_types_.md#anyerrordata)›[]): *(Anonymous function)*

*Defined in [src/page/ElementHandle.ts:36](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/ElementHandle.ts#L36)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`...errorInterpreters` | [ErrorInterpreter](_src_runtime_errors_types_.md#errorinterpreter)‹[ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md), [AnyErrorData](_src_runtime_errors_types_.md#anyerrordata)›[] |

**Returns:** *(Anonymous function)*