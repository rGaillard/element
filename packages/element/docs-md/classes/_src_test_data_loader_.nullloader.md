**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Loader"](../modules/_src_test_data_loader_.md) › [NullLoader](_src_test_data_loader_.nullloader.md)

# Class: NullLoader <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Loader](_src_test_data_loader_.loader.md)‹T›

  * **NullLoader**

## Index

### Constructors

* [constructor](_src_test_data_loader_.nullloader.md#constructor)

### Properties

* [filePath](_src_test_data_loader_.nullloader.md#filepath)
* [isLoaded](_src_test_data_loader_.nullloader.md#isloaded)
* [isSet](_src_test_data_loader_.nullloader.md#isset)
* [lines](_src_test_data_loader_.nullloader.md#lines)
* [requestedFilename](_src_test_data_loader_.nullloader.md#requestedfilename)

### Methods

* [load](_src_test_data_loader_.nullloader.md#load)

## Constructors

###  constructor

\+ **new NullLoader**(): *[NullLoader](_src_test_data_loader_.nullloader.md)*

*Overrides [Loader](_src_test_data_loader_.loader.md).[constructor](_src_test_data_loader_.loader.md#constructor)*

*Defined in [src/test-data/Loader.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L15)*

**Returns:** *[NullLoader](_src_test_data_loader_.nullloader.md)*

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

*Defined in [src/test-data/Loader.ts:22](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L22)*

**Returns:** *Promise‹void›*