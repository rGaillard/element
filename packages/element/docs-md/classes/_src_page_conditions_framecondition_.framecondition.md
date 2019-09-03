**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/conditions/FrameCondition"](../modules/_src_page_conditions_framecondition_.md) › [FrameCondition](_src_page_conditions_framecondition_.framecondition.md)

# Class: FrameCondition

## Hierarchy

* [Condition](_src_page_condition_.condition.md)

  * **FrameCondition**

## Index

### Constructors

* [constructor](_src_page_conditions_framecondition_.framecondition.md#constructor)

### Properties

* [desc](_src_page_conditions_framecondition_.framecondition.md#desc)
* [hasWaitFor](_src_page_conditions_framecondition_.framecondition.md#haswaitfor)
* [id](_src_page_conditions_framecondition_.framecondition.md#id)
* [maximumTimer](_src_page_conditions_framecondition_.framecondition.md#private-maximumtimer)
* [settings](_src_page_conditions_framecondition_.framecondition.md#settings)

### Accessors

* [timeout](_src_page_conditions_framecondition_.framecondition.md#protected-timeout)

### Methods

* [createTimeoutPromise](_src_page_conditions_framecondition_.framecondition.md#private-createtimeoutpromise)
* [toString](_src_page_conditions_framecondition_.framecondition.md#tostring)
* [waitFor](_src_page_conditions_framecondition_.framecondition.md#waitfor)
* [waitForEvent](_src_page_conditions_framecondition_.framecondition.md#waitforevent)

## Constructors

###  constructor

\+ **new FrameCondition**(`desc`: string, `id`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[FrameCondition](_src_page_conditions_framecondition_.framecondition.md)*

*Overrides [Condition](_src_page_condition_.condition.md).[constructor](_src_page_condition_.condition.md#constructor)*

*Defined in [src/page/conditions/FrameCondition.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`desc` | string |
`id` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *[FrameCondition](_src_page_conditions_framecondition_.framecondition.md)*

## Properties

###  desc

• **desc**: *string*

*Inherited from [Condition](_src_page_condition_.condition.md).[desc](_src_page_condition_.condition.md#desc)*

*Defined in [src/page/Condition.ts:26](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L26)*

___

###  hasWaitFor

• **hasWaitFor**: *boolean* = true

*Inherited from [Condition](_src_page_condition_.condition.md).[hasWaitFor](_src_page_condition_.condition.md#haswaitfor)*

*Defined in [src/page/Condition.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L23)*

___

###  id

• **id**: *[NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)*

*Defined in [src/page/conditions/FrameCondition.ts:6](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L6)*

___

### `Private` maximumTimer

• **maximumTimer**: *Timer*

*Defined in [src/page/conditions/FrameCondition.ts:93](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L93)*

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

### `Private` createTimeoutPromise

▸ **createTimeoutPromise**(): *Promise‹Error›*

*Defined in [src/page/conditions/FrameCondition.ts:95](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L95)*

**Returns:** *Promise‹Error›*

___

###  toString

▸ **toString**(): *string*

*Overrides [Condition](_src_page_condition_.condition.md).[toString](_src_page_condition_.condition.md#abstract-tostring)*

*Defined in [src/page/conditions/FrameCondition.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L10)*

**Returns:** *string*

___

###  waitFor

▸ **waitFor**(`frame`: Frame, `page`: Page): *Promise‹Frame | Error›*

*Overrides [Condition](_src_page_condition_.condition.md).[waitFor](_src_page_condition_.condition.md#abstract-waitfor)*

*Defined in [src/page/conditions/FrameCondition.ts:56](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/FrameCondition.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame |
`page` | Page |

**Returns:** *Promise‹Frame | Error›*

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