**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Loader"](../modules/_src_test_data_loader_.md) › [CSVLoader](_src_test_data_loader_.csvloader.md)

# Class: CSVLoader <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Loader](_src_test_data_loader_.loader.md)‹T›

  * **CSVLoader**

## Index

### Constructors

* [constructor](_src_test_data_loader_.csvloader.md#constructor)

### Properties

* [filePath](_src_test_data_loader_.csvloader.md#filepath)
* [isLoaded](_src_test_data_loader_.csvloader.md#isloaded)
* [isSet](_src_test_data_loader_.csvloader.md#isset)
* [lines](_src_test_data_loader_.csvloader.md#lines)
* [requestedFilename](_src_test_data_loader_.csvloader.md#requestedfilename)
* [separator](_src_test_data_loader_.csvloader.md#private-separator)

### Methods

* [load](_src_test_data_loader_.csvloader.md#load)
* [toString](_src_test_data_loader_.csvloader.md#tostring)

## Constructors

###  constructor

\+ **new CSVLoader**(`filePath`: string, `separator`: string, `requestedFilename`: string): *[CSVLoader](_src_test_data_loader_.csvloader.md)*

*Overrides [Loader](_src_test_data_loader_.loader.md).[constructor](_src_test_data_loader_.loader.md#constructor)*

*Defined in [src/test-data/Loader.ts:95](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L95)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filePath` | string | - |
`separator` | string | "," |
`requestedFilename` | string | - |

**Returns:** *[CSVLoader](_src_test_data_loader_.csvloader.md)*

## Properties

###  filePath

• **filePath**: *string*

*Overrides [Loader](_src_test_data_loader_.loader.md).[filePath](_src_test_data_loader_.loader.md#filepath)*

*Defined in [src/test-data/Loader.ts:96](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L96)*

___

###  isLoaded

• **isLoaded**: *boolean* = false

*Inherited from [Loader](_src_test_data_loader_.loader.md).[isLoaded](_src_test_data_loader_.loader.md#isloaded)*

*Defined in [src/test-data/Loader.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L10)*

___

###  isSet

• **isSet**: *boolean* = true

*Inherited from [Loader](_src_test_data_loader_.loader.md).[isSet](_src_test_data_loader_.loader.md#isset)*

*Defined in [src/test-data/Loader.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L8)*

___

###  lines

• **lines**: *T[]*

*Inherited from [Loader](_src_test_data_loader_.loader.md).[lines](_src_test_data_loader_.loader.md#lines)*

*Defined in [src/test-data/Loader.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L9)*

___

###  requestedFilename

• **requestedFilename**: *string*

*Inherited from [Loader](_src_test_data_loader_.loader.md).[requestedFilename](_src_test_data_loader_.loader.md#requestedfilename)*

*Defined in [src/test-data/Loader.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L11)*

___

### `Private` separator

• **separator**: *string*

*Defined in [src/test-data/Loader.ts:96](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L96)*

## Methods

###  load

▸ **load**(): *Promise‹void›*

*Overrides [Loader](_src_test_data_loader_.loader.md).[load](_src_test_data_loader_.loader.md#abstract-load)*

*Defined in [src/test-data/Loader.ts:100](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L100)*

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/test-data/Loader.ts:121](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L121)*

**Returns:** *string*