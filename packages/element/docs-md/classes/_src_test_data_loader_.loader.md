**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Loader"](../modules/_src_test_data_loader_.md) › [Loader](_src_test_data_loader_.loader.md)

# Class: Loader <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Loader**

  * [NullLoader](_src_test_data_loader_.nullloader.md)

  * [DataLoader](_src_test_data_loader_.dataloader.md)

  * [JSONLoader](_src_test_data_loader_.jsonloader.md)

  * [CSVLoader](_src_test_data_loader_.csvloader.md)

## Index

### Constructors

* [constructor](_src_test_data_loader_.loader.md#constructor)

### Properties

* [filePath](_src_test_data_loader_.loader.md#filepath)
* [isLoaded](_src_test_data_loader_.loader.md#isloaded)
* [isSet](_src_test_data_loader_.loader.md#isset)
* [lines](_src_test_data_loader_.loader.md#lines)
* [requestedFilename](_src_test_data_loader_.loader.md#requestedfilename)

### Methods

* [load](_src_test_data_loader_.loader.md#abstract-load)

## Constructors

###  constructor

\+ **new Loader**(`filePath`: string, `requestedFilename`: string): *[Loader](_src_test_data_loader_.loader.md)*

*Defined in [src/test-data/Loader.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`requestedFilename` | string |

**Returns:** *[Loader](_src_test_data_loader_.loader.md)*

## Properties

###  filePath

• **filePath**: *string*

*Defined in [src/test-data/Loader.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L11)*

___

###  isLoaded

• **isLoaded**: *boolean* = false

*Defined in [src/test-data/Loader.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L10)*

___

###  isSet

• **isSet**: *boolean* = true

*Defined in [src/test-data/Loader.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L8)*

___

###  lines

• **lines**: *T[]*

*Defined in [src/test-data/Loader.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L9)*

___

###  requestedFilename

• **requestedFilename**: *string*

*Defined in [src/test-data/Loader.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L11)*

## Methods

### `Abstract` load

▸ **load**(): *Promise‹void›*

*Defined in [src/test-data/Loader.ts:12](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Loader.ts#L12)*

**Returns:** *Promise‹void›*