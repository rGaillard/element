**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/Until"](../modules/_src_page_until_.md) › [Until](_src_page_until_.until.md)

# Class: Until

Until contains a wealth of useful <Condition>s.

<[Condition]>s represent predicates used to wait for something to become true.

These predicates include waiting for elements to become active, visible, invisible or disabled on the page.

You typically use these to control the flow of you test.

## Hierarchy

* **Until**

## Index

### Methods

* [ableToSwitchToFrame](_src_page_until_.until.md#static-abletoswitchtoframe)
* [alertIsPresent](_src_page_until_.until.md#static-alertispresent)
* [elementIsDisabled](_src_page_until_.until.md#static-elementisdisabled)
* [elementIsEnabled](_src_page_until_.until.md#static-elementisenabled)
* [elementIsNotSelected](_src_page_until_.until.md#static-elementisnotselected)
* [elementIsNotVisible](_src_page_until_.until.md#static-elementisnotvisible)
* [elementIsSelected](_src_page_until_.until.md#static-elementisselected)
* [elementIsVisible](_src_page_until_.until.md#static-elementisvisible)
* [elementLocated](_src_page_until_.until.md#static-elementlocated)
* [elementTextContains](_src_page_until_.until.md#static-elementtextcontains)
* [elementTextIs](_src_page_until_.until.md#static-elementtextis)
* [elementTextMatches](_src_page_until_.until.md#static-elementtextmatches)
* [elementsLocated](_src_page_until_.until.md#static-elementslocated)
* [titleContains](_src_page_until_.until.md#static-titlecontains)
* [titleIs](_src_page_until_.until.md#static-titleis)
* [titleMatches](_src_page_until_.until.md#static-titlematches)
* [urlContains](_src_page_until_.until.md#static-urlcontains)
* [urlIs](_src_page_until_.until.md#static-urlis)
* [urlMatches](_src_page_until_.until.md#static-urlmatches)

## Methods

### `Static` ableToSwitchToFrame

▸ **ableToSwitchToFrame**(`frame`: [Locatable](../modules/_src_runtime_types_.md#locatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:37](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L37)*

Creates a condition that will wait until the input driver is able to switch to the designated frame.

The target frame may be specified as:
- string name of the frame to wait for matching the frame's `name` or `id` attribute.
- (Coming soon) numeric index into window.frames for the currently selected frame.
- (Coming soon) locator which may be used to first locate a FRAME or IFRAME on the current page before attempting to switch to it.

Upon successful resolution of this condition, the driver will be left focused on the new frame.

**Parameters:**

Name | Type |
------ | ------ |
`frame` | [Locatable](../modules/_src_runtime_types_.md#locatable) |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` alertIsPresent

▸ **alertIsPresent**(): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:45](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L45)*

Creates a condition that waits for an alert to be opened. Upon success,
the returned promise will be fulfilled with the handle for the opened alert.

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsDisabled

▸ **elementIsDisabled**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:53](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L53)*

Creates a condition that will wait for the given element to be disabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsEnabled

▸ **elementIsEnabled**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:61](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L61)*

Creates a condition that will wait for the given element to be enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsNotSelected

▸ **elementIsNotSelected**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:77](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L77)*

Creates a condition that will wait for the given element to be in the DOM, yet not visible to the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsNotVisible

▸ **elementIsNotVisible**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:110](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L110)*

Creates a condition that will wait for the given element to become visible.

Example:
```typescript
step("Step 1", async browser => {
	 await browser.click(By.css('.hide-panel'))
  await browser.wait(Until.elementIsNotVisible(By.id("btn")))
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsSelected

▸ **elementIsSelected**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:69](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L69)*

Creates a condition that will wait for the given element to be deselected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementIsVisible

▸ **elementIsVisible**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:93](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L93)*

Creates a condition that will wait for the given element to be selected.

Example:
```typescript
step("Step 1", async browser => {
  await browser.wait(Until.elementIsVisible(By.partialLinkText("Start")))
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | A <[Locatable]> to use to find the element.  |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementLocated

▸ **elementLocated**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:117](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L117)*

Creates a condition which will wait until the element is located on the page.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementTextContains

▸ **elementTextContains**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:131](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L131)*

Creates a condition which will wait until the element's text content contains the target text.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementTextIs

▸ **elementTextIs**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:124](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L124)*

Creates a condition which will wait until the element's text exactly matches the target text, excluding leading and trailing whitespace.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementTextMatches

▸ **elementTextMatches**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `regex`: RegExp): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:138](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L138)*

Creates a condition which will wait until the element's text matches the target Regular Expression.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`regex` | RegExp |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` elementsLocated

▸ **elementsLocated**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `desiredCount`: number): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:145](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L145)*

Creates a condition that will wait until at least the desired number of elements are found.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | - |
`desiredCount` | number | 1 |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` titleContains

▸ **titleContains**(`title`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:163](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L163)*

Creates a condition which waits until the page title contains the expected text.

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` titleIs

▸ **titleIs**(`title`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:170](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L170)*

Creates a condition which waits until the page title exactly matches the expected text.

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` titleMatches

▸ **titleMatches**(`title`: RegExp): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:177](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L177)*

Creates a condition which waits until the page title matches the title `RegExp`.

**Parameters:**

Name | Type |
------ | ------ |
`title` | RegExp |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` urlContains

▸ **urlContains**(`url`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:184](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L184)*

Creates a condition which waits until the page URL contains the expected path.

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` urlIs

▸ **urlIs**(`url`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:191](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L191)*

Creates a condition which waits until the page URL exactly matches the expected URL.

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

___

### `Static` urlMatches

▸ **urlMatches**(`url`: RegExp): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Until.ts:198](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Until.ts#L198)*

Creates a condition which waits until the page URL matches the supplied `RegExp`.

**Parameters:**

Name | Type |
------ | ------ |
`url` | RegExp |

**Returns:** *[Condition](_src_page_condition_.condition.md)*