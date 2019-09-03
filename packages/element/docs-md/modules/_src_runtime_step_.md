**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Step"](_src_runtime_step_.md)

# External module: "src/runtime/Step"

## Index

### Interfaces

* [Step](../interfaces/_src_runtime_step_.step.md)
* [StepOptions](../interfaces/_src_runtime_step_.stepoptions.md)

### Type aliases

* [StepDefinition](_src_runtime_step_.md#stepdefinition)
* [StepFunction](_src_runtime_step_.md#stepfunction)

### Functions

* [normalizeStepOptions](_src_runtime_step_.md#normalizestepoptions)
* [step](_src_runtime_step_.md#step)

## Type aliases

###  StepDefinition

Ƭ **StepDefinition**: *function*

*Defined in [src/runtime/Step.ts:37](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L37)*

#### Type declaration:

▸ (`name`: string, `fn`: [StepFunction](_src_runtime_step_.md#stepfunction)‹T›): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`fn` | [StepFunction](_src_runtime_step_.md#stepfunction)‹T› |

___

###  StepFunction

Ƭ **StepFunction**: *function*

*Defined in [src/runtime/Step.ts:79](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L79)*

The `StepFunction` type represents a function to be called as a Test step.

- `browser` <[Browser]> the browser
- `data` <`T`> (Optional) a row of test data of type <`T`>. Only available when the test is set up using <[suite]>.

**Example:**

```typescript
const step1: StepFunction = async (browser: Browser) => {
	await browser.click(...)
}
```

#### Type declaration:

▸ (`driver`: [Browser](../interfaces/_src_runtime_types_.browser.md), `data?`: [T]()): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | [Browser](../interfaces/_src_runtime_types_.browser.md) |
`data?` | [T]() |

## Functions

###  normalizeStepOptions

▸ **normalizeStepOptions**(`stepOpts`: [StepOptions](../interfaces/_src_runtime_step_.stepoptions.md)): *[StepOptions](../interfaces/_src_runtime_step_.stepoptions.md)*

*Defined in [src/runtime/Step.ts:93](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L93)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`stepOpts` | [StepOptions](../interfaces/_src_runtime_step_.stepoptions.md) |

**Returns:** *[StepOptions](../interfaces/_src_runtime_step_.stepoptions.md)*

___

###  step

▸ **step**<**T**>(`name`: string, `fn`: [StepFunction](_src_runtime_step_.md#stepfunction)‹T›): *void*

*Defined in [src/runtime/Step.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L24)*

Declares each step in your test. This must go within your main test expression.

**Example:**

```typescript
export default () => {
  step("Step 1", async (browser: Browser) => {
    await browser.visit("https://example.com")
  })

  step("Step 2", async (browser: Browser) => {})

  step("Step 3", async (browser: Browser) => {})
}
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Step Name |
`fn` | [StepFunction](_src_runtime_step_.md#stepfunction)‹T› | Actual implementation of step  |

**Returns:** *void*

▸ **step**<**T**>(`name`: string, `options`: [StepOptions](../interfaces/_src_runtime_step_.stepoptions.md), `fn`: [StepFunction](_src_runtime_step_.md#stepfunction)‹T›): *void*

*Defined in [src/runtime/Step.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L35)*

`step` can also be called with an overridden subset of Test settings (`options`) valid for just this step.

```typescript
  // Step 1 takes longer than the default `waitTimeout` of 30s.
  step("Step 1", { waitTimeout: 90 }, async browser => {
    ...
  }
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`options` | [StepOptions](../interfaces/_src_runtime_step_.stepoptions.md) |
`fn` | [StepFunction](_src_runtime_step_.md#stepfunction)‹T› |

**Returns:** *void*