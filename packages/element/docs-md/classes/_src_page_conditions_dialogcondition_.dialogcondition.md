**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/conditions/DialogCondition"](../modules/_src_page_conditions_dialogcondition_.md) › [DialogCondition](_src_page_conditions_dialogcondition_.dialogcondition.md)

# Class: DialogCondition

TODO: Generalize waitFor such that we can avoid needing waitForEvent custom
handler.

## Hierarchy

* [Condition](_src_page_condition_.condition.md)

  * **DialogCondition**

## Index

### Constructors

* [constructor](_src_page_conditions_dialogcondition_.dialogcondition.md#constructor)

### Properties

* [desc](_src_page_conditions_dialogcondition_.dialogcondition.md#desc)
* [hasWaitFor](_src_page_conditions_dialogcondition_.dialogcondition.md#haswaitfor)
* [settings](_src_page_conditions_dialogcondition_.dialogcondition.md#settings)

### Accessors

* [timeout](_src_page_conditions_dialogcondition_.dialogcondition.md#protected-timeout)

### Methods

* [toString](_src_page_conditions_dialogcondition_.dialogcondition.md#tostring)
* [waitFor](_src_page_conditions_dialogcondition_.dialogcondition.md#waitfor)
* [waitForEvent](_src_page_conditions_dialogcondition_.dialogcondition.md#waitforevent)

## Constructors

###  constructor

\+ **new DialogCondition**(`desc`: string): *[DialogCondition](_src_page_conditions_dialogcondition_.dialogcondition.md)*

*Inherited from [Condition](_src_page_condition_.condition.md).[constructor](_src_page_condition_.condition.md#constructor)*

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`desc` | string | "*BASE CONDITION" |

**Returns:** *[DialogCondition](_src_page_conditions_dialogcondition_.dialogcondition.md)*

## Properties

###  desc

• **desc**: *string*

*Inherited from [Condition](_src_page_condition_.condition.md).[desc](_src_page_condition_.condition.md#desc)*

*Defined in [src/page/Condition.ts:26](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L26)*

___

###  hasWaitFor

• **hasWaitFor**: *boolean* = false

*Overrides [Condition](_src_page_condition_.condition.md).[hasWaitFor](_src_page_condition_.condition.md#haswaitfor)*

*Defined in [src/page/conditions/DialogCondition.ts:14](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/DialogCondition.ts#L14)*

___

###  settings

• **settings**: *[ConditionSettings](../interfaces/_src_page_condition_.conditionsettings.md)* =  DEFAULT_SETTINGS

*Inherited from [Condition](_src_page_condition_.condition.md).[settings](_src_page_condition_.condition.md#settings)*

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

## Accessors

### `Protected` timeout

• **get timeout**(): *number*

*Inherited from [Condition](_src_page_condition_.condition.md).[timeout](_src_page_condition_.condition.md#protected-timeout)*

*Defined in [src/page/Condition.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L35)*

**Returns:** *number*

## Methods

###  toString

▸ **toString**(): *string*

*Overrides [Condition](_src_page_condition_.condition.md).[toString](_src_page_condition_.condition.md#abstract-tostring)*

*Defined in [src/page/conditions/DialogCondition.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/DialogCondition.ts#L10)*

**Returns:** *string*

___

###  waitFor

▸ **waitFor**(`frame`: Frame): *Promise‹boolean›*

*Overrides [Condition](_src_page_condition_.condition.md).[waitFor](_src_page_condition_.condition.md#abstract-waitfor)*

*Defined in [src/page/conditions/DialogCondition.ts:16](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/DialogCondition.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame |

**Returns:** *Promise‹boolean›*

___

###  waitForEvent

▸ **waitForEvent**(`page`: Page): *Promise‹Dialog›*

*Overrides [Condition](_src_page_condition_.condition.md).[waitForEvent](_src_page_condition_.condition.md#waitforevent)*

*Defined in [src/page/conditions/DialogCondition.ts:20](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/DialogCondition.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |

**Returns:** *Promise‹Dialog›*