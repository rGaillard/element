**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/driver/Puppeteer"](_src_driver_puppeteer_.md)

# External module: "src/driver/Puppeteer"

## Index

### Classes

* [NullPuppeteerClient](../classes/_src_driver_puppeteer_.nullpuppeteerclient.md)
* [PuppeteerClient](../classes/_src_driver_puppeteer_.puppeteerclient.md)

### Interfaces

* [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)

### Type aliases

* [ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)

### Functions

* [launch](_src_driver_puppeteer_.md#launch)
* [setupChrome](_src_driver_puppeteer_.md#setupchrome)
* [setupSystemChrome](_src_driver_puppeteer_.md#setupsystemchrome)

### Object literals

* [defaultLaunchOptions](_src_driver_puppeteer_.md#const-defaultlaunchoptions)

## Type aliases

###  ConcreteLaunchOptions

Ƭ **ConcreteLaunchOptions**: *LaunchOptions & object*

*Defined in [src/driver/Puppeteer.ts:4](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L4)*

## Functions

###  launch

▸ **launch**(`passedOptions`: Partial‹[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)›): *Promise‹[PuppeteerClient](../classes/_src_driver_puppeteer_.puppeteerclient.md)›*

*Defined in [src/driver/Puppeteer.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L85)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`passedOptions` | Partial‹[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)› |  {} |

**Returns:** *Promise‹[PuppeteerClient](../classes/_src_driver_puppeteer_.puppeteerclient.md)›*

___

###  setupChrome

▸ **setupChrome**(`options`: [ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)): *[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)*

*Defined in [src/driver/Puppeteer.ts:21](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions) |

**Returns:** *[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)*

___

###  setupSystemChrome

▸ **setupSystemChrome**(`options`: [ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)): *[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)*

*Defined in [src/driver/Puppeteer.ts:36](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions) |

**Returns:** *[ConcreteLaunchOptions](_src_driver_puppeteer_.md#concretelaunchoptions)*

## Object literals

### `Const` defaultLaunchOptions

### ▪ **defaultLaunchOptions**: *object*

*Defined in [src/driver/Puppeteer.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L10)*

###  args

• **args**: *never[]* =  []

*Defined in [src/driver/Puppeteer.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L11)*

###  chromeVersion

• **chromeVersion**: *string* = "puppeteer"

*Defined in [src/driver/Puppeteer.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L15)*

###  devtools

• **devtools**: *false* = false

*Defined in [src/driver/Puppeteer.ts:14](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L14)*

###  handleSIGINT

• **handleSIGINT**: *false* = false

*Defined in [src/driver/Puppeteer.ts:12](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L12)*

###  headless

• **headless**: *true* = true

*Defined in [src/driver/Puppeteer.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L13)*

###  ignoreHTTPSErrors

• **ignoreHTTPSErrors**: *false* = false

*Defined in [src/driver/Puppeteer.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L18)*

###  sandbox

• **sandbox**: *true* = true

*Defined in [src/driver/Puppeteer.ts:16](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L16)*

###  timeout

• **timeout**: *number* = 60000

*Defined in [src/driver/Puppeteer.ts:17](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/driver/Puppeteer.ts#L17)*