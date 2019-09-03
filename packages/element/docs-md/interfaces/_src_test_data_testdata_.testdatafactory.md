**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/TestData"](../modules/_src_test_data_testdata_.md) › [TestDataFactory](_src_test_data_testdata_.testdatafactory.md)

# Interface: TestDataFactory

A `TestDataFactory` is available to be imported into your test script as `TestData`. Use this to load a <[TestDataSource]> which provides new test data to each iteration of your test.

TODO
Files should be uploaded to ...

## Hierarchy

* **TestDataFactory**

## Implemented by

* [BoundTestDataLoaders](../classes/_src_test_data_testdataloaders_.boundtestdataloaders.md)
* [NullTestDataLoaders](../classes/_src_test_data_testdataloaders_.nulltestdataloaders.md)
* [TestDataLoaders](../classes/_src_test_data_testdataloaders_.testdataloaders.md)

## Index

### Methods

* [fromCSV](_src_test_data_testdata_.testdatafactory.md#fromcsv)
* [fromData](_src_test_data_testdata_.testdatafactory.md#fromdata)
* [fromJSON](_src_test_data_testdata_.testdatafactory.md#fromjson)

## Methods

###  fromCSV

▸ **fromCSV**<**TRow**>(`filename`: string, `separator`: string): *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Defined in [src/test-data/TestData.ts:25](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L25)*

Loads test data from a CSV file, returning a `TestData` instance.

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | string | the CSV to load |
`separator` | string | (default: `,`) CSV separator to use  |

**Returns:** *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*

___

###  fromData

▸ **fromData**<**TRow**>(`objects`: TRow[]): *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Defined in [src/test-data/TestData.ts:17](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L17)*

Loads a standard Javascript array of data objects

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objects` | TRow[] | an array of data objects  |

**Returns:** *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*

___

###  fromJSON

▸ **fromJSON**<**TRow**>(`filename`: string): *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Defined in [src/test-data/TestData.ts:32](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L32)*

Loads data from a JSON ffile

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | string | the JSON to load.  |

**Returns:** *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹TRow›*