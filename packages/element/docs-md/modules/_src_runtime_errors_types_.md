**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/errors/Types"](_src_runtime_errors_types_.md)

# External module: "src/runtime/errors/Types"

## Index

### Interfaces

* [ActionErrorData](../interfaces/_src_runtime_errors_types_.actionerrordata.md)
* [AssertionErrorData](../interfaces/_src_runtime_errors_types_.assertionerrordata.md)
* [EmptyErrorData](../interfaces/_src_runtime_errors_types_.emptyerrordata.md)
* [ErrorData](../interfaces/_src_runtime_errors_types_.errordata.md)
* [LocatorErrorData](../interfaces/_src_runtime_errors_types_.locatorerrordata.md)
* [NetworkErrorData](../interfaces/_src_runtime_errors_types_.networkerrordata.md)
* [PuppeteerErrorData](../interfaces/_src_runtime_errors_types_.puppeteererrordata.md)

### Type aliases

* [ActionErrorKind](_src_runtime_errors_types_.md#actionerrorkind)
* [AnyErrorData](_src_runtime_errors_types_.md#anyerrordata)
* [ErrorDataKind](_src_runtime_errors_types_.md#errordatakind)
* [ErrorInterpreter](_src_runtime_errors_types_.md#errorinterpreter)
* [NetworkErrorKind](_src_runtime_errors_types_.md#networkerrorkind)
* [PuppeteerErrorKind](_src_runtime_errors_types_.md#puppeteererrorkind)

### Functions

* [castStructuredError](_src_runtime_errors_types_.md#caststructurederror)
* [getStructuredData](_src_runtime_errors_types_.md#getstructureddata)
* [interpretError](_src_runtime_errors_types_.md#interpreterror)

### Object literals

* [emptyErrorData](_src_runtime_errors_types_.md#const-emptyerrordata)

## Type aliases

###  ActionErrorKind

Ƭ **ActionErrorKind**: *"wait-timeout" | "node-detached"*

*Defined in [src/runtime/errors/Types.ts:39](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L39)*

___

###  AnyErrorData

Ƭ **AnyErrorData**: *[EmptyErrorData](../interfaces/_src_runtime_errors_types_.emptyerrordata.md) | [NetworkErrorData](../interfaces/_src_runtime_errors_types_.networkerrordata.md) | [ActionErrorData](../interfaces/_src_runtime_errors_types_.actionerrordata.md) | [AssertionErrorData](../interfaces/_src_runtime_errors_types_.assertionerrordata.md) | [LocatorErrorData](../interfaces/_src_runtime_errors_types_.locatorerrordata.md) | [PuppeteerErrorData](../interfaces/_src_runtime_errors_types_.puppeteererrordata.md)*

*Defined in [src/runtime/errors/Types.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L10)*

___

###  ErrorDataKind

Ƭ **ErrorDataKind**: *"net" | "action" | "empty" | "assertion" | "locator" | "puppeteer"*

*Defined in [src/runtime/errors/Types.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L18)*

___

###  ErrorInterpreter

Ƭ **ErrorInterpreter**: *function*

*Defined in [src/runtime/errors/Types.ts:3](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L3)*

#### Type declaration:

▸ (`err`: Error, `target`: T, `key`: string, ...`args`: any[]): *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹U› | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`target` | T |
`key` | string |
`...args` | any[] |

___

###  NetworkErrorKind

Ƭ **NetworkErrorKind**: *"net" | "http"*

*Defined in [src/runtime/errors/Types.ts:29](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L29)*

___

###  PuppeteerErrorKind

Ƭ **PuppeteerErrorKind**: *"execution-context-destroyed" | "evaluation-timeout"*

*Defined in [src/runtime/errors/Types.ts:56](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L56)*

## Functions

###  castStructuredError

▸ **castStructuredError**<**T**>(`error`: Error, `kind`: [ErrorDataKind](_src_runtime_errors_types_.md#errordatakind)): *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹T› | undefined*

*Defined in [src/runtime/errors/Types.ts:77](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L77)*

**Type parameters:**

▪ **T**: *[ErrorData](../interfaces/_src_runtime_errors_types_.errordata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`kind` | [ErrorDataKind](_src_runtime_errors_types_.md#errordatakind) |

**Returns:** *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹T› | undefined*

___

###  getStructuredData

▸ **getStructuredData**<**T**>(`error`: Error, `kind`: [ErrorDataKind](_src_runtime_errors_types_.md#errordatakind)): *T | undefined*

*Defined in [src/runtime/errors/Types.ts:91](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L91)*

**Type parameters:**

▪ **T**: *[ErrorData](../interfaces/_src_runtime_errors_types_.errordata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`kind` | [ErrorDataKind](_src_runtime_errors_types_.md#errordatakind) |

**Returns:** *T | undefined*

___

###  interpretError

▸ **interpretError**<**T**, **U**>(`interpreters`: [ErrorInterpreter](_src_runtime_errors_types_.md#errorinterpreter)‹T, U›[], `inputError`: Error, `target`: T, `propertyKey`: string, `args`: any[]): *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹U› | Error*

*Defined in [src/runtime/errors/Types.ts:62](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L62)*

**Type parameters:**

▪ **T**

▪ **U**: *[ErrorData](../interfaces/_src_runtime_errors_types_.errordata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`interpreters` | [ErrorInterpreter](_src_runtime_errors_types_.md#errorinterpreter)‹T, U›[] |
`inputError` | Error |
`target` | T |
`propertyKey` | string |
`args` | any[] |

**Returns:** *[StructuredError](../classes/_src_utils_structurederror_.structurederror.md)‹U› | Error*

## Object literals

### `Const` emptyErrorData

### ▪ **emptyErrorData**: *object*

*Defined in [src/runtime/errors/Types.ts:27](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L27)*

###  _kind

• **_kind**: *"puppeteer" | "empty" | "net" | "action" | "assertion" | "locator"* =  'empty' as ErrorDataKind

*Defined in [src/runtime/errors/Types.ts:27](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/errors/Types.ts#L27)*