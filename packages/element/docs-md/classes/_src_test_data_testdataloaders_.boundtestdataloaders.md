**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/TestDataLoaders"](../modules/_src_test_data_testdataloaders_.md) › [BoundTestDataLoaders](_src_test_data_testdataloaders_.boundtestdataloaders.md)

# Class: BoundTestDataLoaders

## Hierarchy

* **BoundTestDataLoaders**

## Implements

* [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)

## Index

### Constructors

* [constructor](_src_test_data_testdataloaders_.boundtestdataloaders.md#constructor)

### Properties

* [innerLoaders](_src_test_data_testdataloaders_.boundtestdataloaders.md#private-innerloaders)
* [target](_src_test_data_testdataloaders_.boundtestdataloaders.md#private-target)

### Methods

* [fromCSV](_src_test_data_testdataloaders_.boundtestdataloaders.md#fromcsv)
* [fromData](_src_test_data_testdataloaders_.boundtestdataloaders.md#fromdata)
* [fromJSON](_src_test_data_testdataloaders_.boundtestdataloaders.md#fromjson)

## Constructors

###  constructor

\+ **new BoundTestDataLoaders**(`target`: [hasATestData](../interfaces/_src_test_data_testdataloaders_.hasatestdata.md), `workRoot`: [WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md)): *[BoundTestDataLoaders](_src_test_data_testdataloaders_.boundtestdataloaders.md)*

*Defined in [src/test-data/TestDataLoaders.ts:50](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [hasATestData](../interfaces/_src_test_data_testdataloaders_.hasatestdata.md) |
`workRoot` | [WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md) |

**Returns:** *[BoundTestDataLoaders](_src_test_data_testdataloaders_.boundtestdataloaders.md)*

## Properties

### `Private` innerLoaders

• **innerLoaders**: *[TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:50](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L50)*

___

### `Private` target

• **target**: *[hasATestData](../interfaces/_src_test_data_testdataloaders_.hasatestdata.md)*

*Defined in [src/test-data/TestDataLoaders.ts:52](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L52)*

## Methods

###  fromCSV

▸ **fromCSV**<**TRow**>(`filename`: string, `separator`: string): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*

*Implementation of [TestDataFactory](../interfaces/_src_test_data_testdata_.testdatafactory.md)*

*Defined in [src/test-data/TestDataLoaders.ts:60](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L60)*

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

*Defined in [src/test-data/TestDataLoaders.ts:56](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L56)*

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

*Defined in [src/test-data/TestDataLoaders.ts:64](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestDataLoaders.ts#L64)*

**Type parameters:**

▪ **TRow**

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹TRow›*