**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/types"](../modules/_src_page_types_.md) › [Locator](_src_page_types_.locator.md)

# Interface: Locator

A Locator represents an object used to locate elements on the page. It is usually constructed using the helper methods of <[By]>.
An <[ElementHandle]> can also be used as a Locator which finds itself.

**`docopaque`** 

## Hierarchy

* **Locator**

## Implemented by

* [BaseLocator](../classes/_src_page_locator_.baselocator.md)
* [CSSLocator](../classes/_src_page_locators_css_.csslocator.md)
* [ElementHandle](../classes/_src_page_elementhandle_.elementhandle.md)
* [LinkTextLocator](../classes/_src_page_locators_linktext_.linktextlocator.md)
* [TagNameLocator](../classes/_src_page_locators_tagname_.tagnamelocator.md)
* [VisibleTextLocator](../classes/_src_page_locators_visibletextlocator_.visibletextlocator.md)
* [XPathLocator](../classes/_src_page_locators_xpath_.xpathlocator.md)

## Index

### Properties

* [pageFunc](_src_page_types_.locator.md#pagefunc)
* [pageFuncArgs](_src_page_types_.locator.md#pagefuncargs)
* [pageFuncMany](_src_page_types_.locator.md#pagefuncmany)

### Methods

* [find](_src_page_types_.locator.md#find)
* [findMany](_src_page_types_.locator.md#findmany)
* [toErrorString](_src_page_types_.locator.md#toerrorstring)

## Properties

###  pageFunc

• **pageFunc**: *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Defined in [src/page/types.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L13)*

___

###  pageFuncArgs

• **pageFuncArgs**: *any[]*

*Defined in [src/page/types.ts:17](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L17)*

___

###  pageFuncMany

• **pageFuncMany**: *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Defined in [src/page/types.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L15)*

## Methods

###  find

▸ **find**(`context`: ExecutionContext, `node?`: PElementHandle): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

*Defined in [src/page/types.ts:21](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | ExecutionContext |
`node?` | PElementHandle |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

___

###  findMany

▸ **findMany**(`context`: ExecutionContext, `node?`: PElementHandle): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

*Defined in [src/page/types.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | ExecutionContext |
`node?` | PElementHandle |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

___

###  toErrorString

▸ **toErrorString**(): *string*

*Defined in [src/page/types.ts:19](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/types.ts#L19)*

**Returns:** *string*