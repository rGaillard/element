**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/Locator"](../modules/_src_page_locator_.md) › [BaseLocator](_src_page_locator_.baselocator.md)

# Class: BaseLocator

## Hierarchy

* **BaseLocator**

  * [LinkTextLocator](_src_page_locators_linktext_.linktextlocator.md)

  * [VisibleTextLocator](_src_page_locators_visibletextlocator_.visibletextlocator.md)

  * [CSSLocator](_src_page_locators_css_.csslocator.md)

  * [TagNameLocator](_src_page_locators_tagname_.tagnamelocator.md)

  * [XPathLocator](_src_page_locators_xpath_.xpathlocator.md)

## Implements

* [Locator](../interfaces/_src_page_types_.locator.md)

## Index

### Constructors

* [constructor](_src_page_locator_.baselocator.md#constructor)

### Properties

* [errorString](_src_page_locator_.baselocator.md#protected-errorstring)
* [pageFunc](_src_page_locator_.baselocator.md#pagefunc)
* [pageFuncArgs](_src_page_locator_.baselocator.md#pagefuncargs)
* [pageFuncMany](_src_page_locator_.baselocator.md#pagefuncmany)

### Methods

* [find](_src_page_locator_.baselocator.md#find)
* [findMany](_src_page_locator_.baselocator.md#findmany)
* [toErrorString](_src_page_locator_.baselocator.md#toerrorstring)
* [wait](_src_page_locator_.baselocator.md#wait)

## Constructors

###  constructor

\+ **new BaseLocator**(`errorString`: string): *[BaseLocator](_src_page_locator_.baselocator.md)*

*Defined in [src/page/Locator.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`errorString` | string |

**Returns:** *[BaseLocator](_src_page_locator_.baselocator.md)*

## Properties

### `Protected` errorString

• **errorString**: *string*

*Defined in [src/page/Locator.ts:26](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L26)*

___

###  pageFunc

• **pageFunc**: *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md).[pageFunc](../interfaces/_src_page_types_.locator.md#pagefunc)*

*Defined in [src/page/Locator.ts:22](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L22)*

___

###  pageFuncArgs

• **pageFuncArgs**: *any[]*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md).[pageFuncArgs](../interfaces/_src_page_types_.locator.md#pagefuncargs)*

*Defined in [src/page/Locator.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L24)*

___

###  pageFuncMany

• **pageFuncMany**: *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md).[pageFuncMany](../interfaces/_src_page_types_.locator.md#pagefuncmany)*

*Defined in [src/page/Locator.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L23)*

## Methods

###  find

▸ **find**(`context`: ExecutionContext, `node?`: PElementHandle): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/Locator.ts:32](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | ExecutionContext |
`node?` | PElementHandle |

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

___

###  findMany

▸ **findMany**(`context`: ExecutionContext, `node?`: PElementHandle): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)[]›*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/Locator.ts:41](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | ExecutionContext |
`node?` | PElementHandle |

**Returns:** *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md)[]›*

___

###  toErrorString

▸ **toErrorString**(): *string*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/Locator.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L28)*

**Returns:** *string*

___

###  wait

▸ **wait**(`frame`: Frame, `waitFunc`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn), `waitFuncArgs`: any[], `options`: any): *Promise‹boolean›*

*Defined in [src/page/Locator.ts:64](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`frame` | Frame | - |
`waitFunc` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) | - |
`waitFuncArgs` | any[] | - |
`options` | any |  {} |

**Returns:** *Promise‹boolean›*