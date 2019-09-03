**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/driver/Puppeteer"](../modules/_src_driver_puppeteer_.md) › [PuppeteerClient](_src_driver_puppeteer_.puppeteerclient.md)

# Class: PuppeteerClient

## Hierarchy

* **PuppeteerClient**

## Implements

* [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)

## Index

### Constructors

* [constructor](_src_driver_puppeteer_.puppeteerclient.md#constructor)

### Properties

* [_isClosed](_src_driver_puppeteer_.puppeteerclient.md#private-_isclosed)
* [browser](_src_driver_puppeteer_.puppeteerclient.md#browser)
* [page](_src_driver_puppeteer_.puppeteerclient.md#page)

### Methods

* [close](_src_driver_puppeteer_.puppeteerclient.md#close)
* [reopenPage](_src_driver_puppeteer_.puppeteerclient.md#reopenpage)

## Constructors

###  constructor

\+ **new PuppeteerClient**(`browser`: Browser, `page`: Page): *[PuppeteerClient](_src_driver_puppeteer_.puppeteerclient.md)*

*Defined in [src/driver/Puppeteer.ts:61](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | Browser |
`page` | Page |

**Returns:** *[PuppeteerClient](_src_driver_puppeteer_.puppeteerclient.md)*

## Properties

### `Private` _isClosed

• **_isClosed**: *boolean* = false

*Defined in [src/driver/Puppeteer.ts:64](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L64)*

___

###  browser

• **browser**: *Browser*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md).[browser](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md#browser)*

*Defined in [src/driver/Puppeteer.ts:62](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L62)*

___

###  page

• **page**: *Page*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md).[page](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md#page)*

*Defined in [src/driver/Puppeteer.ts:62](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L62)*

## Methods

###  close

▸ **close**(): *Promise‹void›*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)*

*Defined in [src/driver/Puppeteer.ts:65](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L65)*

**Returns:** *Promise‹void›*

___

###  reopenPage

▸ **reopenPage**(`incognito`: boolean): *Promise‹void›*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)*

*Defined in [src/driver/Puppeteer.ts:71](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`incognito` | boolean | false |

**Returns:** *Promise‹void›*