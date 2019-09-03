**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/TestDataLoaders"](../modules/_src_test_data_testdataloaders_.md) › [TestDataLoaders](_src_test_data_testdataloaders_.testdataloaders.md)

# Class: TestDataLoaders

## Hierarchy

* **TestDataLoaders**

## Implements

* [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)

## Index

### Constructors

* [constructor](_src_test_data_testdataloaders_.testdataloaders.md#constructor)

### Properties

* [workRoot](_src_test_data_testdataloaders_.testdataloaders.md#private-workroot)

### Methods

* [fromCSV](_src_test_data_testdataloaders_.testdataloaders.md#fromcsv)
* [fromData](_src_test_data_testdataloaders_.testdataloaders.md#fromdata)
* [fromJSON](_src_test_data_testdataloaders_.testdataloaders.md#fromjson)

## Constructors

###  constructor

\+ **new TestDataLoaders**(`workRoot`: [WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md)): *[TestDataLoaders](_src_test_data_testdataloaders_.testdataloaders.md)*

*Defined in [src/test-data/TestDataLoaders.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`workRoot` | [WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md) |

**Returns:** *[TestDataLoaders](_src_test_data_testdataloaders_.testdataloaders.md)*

## Properties

### `Private` workRoot

• **workRoot**: *[WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md)*

*Defined in [src/test-data/TestDataLoaders.ts:6](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L6)*

## Methods

###  fromCSV

▸ **fromCSV**<**TRow**>(`filename`: string, `separator`: string): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Implementation of [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:19](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L19)*

Loads test data from a CSV file, returning a `<[TestDataSource]>` instance.

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filename` | string | - |
`separator` | string | "," |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

___

###  fromData

▸ **fromData**<**TRow**>(`lines`: TRow[]): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Implementation of [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L11)*

Loads a standard Javascript array of data objects

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type |
------ | ------ |
`lines` | TRow[] |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

___

###  fromJSON

▸ **fromJSON**<**TRow**>(`filename`: string): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Implementation of [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:27](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L27)*

Loads data from a JSON ffile

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*