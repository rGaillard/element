**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/types"](_src_runtime_types_.md)

# External module: "src/runtime/types"

## Index

### Interfaces

* [Browser](../interfaces/_src_runtime_types_.browser.md)
* [SuiteDefinition](../interfaces/_src_runtime_types_.suitedefinition.md)

### Type aliases

* [Driver](_src_runtime_types_.md#driver)
* [EvaluateFn](_src_runtime_types_.md#evaluatefn)
* [Locatable](_src_runtime_types_.md#locatable)
* [NullableLocatable](_src_runtime_types_.md#nullablelocatable)

### Variables

* [suite](_src_runtime_types_.md#const-suite)

## Type aliases

###  Driver

Ƭ **Driver**: *[Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/types.ts:305](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L305)*

Driver is an alias to Browser. Please use Browser when possible.

___

###  EvaluateFn

Ƭ **EvaluateFn**: *string | function*

*Defined in [src/runtime/types.ts:16](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L16)*

EvaluateFn represents a function which can be evaluated on the browser.
It can either be a [string] or a function.

___

###  Locatable

Ƭ **Locatable**: *[Locator](../interfaces/_src_page_types_.locator.md) | [ElementHandle](../interfaces/_src_page_types_.elementhandle.md) | string*

*Defined in [src/runtime/types.ts:21](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L21)*

Locatable represents anything able to be located, either a string selector or a <[Locator]>. <[Locator]>s are generally created using <[By]> methods.

___

###  NullableLocatable

Ƭ **NullableLocatable**: *[Locatable](_src_runtime_types_.md#locatable) | null*

*Defined in [src/runtime/types.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L28)*

NullableLocatable represents a <[Locatable]> which could also be null.

Note that most Element location API methods accept a NullableLocatable but will throw an <[Error]> if its actually <[null]>.

## Variables

### `Const` suite

• **suite**: *[SuiteDefinition](../interfaces/_src_runtime_types_.suitedefinition.md)*

*Defined in [src/runtime/types.ts:51](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L51)*

Defines a test suite of steps to run.

**Example:**
```
  import { TestData } from '@flood/element'
  interface Row {
    user: string
    systemID: number
  }
  const testData = TestData.withCSV<Row>(...)

  export default suite.withData((testData, step) => {
    step("Step 1", async (row: Row, browser: Browser) => {
      await browser.visit(`http://example.com/user-${row.systemID}.html`)
    })
  })
```

**`param`**