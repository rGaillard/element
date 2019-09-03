**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/locators/LinkText"](../modules/_src_page_locators_linktext_.md) › [LinkTextLocator](_src_page_locators_linktext_.linktextlocator.md)

# Class: LinkTextLocator

## Hierarchy

* [BaseLocator](_src_page_locator_.baselocator.md)

  * **LinkTextLocator**

## Implements

* [Locator](../interfaces/_src_page_types_.locator.md)

## Index

### Constructors

* [constructor](_src_page_locators_linktext_.linktextlocator.md#constructor)

### Properties

* [errorString](_src_page_locators_linktext_.linktextlocator.md#protected-errorstring)
* [linkText](_src_page_locators_linktext_.linktextlocator.md#linktext)
* [partial](_src_page_locators_linktext_.linktextlocator.md#partial)

### Accessors

* [pageFunc](_src_page_locators_linktext_.linktextlocator.md#pagefunc)
* [pageFuncArgs](_src_page_locators_linktext_.linktextlocator.md#pagefuncargs)
* [pageFuncMany](_src_page_locators_linktext_.linktextlocator.md#pagefuncmany)

### Methods

* [find](_src_page_locators_linktext_.linktextlocator.md#find)
* [findMany](_src_page_locators_linktext_.linktextlocator.md#findmany)
* [toErrorString](_src_page_locators_linktext_.linktextlocator.md#toerrorstring)
* [toString](_src_page_locators_linktext_.linktextlocator.md#tostring)
* [wait](_src_page_locators_linktext_.linktextlocator.md#wait)

## Constructors

###  constructor

\+ **new LinkTextLocator**(`linkText`: string, `partial`: boolean, `desc`: string): *[LinkTextLocator](_src_page_locators_linktext_.linktextlocator.md)*

*Overrides [BaseLocator](_src_page_locator_.baselocator.md).[constructor](_src_page_locator_.baselocator.md#constructor)*

*Defined in [src/page/locators/LinkText.ts:4](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`linkText` | string | - |
`partial` | boolean | false |
`desc` | string | - |

**Returns:** *[LinkTextLocator](_src_page_locators_linktext_.linktextlocator.md)*

## Properties

### `Protected` errorString

• **errorString**: *string*

*Inherited from [BaseLocator](_src_page_locator_.baselocator.md).[errorString](_src_page_locator_.baselocator.md#protected-errorstring)*

*Defined in [src/page/Locator.ts:26](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L26)*

___

###  linkText

• **linkText**: *string*

*Defined in [src/page/locators/LinkText.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L5)*

___

###  partial

• **partial**: *boolean*

*Defined in [src/page/locators/LinkText.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L5)*

## Accessors

###  pageFunc

• **get pageFunc**(): *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Overrides [BaseLocator](_src_page_locator_.baselocator.md).[pageFunc](_src_page_locator_.baselocator.md#pagefunc)*

*Defined in [src/page/locators/LinkText.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L13)*

**Returns:** *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

___

###  pageFuncArgs

• **get pageFuncArgs**(): *any[]*

*Overrides [BaseLocator](_src_page_locator_.baselocator.md).[pageFuncArgs](_src_page_locator_.baselocator.md#pagefuncargs)*

*Defined in [src/page/locators/LinkText.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L9)*

**Returns:** *any[]*

___

###  pageFuncMany

• **get pageFuncMany**(): *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

*Overrides [BaseLocator](_src_page_locator_.baselocator.md).[pageFuncMany](_src_page_locator_.baselocator.md#pagefuncmany)*

*Defined in [src/page/locators/LinkText.ts:25](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L25)*

**Returns:** *[EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn)*

## Methods

###  find

▸ **find**(`context`: ExecutionContext, `node?`: PElementHandle): *Promise‹[ElementHandle](_src_page_elementhandle_.elementhandle.md) | null›*

*Implementation of [Locator](../interfaces/_src_page_types_.locator.md)*

*Inherited from [BaseLocator](_src_page_locator_.baselocator.md).[find](_src_page_locator_.baselocator.md#find)*

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

*Inherited from [BaseLocator](_src_page_locator_.baselocator.md).[findMany](_src_page_locator_.baselocator.md#findmany)*

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

*Inherited from [BaseLocator](_src_page_locator_.baselocator.md).[toErrorString](_src_page_locator_.baselocator.md#toerrorstring)*

*Defined in [src/page/Locator.ts:28](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L28)*

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/page/locators/LinkText.ts:36](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/locators/LinkText.ts#L36)*

**Returns:** *string*

___

###  wait

▸ **wait**(`frame`: Frame, `waitFunc`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn), `waitFuncArgs`: any[], `options`: any): *Promise‹boolean›*

*Inherited from [BaseLocator](_src_page_locator_.baselocator.md).[wait](_src_page_locator_.baselocator.md#wait)*

*Defined in [src/page/Locator.ts:64](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/Locator.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`frame` | Frame | - |
`waitFunc` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) | - |
`waitFuncArgs` | any[] | - |
`options` | any |  {} |

**Returns:** *Promise‹boolean›*