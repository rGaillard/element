**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/conditions/URLCondition"](../modules/_src_page_conditions_urlcondition_.md) › [URLCondition](_src_page_conditions_urlcondition_.urlcondition.md)

# Class: URLCondition

## Hierarchy

* [Condition](_src_page_condition_.condition.md)

  * **URLCondition**

## Index

### Constructors

* [constructor](_src_page_conditions_urlcondition_.urlcondition.md#constructor)

### Properties

* [desc](_src_page_conditions_urlcondition_.urlcondition.md#desc)
* [hasWaitFor](_src_page_conditions_urlcondition_.urlcondition.md#haswaitfor)
* [partial](_src_page_conditions_urlcondition_.urlcondition.md#partial)
* [settings](_src_page_conditions_urlcondition_.urlcondition.md#settings)
* [url](_src_page_conditions_urlcondition_.urlcondition.md#url)

### Accessors

* [timeout](_src_page_conditions_urlcondition_.urlcondition.md#protected-timeout)

### Methods

* [toString](_src_page_conditions_urlcondition_.urlcondition.md#tostring)
* [waitFor](_src_page_conditions_urlcondition_.urlcondition.md#waitfor)
* [waitForEvent](_src_page_conditions_urlcondition_.urlcondition.md#waitforevent)

## Constructors

###  constructor

\+ **new URLCondition**(`desc`: string, `url`: string, `partial`: boolean): *[URLCondition](_src_page_conditions_urlcondition_.urlcondition.md)*

*Overrides [Condition](_src_page_condition_.condition.md).[constructor](_src_page_condition_.condition.md#constructor)*

*Defined in [src/page/conditions/URLCondition.ts:4](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/URLCondition.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`desc` | string | - |
`url` | string | - |
`partial` | boolean | false |

**Returns:** *[URLCondition](_src_page_conditions_urlcondition_.urlcondition.md)*

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

###  partial

• **partial**: *boolean*

*Defined in [src/page/conditions/URLCondition.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/URLCondition.ts#L5)*

___

###  settings

• **settings**: *[ConditionSettings](../interfaces/_src_page_condition_.conditionsettings.md)* =  DEFAULT_SETTINGS

*Inherited from [Condition](_src_page_condition_.condition.md).[settings](_src_page_condition_.condition.md#settings)*

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

___

###  url

• **url**: *string*

*Defined in [src/page/conditions/URLCondition.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/URLCondition.ts#L5)*

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

*Defined in [src/page/conditions/URLCondition.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/URLCondition.ts#L9)*

**Returns:** *string*

___

###  waitFor

▸ **waitFor**(`frame`: Frame): *Promise‹boolean›*

*Overrides [Condition](_src_page_condition_.condition.md).[waitFor](_src_page_condition_.condition.md#abstract-waitfor)*

*Defined in [src/page/conditions/URLCondition.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/URLCondition.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame |

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