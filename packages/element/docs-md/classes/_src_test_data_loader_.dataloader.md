**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Loader"](../modules/_src_test_data_loader_.md) › [DataLoader](_src_test_data_loader_.dataloader.md)

# Class: DataLoader <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Loader](_src_test_data_loader_.loader.md)‹T›

  * **DataLoader**

## Index

### Constructors

* [constructor](_src_test_data_loader_.dataloader.md#constructor)

### Properties

* [filePath](_src_test_data_loader_.dataloader.md#filepath)
* [isLoaded](_src_test_data_loader_.dataloader.md#isloaded)
* [isSet](_src_test_data_loader_.dataloader.md#isset)
* [lines](_src_test_data_loader_.dataloader.md#lines)
* [requestedFilename](_src_test_data_loader_.dataloader.md#requestedfilename)

### Methods

* [load](_src_test_data_loader_.dataloader.md#load)
* [toString](_src_test_data_loader_.dataloader.md#tostring)

## Constructors

###  constructor

\+ **new DataLoader**(`lines`: T[]): *[DataLoader](_src_test_data_loader_.dataloader.md)*

*Overrides [Loader](_src_test_data_loader_.loader.md).[constructor](_src_test_data_loader_.loader.md#constructor)*

*Defined in [src/test-data/Loader.ts:27](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | T[] |

**Returns:** *[DataLoader](_src_test_data_loader_.dataloader.md)*

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

*Overrides [Loader](_src_test_data_loader_.loader.md).[lines](_src_test_data_loader_.loader.md#lines)*

*Defined in [src/test-data/Loader.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L28)*

___

###  requestedFilename

• **requestedFilename**: *string*

*Inherited from [Loader](_src_test_data_loader_.loader.md).[requestedFilename](_src_test_data_loader_.loader.md#requestedfilename)*

*Defined in [src/test-data/Loader.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L11)*

## Methods

###  load

▸ **load**(): *Promise‹void›*

*Overrides [Loader](_src_test_data_loader_.loader.md).[load](_src_test_data_loader_.loader.md#abstract-load)*

*Defined in [src/test-data/Loader.ts:39](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L39)*

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/test-data/Loader.ts:43](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L43)*

**Returns:** *string*