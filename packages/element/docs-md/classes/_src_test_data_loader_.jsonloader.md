**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Loader"](../modules/_src_test_data_loader_.md) › [JSONLoader](_src_test_data_loader_.jsonloader.md)

# Class: JSONLoader <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Loader](_src_test_data_loader_.loader.md)‹T›

  * **JSONLoader**

## Index

### Constructors

* [constructor](_src_test_data_loader_.jsonloader.md#constructor)

### Properties

* [filePath](_src_test_data_loader_.jsonloader.md#filepath)
* [isLoaded](_src_test_data_loader_.jsonloader.md#isloaded)
* [isSet](_src_test_data_loader_.jsonloader.md#isset)
* [lines](_src_test_data_loader_.jsonloader.md#lines)
* [requestedFilename](_src_test_data_loader_.jsonloader.md#requestedfilename)

### Methods

* [load](_src_test_data_loader_.jsonloader.md#load)
* [toString](_src_test_data_loader_.jsonloader.md#tostring)

## Constructors

###  constructor

\+ **new JSONLoader**(`filePath`: string, `requestedFilename`: string): *[JSONLoader](_src_test_data_loader_.jsonloader.md)*

*Inherited from [Loader](_src_test_data_loader_.loader.md).[constructor](_src_test_data_loader_.loader.md#constructor)*

*Defined in [src/test-data/Loader.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`requestedFilename` | string |

**Returns:** *[JSONLoader](_src_test_data_loader_.jsonloader.md)*

## Properties

###  filePath

• **filePath**: *string*

*Inherited from [Loader](_src_test_data_loader_.loader.md).[filePath](_src_test_data_loader_.loader.md#filepath)*

*Defined in [src/test-data/Loader.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L11)*

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

## Methods

###  load

▸ **load**(): *Promise‹void›*

*Overrides [Loader](_src_test_data_loader_.loader.md).[load](_src_test_data_loader_.loader.md#abstract-load)*

*Defined in [src/test-data/Loader.ts:70](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L70)*

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/test-data/Loader.ts:90](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L90)*

**Returns:** *string*