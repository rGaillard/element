**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/Condition"](../modules/_src_page_condition_.md) › [Condition](_src_page_condition_.condition.md)

# Class: Condition

A Condition represents a predicate which can be used to wait for an <[ElementHandle]>. They are generally created by using <[Until]>'s helper methods.

**`docopaque`** 

## Hierarchy

* **Condition**

  * [LocatorCondition](_src_page_condition_.locatorcondition.md)

  * [TitleCondition](_src_page_conditions_titlecondition_.titlecondition.md)

  * [URLCondition](_src_page_conditions_urlcondition_.urlcondition.md)

  * [DialogCondition](_src_page_conditions_dialogcondition_.dialogcondition.md)

  * [FrameCondition](_src_page_conditions_framecondition_.framecondition.md)

## Index

### Constructors

* [constructor](_src_page_condition_.condition.md#constructor)

### Properties

* [desc](_src_page_condition_.condition.md#desc)
* [hasWaitFor](_src_page_condition_.condition.md#haswaitfor)
* [settings](_src_page_condition_.condition.md#settings)

### Accessors

* [timeout](_src_page_condition_.condition.md#protected-timeout)

### Methods

* [toString](_src_page_condition_.condition.md#abstract-tostring)
* [waitFor](_src_page_condition_.condition.md#abstract-waitfor)
* [waitForEvent](_src_page_condition_.condition.md#waitforevent)

## Constructors

###  constructor

\+ **new Condition**(`desc`: string): *[Condition](_src_page_condition_.condition.md)*

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`desc` | string | "*BASE CONDITION" |

**Returns:** *[Condition](_src_page_condition_.condition.md)*

## Properties

###  desc

• **desc**: *string*

*Defined in [src/page/Condition.ts:26](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L26)*

___

###  hasWaitFor

• **hasWaitFor**: *boolean* = true

*Defined in [src/page/Condition.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L23)*

___

###  settings

• **settings**: *[ConditionSettings](../interfaces/_src_page_condition_.conditionsettings.md)* =  DEFAULT_SETTINGS

*Defined in [src/page/Condition.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L24)*

## Accessors

### `Protected` timeout

• **get timeout**(): *number*

*Defined in [src/page/Condition.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L35)*

**Returns:** *number*

## Methods

### `Abstract` toString

▸ **toString**(): *string*

*Defined in [src/page/Condition.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L28)*

**Returns:** *string*

___

### `Abstract` waitFor

▸ **waitFor**(`frame`: Frame, `page?`: Page): *Promise‹any›*

*Defined in [src/page/Condition.ts:29](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`frame` | Frame |
`page?` | Page |

**Returns:** *Promise‹any›*

___

###  waitForEvent

▸ **waitForEvent**(`page`: Page): *Promise‹any›*

*Defined in [src/page/Condition.ts:31](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |

**Returns:** *Promise‹any›*