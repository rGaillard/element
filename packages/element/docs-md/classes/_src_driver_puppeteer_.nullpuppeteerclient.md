**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/driver/Puppeteer"](../modules/_src_driver_puppeteer_.md) › [NullPuppeteerClient](_src_driver_puppeteer_.nullpuppeteerclient.md)

# Class: NullPuppeteerClient

## Hierarchy

* **NullPuppeteerClient**

## Implements

* [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)

## Index

### Constructors

* [constructor](_src_driver_puppeteer_.nullpuppeteerclient.md#constructor)

### Properties

* [browser](_src_driver_puppeteer_.nullpuppeteerclient.md#browser)
* [page](_src_driver_puppeteer_.nullpuppeteerclient.md#page)

### Methods

* [close](_src_driver_puppeteer_.nullpuppeteerclient.md#close)
* [reopenPage](_src_driver_puppeteer_.nullpuppeteerclient.md#reopenpage)

## Constructors

###  constructor

\+ **new NullPuppeteerClient**(): *[NullPuppeteerClient](_src_driver_puppeteer_.nullpuppeteerclient.md)*

*Defined in [src/driver/Puppeteer.ts:122](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L122)*

**Returns:** *[NullPuppeteerClient](_src_driver_puppeteer_.nullpuppeteerclient.md)*

## Properties

###  browser

• **browser**: *Browser*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md).[browser](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md#browser)*

*Defined in [src/driver/Puppeteer.ts:121](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L121)*

___

###  page

• **page**: *Page*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md).[page](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md#page)*

*Defined in [src/driver/Puppeteer.ts:122](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L122)*

## Methods

###  close

▸ **close**(): *Promise‹void›*

*Implementation of [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)*

*Defined in [src/driver/Puppeteer.ts:124](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L124)*

**Returns:** *Promise‹void›*

___

###  reopenPage

▸ **reopenPage**(): *Promise‹void›*

*Defined in [src/driver/Puppeteer.ts:127](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L127)*

**Returns:** *Promise‹void›*