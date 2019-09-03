**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/TestDataLoaders"](../modules/_src_test_data_testdataloaders_.md) › [NullTestDataLoaders](_src_test_data_testdataloaders_.nulltestdataloaders.md)

# Class: NullTestDataLoaders

## Hierarchy

* **NullTestDataLoaders**

## Implements

* [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)

## Index

### Methods

* [fromCSV](_src_test_data_testdataloaders_.nulltestdataloaders.md#fromcsv)
* [fromData](_src_test_data_testdataloaders_.nulltestdataloaders.md#fromdata)
* [fromJSON](_src_test_data_testdataloaders_.nulltestdataloaders.md#fromjson)

## Methods

###  fromCSV

▸ **fromCSV**<**TRow**>(`filename`: string, `separator`: string): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Implementation of [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:37](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L37)*

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

*Defined in [src/test-data/TestDataLoaders.ts:34](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L34)*

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

*Defined in [src/test-data/TestDataLoaders.ts:40](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L40)*

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*