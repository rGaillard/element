**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/conditions/ElementTextCondition"](../modules/_src_page_conditions_elementtextcondition_.md) › [ElementTextCondition](_src_page_conditions_elementtextcondition_.elementtextcondition.md)

# Class: ElementTextCondition

## Hierarchy

  * [ElementCondition](_src_page_condition_.elementcondition.md)

  * **ElementTextCondition**

## Index

### Constructors

* [constructor](_src_page_conditions_elementtextcondition_.elementtextcondition.md#constructor)

### Properties

* [desc](_src_page_conditions_elementtextcondition_.elementtextcondition.md#desc)
* [hasWaitFor](_src_page_conditions_elementtextcondition_.elementtextcondition.md#haswaitfor)
* [locator](_src_page_conditions_elementtextcondition_.elementtextcondition.md#locator)
* [pageFuncArgs](_src_page_conditions_elementtextcondition_.elementtextcondition.md#pagefuncargs)
* [settings](_src_page_conditions_elementtextcondition_.elementtextcondition.md#settings)

### Accessors

* [locatorPageFunc](_src_page_conditions_elementtextcondition_.elementtextcondition.md#locatorpagefunc)
* [timeout](_src_page_conditions_elementtextcondition_.elementtextcondition.md#protected-timeout)

### Methods

* [locatableToLocator](_src_page_conditions_elementtextcondition_.elementtextcondition.md#protected-locatabletolocator)
* [pageFunc](_src_page_conditions_elementtextcondition_.elementtextcondition.md#pagefunc)
* [toString](_src_page_conditions_elementtextcondition_.elementtextcondition.md#tostring)
* [waitFor](_src_page_conditions_elementtextcondition_.elementtextcondition.md#waitfor)
* [waitForEvent](_src_page_conditions_elementtextcondition_.elementtextcondition.md#waitforevent)

## Constructors

###  constructor

\+ **new ElementTextCondition**(`desc`: string, `locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), ...`args`: any[]): *[ElementTextCondition](_src_page_conditions_elementtextcondition_.elementtextcondition.md)*

*Overrides [ElementCondition](_src_page_condition_.elementcondition.md).[constructor](_src_page_condition_.elementcondition.md#constructor)*

*Defined in [src/page/conditions/ElementTextCondition.ts:4](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementTextCondition.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`desc` | string |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`...args` | any[] |

**Returns:** *[ElementTextCondition](_src_page_conditions_elementtextcondition_.elementtextcondition.md)*

## Properties

###  desc

• **desc**: *string*

*Inherited from [LocatorCondition](_src_page_condition_.locatorcondition.md).[desc](_src_page_condition_.locatorcondition.md#desc)*

*Overrides [Condition](_src_page_condition_.condition.md).[desc](_src_page_condition_.condition.md#desc)*

*Defined in [src/page/Condition.ts:45](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L45)*

___

###  hasWaitFor

• **hasWaitFor**: *boolean* = true

*Inherited from [Condition](_src_page_condition_.condition.md).[hasWaitFor](_src_page_condition_.condition.md#haswaitfor)*

*Defined in [src/page/Condition.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L23)*

___

###  locator

• **locator**: *[Locator](../interfaces/_src_page_types_.locator.md)*

*Inherited from [LocatorCondition](_src_page_condition_.locatorcondition.md).[locator](_src_page_condition_.locatorcondition.md#locator)*

*Defined in [src/page/Condition.ts:42](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L42)*

___

###  pageFuncArgs

• **pageFuncArgs**: *any[]*

*Inherited from [LocatorCondition](_src_page_condition_.locatorcondition.md).[pageFuncArgs](_src_page_condition_.locatorcondition.md#pagefuncargs)*

*Defined in [src/page/Condition.ts:41](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L41)*

___

###  settings

• **settings**: *[ConditionSettings](../interfaces/_src_page_condition_.conditionsettings.md)* =  DEFAULT_SETTINGS

*Inherited from [Condition](_src_page_condition_.condition.md).[settings](_src_page_condition_.condition.md#settings)*

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

## Accessors

###  locatorPageFunc

• **get locatorPageFunc**(): *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Inherited from [ElementCondition](_src_page_condition_.elementcondition.md).[locatorPageFunc](_src_page_condition_.elementcondition.md#locatorpagefunc)*

*Defined in [src/page/Condition.ts:79](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L79)*

**Returns:** *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

___

### `Protected` timeout

• **get timeout**(): *number*

*Inherited from [Condition](_src_page_condition_.condition.md).[timeout](_src_page_condition_.condition.md#protected-timeout)*

*Defined in [src/page/Condition.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L35)*

**Returns:** *number*

## Methods

### `Protected` locatableToLocator

▸ **locatableToLocator**(`el`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Inherited from [LocatorCondition](_src_page_condition_.locatorcondition.md).[locatableToLocator](_src_page_condition_.locatorcondition.md#protected-locatabletolocator)*

*Defined in [src/page/Condition.ts:58](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L58)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`el` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

###  pageFunc

▸ **pageFunc**(`node`: HTMLElement, `expectedText`: string, `partial`: boolean): *boolean*

*Defined in [src/page/conditions/ElementTextCondition.ts:14](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementTextCondition.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | HTMLElement | - |
`expectedText` | string | - |
`partial` | boolean | false |

**Returns:** *boolean*

___

###  toString

▸ **toString**(): *string*

*Overrides [ElementCondition](_src_page_condition_.elementcondition.md).[toString](_src_page_condition_.elementcondition.md#abstract-tostring)*

*Defined in [src/page/conditions/ElementTextCondition.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementTextCondition.ts#L10)*

**Returns:** *string*

___

###  waitFor

▸ **waitFor**(`frame`: Frame, `page?`: Page): *Promise‹boolean›*

*Inherited from [ElementCondition](_src_page_condition_.elementcondition.md).[waitFor](_src_page_condition_.elementcondition.md#waitfor)*

*Overrides [Condition](_src_page_condition_.condition.md).[waitFor](_src_page_condition_.condition.md#abstract-waitfor)*

*Defined in [src/page/Condition.ts:83](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame |
`page?` | Page |

**Returns:** *Promise‹boolean›*

___

###  waitForEvent

▸ **waitForEvent**(`page`: Page): *Promise‹any›*

*Inherited from [Condition](_src_page_condition_.condition.md).[waitForEvent](_src_page_condition_.condition.md#waitforevent)*

*Defined in [src/page/Condition.ts:31](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |

**Returns:** *Promise‹any›*