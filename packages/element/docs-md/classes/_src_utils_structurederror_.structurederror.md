**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/utils/StructuredError"](../modules/_src_utils_structurederror_.md) › [StructuredError](_src_utils_structurederror_.structurederror.md)

# Class: StructuredError <**T**>

## Type parameters

▪ **T**

## Hierarchy

* Error

  * **StructuredError**

## Index

### Constructors

* [constructor](_src_utils_structurederror_.structurederror.md#constructor)

### Properties

* [_structured](_src_utils_structurederror_.structurederror.md#_structured)
* [callContext](_src_utils_structurederror_.structurederror.md#optional-callcontext)
* [data](_src_utils_structurederror_.structurederror.md#data)
* [kind](_src_utils_structurederror_.structurederror.md#kind)
* [message](_src_utils_structurederror_.structurederror.md#message)
* [name](_src_utils_structurederror_.structurederror.md#name)
* [originalError](_src_utils_structurederror_.structurederror.md#optional-originalerror)
* [source](_src_utils_structurederror_.structurederror.md#source)
* [stack](_src_utils_structurederror_.structurederror.md#optional-stack)
* [wrappedUnstructured](_src_utils_structurederror_.structurederror.md#wrappedunstructured)
* [Error](_src_utils_structurederror_.structurederror.md#static-error)

### Methods

* [copyStackFromOriginalError](_src_utils_structurederror_.structurederror.md#copystackfromoriginalerror)
* [cast](_src_utils_structurederror_.structurederror.md#static-cast)
* [isA](_src_utils_structurederror_.structurederror.md#static-isa)
* [liftWithSource](_src_utils_structurederror_.structurederror.md#static-liftwithsource)
* [wrapBareError](_src_utils_structurederror_.structurederror.md#static-wrapbareerror)

## Constructors

###  constructor

\+ **new StructuredError**(`message`: string, `data`: T, `originalError?`: [Error](_src_utils_structurederror_.structurederror.md#static-error), `source?`: undefined | string, `callContext?`: undefined | string): *[StructuredError](_src_utils_structurederror_.structurederror.md)*

*Defined in [src/utils/StructuredError.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`data` | T |
`originalError?` | [Error](_src_utils_structurederror_.structurederror.md#static-error) |
`source?` | undefined \| string |
`callContext?` | undefined \| string |

**Returns:** *[StructuredError](_src_utils_structurederror_.structurederror.md)*

## Properties

###  _structured

• **_structured**: *string* = "yes"

*Defined in [src/utils/StructuredError.ts:6](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L6)*

___

### `Optional` callContext

• **callContext**? : *undefined | string*

*Defined in [src/utils/StructuredError.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L11)*

___

###  data

• **data**: *T*

*Defined in [src/utils/StructuredError.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L13)*

___

###  kind

• **kind**: *string*

*Defined in [src/utils/StructuredError.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L9)*

___

###  message

• **message**: *string*

*Overrides void*

*Defined in [src/utils/StructuredError.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L18)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in /Users/ivanvanderbyl/dev/flood/element/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:903

___

### `Optional` originalError

• **originalError**? : *[Error](_src_utils_structurederror_.structurederror.md#static-error)*

*Defined in [src/utils/StructuredError.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L15)*

___

###  source

• **source**: *string* = "unknown"

*Defined in [src/utils/StructuredError.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L10)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Overrides void*

*Defined in [src/utils/StructuredError.ts:14](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L14)*

___

###  wrappedUnstructured

• **wrappedUnstructured**: *boolean* = false

*Defined in [src/utils/StructuredError.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L8)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in /Users/ivanvanderbyl/dev/flood/element/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:914

## Methods

###  copyStackFromOriginalError

▸ **copyStackFromOriginalError**(): *[StructuredError](_src_utils_structurederror_.structurederror.md)‹T›*

*Defined in [src/utils/StructuredError.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L35)*

**Returns:** *[StructuredError](_src_utils_structurederror_.structurederror.md)‹T›*

___

### `Static` cast

▸ **cast**<**TT**>(`err`: Error): *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT› | undefined*

*Defined in [src/utils/StructuredError.ts:66](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L66)*

**Type parameters:**

▪ **TT**

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT› | undefined*

___

### `Static` isA

▸ **isA**<**TT**>(`err`: Error): *boolean*

*Defined in [src/utils/StructuredError.ts:62](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L62)*

**Type parameters:**

▪ **TT**

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *boolean*

___

### `Static` liftWithSource

▸ **liftWithSource**<**TT**>(`err`: Error, `source`: string, `callContext`: string): *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT | [EmptyErrorData](../interfaces/_src_utils_structurederror_.emptyerrordata.md)›*

*Defined in [src/utils/StructuredError.ts:42](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L42)*

**Type parameters:**

▪ **TT**

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`source` | string |
`callContext` | string |

**Returns:** *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT | [EmptyErrorData](../interfaces/_src_utils_structurederror_.emptyerrordata.md)›*

___

### `Static` wrapBareError

▸ **wrapBareError**<**TT**>(`err`: Error, `data`: TT, `source?`: undefined | string, `kind?`: undefined | string): *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT›*

*Defined in [src/utils/StructuredError.ts:74](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/StructuredError.ts#L74)*

**Type parameters:**

▪ **TT**

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`data` | TT |
`source?` | undefined \| string |
`kind?` | undefined \| string |

**Returns:** *[StructuredError](_src_utils_structurederror_.structurederror.md)‹TT›*