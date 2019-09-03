**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/TestData"](../modules/_src_test_data_testdata_.md) › [TestDataSource](_src_test_data_testdata_.testdatasource.md)

# Class: TestDataSource <**T**>

TestDataSource is the instance returned by <[TestDataFactory]>'s methods.

Call TestDataSource's methods to configure your data source:

```typescript
import { step, Browser, TestData, TestSettings } from '@flood/element'
export const settings: TestSettings = {
  loopCount: -1
}

interface Row {
  username: string
  userID: number
}
TestData.fromCSV<Row>('users.csv')
  .circular(false) // Switch off circular data iteration.
                   // By default, when the end of the data is reached, it wraps to the beginning.
  .shuffle()       // Shuffle the data

export default () => {
   step('Step 1', async (browser: Browser, row: Row) => {
     // for each loop, a different line from user.csv will be available as `row`
   })
}
```

## Type parameters

▪ **T**

## Hierarchy

* **TestDataSource**

## Index

### Constructors

* [constructor](_src_test_data_testdata_.testdatasource.md#constructor)

### Properties

* [feeder](_src_test_data_testdata_.testdatasource.md#feeder)
* [instanceID](_src_test_data_testdata_.testdatasource.md#instanceid)
* [loader](_src_test_data_testdata_.testdatasource.md#private-loader)

### Accessors

* [isComplete](_src_test_data_testdata_.testdatasource.md#iscomplete)
* [isEmpty](_src_test_data_testdata_.testdatasource.md#isempty)
* [isStart](_src_test_data_testdata_.testdatasource.md#isstart)
* [size](_src_test_data_testdata_.testdatasource.md#size)

### Methods

* [circular](_src_test_data_testdata_.testdatasource.md#circular)
* [feed](_src_test_data_testdata_.testdatasource.md#feed)
* [filter](_src_test_data_testdata_.testdatasource.md#filter)
* [load](_src_test_data_testdata_.testdatasource.md#load)
* [peek](_src_test_data_testdata_.testdatasource.md#peek)
* [setInstanceID](_src_test_data_testdata_.testdatasource.md#setinstanceid)
* [shuffle](_src_test_data_testdata_.testdatasource.md#shuffle)
* [toString](_src_test_data_testdata_.testdatasource.md#tostring)

## Constructors

###  constructor

\+ **new TestDataSource**(`loader`: [Loader](_src_test_data_loader_.loader.md)‹T›): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)*

*Defined in [src/test-data/TestData.ts:75](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`loader` | [Loader](_src_test_data_loader_.loader.md)‹T› |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)*

## Properties

###  feeder

• **feeder**: *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

*Defined in [src/test-data/TestData.ts:66](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L66)*

**`internal`** 

___

###  instanceID

• **instanceID**: *string*

*Defined in [src/test-data/TestData.ts:70](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L70)*

**`internal`** 

___

### `Private` loader

• **loader**: *[Loader](_src_test_data_loader_.loader.md)‹T›*

*Defined in [src/test-data/TestData.ts:75](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L75)*

**`internal`** 

## Accessors

###  isComplete

• **get isComplete**(): *boolean*

*Defined in [src/test-data/TestData.ts:160](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L160)*

**`internal`** 

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [src/test-data/TestData.ts:167](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L167)*

**`internal`** 

**Returns:** *boolean*

___

###  isStart

• **get isStart**(): *boolean*

*Defined in [src/test-data/TestData.ts:174](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L174)*

**`internal`** 

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [src/test-data/TestData.ts:153](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L153)*

**`internal`** 

**Returns:** *number*

## Methods

###  circular

▸ **circular**(`circular`: boolean): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

*Defined in [src/test-data/TestData.ts:102](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L102)*

Instructs the data feeder to repeat the data set when it reaches the end. TestData is circular by default; use this to turn circular data off.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`circular` | boolean | true | Default: true. Pass `false` to disable.  |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

___

###  feed

▸ **feed**(): *[Option](../modules/_src_utils_option_.md#option)‹T›*

*Defined in [src/test-data/TestData.ts:137](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L137)*

**`internal`** 

**Returns:** *[Option](../modules/_src_utils_option_.md#option)‹T›*

___

###  filter

▸ **filter**(`func`: [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T›): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

*Defined in [src/test-data/TestData.ts:129](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L129)*

Adds a filter to apply against each line in the data set.

Filters can be chained, and will be run in order only if the previous ffilter passed.

Example:
```typescript
type Row = { browser: string, email: string }
TestData.fromCSV("users.csv").filter((line, index, browserID) => line.browser === browserID)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T› | filter function to compare each line  |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

___

###  load

▸ **load**(): *Promise‹void›*

*Defined in [src/test-data/TestData.ts:92](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L92)*

**`internal`** 

**Returns:** *Promise‹void›*

___

###  peek

▸ **peek**(): *[Option](../modules/_src_utils_option_.md#option)‹T›*

*Defined in [src/test-data/TestData.ts:145](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L145)*

**`internal`** 

**Returns:** *[Option](../modules/_src_utils_option_.md#option)‹T›*

___

###  setInstanceID

▸ **setInstanceID**(`id`: string): *void*

*Defined in [src/test-data/TestData.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L85)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *void*

___

###  shuffle

▸ **shuffle**(`shuffle`: boolean): *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

*Defined in [src/test-data/TestData.ts:111](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L111)*

Shuffles the data set using the Fisher-Yates method. Use this to randomise the order of your data. This will always be applied after filtering.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`shuffle` | boolean | true | Default: true. Pass `false` to disable.  |

**Returns:** *[TestDataSource](_src_test_data_testdata_.testdatasource.md)‹T›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/test-data/TestData.ts:181](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/TestData.ts#L181)*

**`internal`** 

**Returns:** *string*