**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/Condition"](../modules/_src_page_condition_.md) › [LocatorCondition](_src_page_condition_.locatorcondition.md)

# Class: LocatorCondition

## Hierarchy

* [Condition](_src_page_condition_.condition.md)

  * **LocatorCondition**

  * [ElementCondition](_src_page_condition_.elementcondition.md)

## Index

### Constructors

* [constructor](_src_page_condition_.locatorcondition.md#constructor)

### Properties

* [desc](_src_page_condition_.locatorcondition.md#desc)
* [hasWaitFor](_src_page_condition_.locatorcondition.md#haswaitfor)
* [locator](_src_page_condition_.locatorcondition.md#locator)
* [pageFunc](_src_page_condition_.locatorcondition.md#pagefunc)
* [pageFuncArgs](_src_page_condition_.locatorcondition.md#pagefuncargs)
* [settings](_src_page_condition_.locatorcondition.md#settings)

### Accessors

* [timeout](_src_page_condition_.locatorcondition.md#protected-timeout)

### Methods

* [locatableToLocator](_src_page_condition_.locatorcondition.md#protected-locatabletolocator)
* [toString](_src_page_condition_.locatorcondition.md#abstract-tostring)
* [waitFor](_src_page_condition_.locatorcondition.md#abstract-waitfor)
* [waitForEvent](_src_page_condition_.locatorcondition.md#waitforevent)

## Constructors

###  constructor

\+ **new LocatorCondition**(`desc`: string, `locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `pageFunc`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) | null, ...`pageFuncArgs`: any[]): *[LocatorCondition](_src_page_condition_.locatorcondition.md)*

*Overrides [Condition](_src_page_condition_.condition.md).[constructor](_src_page_condition_.condition.md#constructor)*

*Defined in [src/page/Condition.ts:42](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`desc` | string | "*BASE CONDITION" |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | - |
`pageFunc` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) \| null | - |
`...pageFuncArgs` | any[] | - |

**Returns:** *[LocatorCondition](_src_page_condition_.locatorcondition.md)*

## Properties

###  desc

• **desc**: *string*

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

*Defined in [src/page/Condition.ts:42](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L42)*

___

###  pageFunc

• **pageFunc**: *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) | null*

*Defined in [src/page/Condition.ts:47](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L47)*

___

###  pageFuncArgs

• **pageFuncArgs**: *any[]*

*Defined in [src/page/Condition.ts:41](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L41)*

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

### `Protected` locatableToLocator

▸ **locatableToLocator**(`el`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/Condition.ts:58](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L58)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`el` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Abstract` toString

▸ **toString**(): *string*

*Inherited from [Condition](_src_page_condition_.condition.md).[toString](_src_page_condition_.condition.md#abstract-tostring)*

*Defined in [src/page/Condition.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L28)*

**Returns:** *string*

___

### `Abstract` waitFor

▸ **waitFor**(`frame`: Frame, `page?`: Page): *Promise‹any›*

*Inherited from [Condition](_src_page_condition_.condition.md).[waitFor](_src_page_condition_.condition.md#abstract-waitfor)*

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

*Inherited from [Condition](_src_page_condition_.condition.md).[waitForEvent](_src_page_condition_.condition.md#waitforevent)*

*Defined in [src/page/Condition.ts:31](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Condition.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | Page |

**Returns:** *Promise‹any›*