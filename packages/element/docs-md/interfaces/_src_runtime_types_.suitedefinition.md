**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/types"](../modules/_src_runtime_types_.md) › [SuiteDefinition](_src_runtime_types_.suitedefinition.md)

# Interface: SuiteDefinition

## Hierarchy

* **SuiteDefinition**

## Callable

▸ (`callback`: function): *void*

*Defined in [src/runtime/types.ts:53](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L53)*

**Parameters:**

▪ **callback**: *function*

▸ (`this`: null, `s`: [StepDefinition](../modules/_src_runtime_step_.md#stepdefinition)‹null›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | null |
`s` | [StepDefinition](../modules/_src_runtime_step_.md#stepdefinition)‹null› |

**Returns:** *void*

## Index

### Methods

* [withData](_src_runtime_types_.suitedefinition.md#withdata)

## Methods

###  withData

▸ **withData**<**T**>(`data`: [TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹T›, `callback`: function): *void*

*Defined in [src/runtime/types.ts:55](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L55)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **data**: *[TestDataSource](../classes/_src_test_data_testdata_.testdatasource.md)‹T›*

▪ **callback**: *function*

▸ (`this`: null, `step`: [StepDefinition](../modules/_src_runtime_step_.md#stepdefinition)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | null |
`step` | [StepDefinition](../modules/_src_runtime_step_.md#stepdefinition)‹T› |

**Returns:** *void*