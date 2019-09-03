**[@flood/element](../README.md)**

[Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Variables

* [ENV](_index_.md#const-env)
* [TestData](_index_.md#const-testdata)

## Variables

### `Const` ENV

• **ENV**: *[FloodProcessEnv](../interfaces/_src_runtime_environment_types_.floodprocessenv.md)* =  nullFloodProcessEnv

*Defined in [index.ts:88](https://github.com/flood-io/element/blob/d9c12d9/packages/element/index.ts#L88)*

A subset of `process.env` available to this test. It is of type <[FloodProcessEnv]>.

**`docpage`** DSL

___

### `Const` TestData

• **TestData**: *[NullTestDataLoaders](../classes/_src_test_data_testdataloaders_.nulltestdataloaders.md)* =  new NullTestDataLoaders()

*Defined in [index.ts:64](https://github.com/flood-io/element/blob/d9c12d9/packages/element/index.ts#L64)*

`TestData` is a pre-configured instance of <[TestDataFactory]> that can be used to prepare test data for your script.

**Example**
```typescript
import { step, Browser, TestData, TestSettings } from '@flood/element'

interface Row {
  username: string
  userID: number
}
TestData.fromCSV<Row>('users.csv').shuffle()
```

**`docpage`** TestData