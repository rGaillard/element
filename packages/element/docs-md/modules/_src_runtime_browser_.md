**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Browser"](_src_runtime_browser_.md)

# External module: "src/runtime/Browser"

## Index

### Classes

* [Browser](../classes/_src_runtime_browser_.browser.md)

### Variables

* [debug](_src_runtime_browser_.md#const-debug)
* [debugScreenshot](_src_runtime_browser_.md#const-debugscreenshot)

### Functions

* [getFrames](_src_runtime_browser_.md#const-getframes)
* [locatableToLocator](_src_runtime_browser_.md#locatabletolocator)
* [toLocatorError](_src_runtime_browser_.md#tolocatorerror)

## Variables

### `Const` debug

• **debug**: *IDebugger* =  debugFactory('element:runtime:browser')

*Defined in [src/runtime/Browser.ts:31](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L31)*

___

### `Const` debugScreenshot

• **debugScreenshot**: *IDebugger* =  debugFactory('element:runtime:browser:screenshot')

*Defined in [src/runtime/Browser.ts:32](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L32)*

## Functions

### `Const` getFrames

▸ **getFrames**(`childFrames`: Frame[], `collection?`: Set‹Frame›): *Frame[]*

*Defined in [src/runtime/Browser.ts:71](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`childFrames` | Frame[] |
`collection?` | Set‹Frame› |

**Returns:** *Frame[]*

___

###  locatableToLocator

▸ **locatableToLocator**(`el`: [NullableLocatable](_src_runtime_types_.md#nullablelocatable), `callCtx`: string): *[Locator](../interfaces/_src_page_types_.locator.md) | never*

*Defined in [src/runtime/Browser.ts:60](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | [NullableLocatable](_src_runtime_types_.md#nullablelocatable) |
`callCtx` | string |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md) | never*

___

###  toLocatorError

▸ **toLocatorError**(`locatable`: [NullableLocatable](_src_runtime_types_.md#nullablelocatable), `callContext`: string): *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹[LocatorErrorData](../interfaces/_src_runtime_errors_types_.locatorerrordata.md)›*

*Defined in [src/runtime/Browser.ts:34](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](_src_runtime_types_.md#nullablelocatable) |
`callContext` | string |

**Returns:** *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹[LocatorErrorData](../interfaces/_src_runtime_errors_types_.locatorerrordata.md)›*