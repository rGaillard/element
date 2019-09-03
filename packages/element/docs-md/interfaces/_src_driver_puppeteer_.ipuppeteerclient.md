**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/driver/Puppeteer"](../modules/_src_driver_puppeteer_.md) › [IPuppeteerClient](_src_driver_puppeteer_.ipuppeteerclient.md)

# Interface: IPuppeteerClient

## Hierarchy

* **IPuppeteerClient**

## Implemented by

* [NullPuppeteerClient](../classes/_src_driver_puppeteer_.nullpuppeteerclient.md)
* [PuppeteerClient](../classes/_src_driver_puppeteer_.puppeteerclient.md)

## Index

### Properties

* [browser](_src_driver_puppeteer_.ipuppeteerclient.md#browser)
* [page](_src_driver_puppeteer_.ipuppeteerclient.md#page)

### Methods

* [close](_src_driver_puppeteer_.ipuppeteerclient.md#close)
* [reopenPage](_src_driver_puppeteer_.ipuppeteerclient.md#reopenpage)

## Properties

###  browser

• **browser**: *Browser*

*Defined in [src/driver/Puppeteer.ts:55](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L55)*

___

###  page

• **page**: *Page*

*Defined in [src/driver/Puppeteer.ts:56](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L56)*

## Methods

###  close

▸ **close**(): *Promise‹void›*

*Defined in [src/driver/Puppeteer.ts:57](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L57)*

**Returns:** *Promise‹void›*

___

###  reopenPage

▸ **reopenPage**(`incognito`: boolean): *Promise‹void›*

*Defined in [src/driver/Puppeteer.ts:58](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`incognito` | boolean |

**Returns:** *Promise‹void›*