**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Step"](../modules/_src_runtime_step_.md) › [StepOptions](_src_runtime_step_.stepoptions.md)

# Interface: StepOptions

Specifies the available options which can be supplied to a step to override global settings.

**Example:**

```typescript
step("Step 1", { waitTimeout: 300 }, async (browser: Browser) => {
	await browser.click(...)
})
```

## Hierarchy

* **StepOptions**

## Index

### Properties

* [waitTimeout](_src_runtime_step_.stepoptions.md#optional-waittimeout)
* [waitUntil](_src_runtime_step_.stepoptions.md#optional-waituntil)

## Properties

### `Optional` waitTimeout

• **waitTimeout**? : *undefined | number*

*Defined in [src/runtime/Step.ts:55](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L55)*

Timeout in seconds for all wait and navigation operations within this <[step]>.

**`default`** `30` seconds

___

### `Optional` waitUntil

• **waitUntil**? : *[ElementPresence](../modules/_src_runtime_settings_.md#elementpresence)*

*Defined in [src/runtime/Step.ts:62](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Step.ts#L62)*

Override global auto wait setting. Uses `waitTimeout` from step if defined.

**`default`** `inherit`