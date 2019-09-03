**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/conditions/ElementVisibilityCondition"](../modules/_src_page_conditions_elementvisibilitycondition_.md) › [ElementsLocatedCondition](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md)

# Class: ElementsLocatedCondition

## Hierarchy

  * [ElementCondition](_src_page_condition_.elementcondition.md)

  * **ElementsLocatedCondition**

## Index

### Constructors

* [constructor](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#constructor)

### Properties

* [desc](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#desc)
* [hasWaitFor](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#haswaitfor)
* [locator](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#locator)
* [pageFuncArgs](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#pagefuncargs)
* [settings](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#settings)

### Accessors

* [locatorPageFunc](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#locatorpagefunc)
* [timeout](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#protected-timeout)

### Methods

* [locatableToLocator](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#protected-locatabletolocator)
* [pageFunc](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#pagefunc)
* [toString](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#tostring)
* [waitFor](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#waitfor)
* [waitForEvent](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md#waitforevent)

## Constructors

###  constructor

\+ **new ElementsLocatedCondition**(`desc`: string, `locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), ...`args`: any[]): *[ElementsLocatedCondition](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md)*

*Overrides [ElementCondition](_src_page_condition_.elementcondition.md).[constructor](_src_page_condition_.elementcondition.md#constructor)*

*Defined in [src/page/conditions/ElementVisibilityCondition.ts:43](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementVisibilityCondition.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`desc` | string |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`...args` | any[] |

**Returns:** *[ElementsLocatedCondition](_src_page_conditions_elementvisibilitycondition_.elementslocatedcondition.md)*

## Properties

###  desc

• **desc**: *string*

*Overrides [LocatorCondition](_src_page_condition_.locatorcondition.md).[desc](_src_page_condition_.locatorcondition.md#desc)*

*Defined in [src/page/conditions/ElementVisibilityCondition.ts:44](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementVisibilityCondition.ts#L44)*

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

• **get locatorPageFunc**(): *string | function*

*Overrides [ElementCondition](_src_page_condition_.elementcondition.md).[locatorPageFunc](_src_page_condition_.elementcondition.md#locatorpagefunc)*

*Defined in [src/page/conditions/ElementVisibilityCondition.ts:55](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementVisibilityCondition.ts#L55)*

**Returns:** *string | function*

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

▸ **pageFunc**(`nodes`: HTMLElement[], `count`: number): *boolean*

*Defined in [src/page/conditions/ElementVisibilityCondition.ts:59](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementVisibilityCondition.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`nodes` | HTMLElement[] | - |
`count` | number | 1 |

**Returns:** *boolean*

___

###  toString

▸ **toString**(): *string*

*Overrides [ElementCondition](_src_page_condition_.elementcondition.md).[toString](_src_page_condition_.elementcondition.md#abstract-tostring)*

*Defined in [src/page/conditions/ElementVisibilityCondition.ts:50](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/conditions/ElementVisibilityCondition.ts#L50)*

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