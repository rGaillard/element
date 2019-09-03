**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Browser"](../modules/_src_runtime_browser_.md) › [Browser](_src_runtime_browser_.browser.md)

# Class: Browser <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Browser**

## Implements

* [Browser](../interfaces/_src_runtime_types_.browser.md)

## Index

### Constructors

* [constructor](_src_runtime_browser_.browser.md#constructor)

### Properties

* [activeFrame](_src_runtime_browser_.browser.md#private-optional-activeframe)
* [afterFunc](_src_runtime_browser_.browser.md#afterfunc)
* [beforeFunc](_src_runtime_browser_.browser.md#beforefunc)
* [client](_src_runtime_browser_.browser.md#private-client)
* [customContext](_src_runtime_browser_.browser.md#customcontext)
* [mouse](_src_runtime_browser_.browser.md#mouse)
* [screenshots](_src_runtime_browser_.browser.md#screenshots)
* [settings](_src_runtime_browser_.browser.md#settings)
* [workRoot](_src_runtime_browser_.browser.md#workroot)

### Accessors

* [context](_src_runtime_browser_.browser.md#private-context)
* [frames](_src_runtime_browser_.browser.md#frames)
* [page](_src_runtime_browser_.browser.md#page)
* [target](_src_runtime_browser_.browser.md#target)
* [url](_src_runtime_browser_.browser.md#url)

### Methods

* [authenticate](_src_runtime_browser_.browser.md#authenticate)
* [blur](_src_runtime_browser_.browser.md#blur)
* [clear](_src_runtime_browser_.browser.md#clear)
* [clearBrowserCache](_src_runtime_browser_.browser.md#clearbrowsercache)
* [clearBrowserCookies](_src_runtime_browser_.browser.md#clearbrowsercookies)
* [click](_src_runtime_browser_.browser.md#click)
* [doubleClick](_src_runtime_browser_.browser.md#doubleclick)
* [emulateDevice](_src_runtime_browser_.browser.md#emulatedevice)
* [evaluate](_src_runtime_browser_.browser.md#evaluate)
* [extractText](_src_runtime_browser_.browser.md#extracttext)
* [fetchScreenshots](_src_runtime_browser_.browser.md#fetchscreenshots)
* [findElement](_src_runtime_browser_.browser.md#findelement)
* [findElements](_src_runtime_browser_.browser.md#findelements)
* [focus](_src_runtime_browser_.browser.md#focus)
* [get](_src_runtime_browser_.browser.md#get)
* [highlightElement](_src_runtime_browser_.browser.md#highlightelement)
* [interactionTiming](_src_runtime_browser_.browser.md#interactiontiming)
* [maybeFindElement](_src_runtime_browser_.browser.md#maybefindelement)
* [navigationTiming](_src_runtime_browser_.browser.md#navigationtiming)
* [paintTiming](_src_runtime_browser_.browser.md#painttiming)
* [performanceTiming](_src_runtime_browser_.browser.md#performancetiming)
* [press](_src_runtime_browser_.browser.md#press)
* [saveScreenshot](_src_runtime_browser_.browser.md#savescreenshot)
* [selectByIndex](_src_runtime_browser_.browser.md#selectbyindex)
* [selectByText](_src_runtime_browser_.browser.md#selectbytext)
* [selectByValue](_src_runtime_browser_.browser.md#selectbyvalue)
* [sendKeys](_src_runtime_browser_.browser.md#sendkeys)
* [set](_src_runtime_browser_.browser.md#set)
* [setCacheDisabled](_src_runtime_browser_.browser.md#setcachedisabled)
* [setExtraHTTPHeaders](_src_runtime_browser_.browser.md#setextrahttpheaders)
* [setUserAgent](_src_runtime_browser_.browser.md#setuseragent)
* [switchTo](_src_runtime_browser_.browser.md#switchto)
* [takeScreenshot](_src_runtime_browser_.browser.md#takescreenshot)
* [testData](_src_runtime_browser_.browser.md#testdata)
* [title](_src_runtime_browser_.browser.md#title)
* [type](_src_runtime_browser_.browser.md#type)
* [visit](_src_runtime_browser_.browser.md#visit)
* [wait](_src_runtime_browser_.browser.md#wait)
* [waitForNavigation](_src_runtime_browser_.browser.md#waitfornavigation)

## Constructors

###  constructor

\+ **new Browser**(`workRoot`: [WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md), `client`: [IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md), `settings`: [ConcreteTestSettings](../interfaces/_src_runtime_settings_.concretetestsettings.md), `beforeFunc`: function, `afterFunc`: function, `activeFrame?`: Frame | null): *[Browser](_src_runtime_browser_.browser.md)*

*Defined in [src/runtime/Browser.ts:88](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L88)*

**Parameters:**

▪ **workRoot**: *[WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md)*

▪ **client**: *[IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)*

▪ **settings**: *[ConcreteTestSettings](../interfaces/_src_runtime_settings_.concretetestsettings.md)*

▪`Default value`  **beforeFunc**: *function*=  async () => {}

▸ (`b`: [Browser](_src_runtime_browser_.browser.md)‹T›, `name`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Browser](_src_runtime_browser_.browser.md)‹T› |
`name` | string |

▪`Default value`  **afterFunc**: *function*=  async () => {}

▸ (`b`: [Browser](_src_runtime_browser_.browser.md)‹T›, `name`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Browser](_src_runtime_browser_.browser.md)‹T› |
`name` | string |

▪`Optional`  **activeFrame**: *Frame | null*

**Returns:** *[Browser](_src_runtime_browser_.browser.md)*

## Properties

### `Private` `Optional` activeFrame

• **activeFrame**? : *Frame | null*

*Defined in [src/runtime/Browser.ts:96](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L96)*

___

###  afterFunc

• **afterFunc**: *function*

*Defined in [src/runtime/Browser.ts:95](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L95)*

#### Type declaration:

▸ (`b`: [Browser](_src_runtime_browser_.browser.md)‹T›, `name`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Browser](_src_runtime_browser_.browser.md)‹T› |
`name` | string |

___

###  beforeFunc

• **beforeFunc**: *function*

*Defined in [src/runtime/Browser.ts:94](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L94)*

#### Type declaration:

▸ (`b`: [Browser](_src_runtime_browser_.browser.md)‹T›, `name`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Browser](_src_runtime_browser_.browser.md)‹T› |
`name` | string |

___

### `Private` client

• **client**: *[IPuppeteerClient](../interfaces/_src_driver_puppeteer_.ipuppeteerclient.md)*

*Defined in [src/runtime/Browser.ts:92](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L92)*

___

###  customContext

• **customContext**: *T*

*Defined in [src/runtime/Browser.ts:86](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L86)*

___

###  mouse

• **mouse**: *[Mouse](_src_page_mouse_.mouse.md)* =  new Mouse(this)

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md).[mouse](../interfaces/_src_runtime_types_.browser.md#mouse)*

*Defined in [src/runtime/Browser.ts:88](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L88)*

___

###  screenshots

• **screenshots**: *string[]*

*Defined in [src/runtime/Browser.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L85)*

___

###  settings

• **settings**: *[ConcreteTestSettings](../interfaces/_src_runtime_settings_.concretetestsettings.md)*

*Defined in [src/runtime/Browser.ts:93](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L93)*

___

###  workRoot

• **workRoot**: *[WorkRoot](../interfaces/_src_runtime_environment_types_.workroot.md)*

*Defined in [src/runtime/Browser.ts:91](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L91)*

## Accessors

### `Private` context

• **get context**(): *Promise‹ExecutionContext›*

*Defined in [src/runtime/Browser.ts:102](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L102)*

**Returns:** *Promise‹ExecutionContext›*

___

###  frames

• **get frames**(): *Frame[]*

*Defined in [src/runtime/Browser.ts:128](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L128)*

**Returns:** *Frame[]*

___

###  page

• **get page**(): *Page*

*Defined in [src/runtime/Browser.ts:124](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L124)*

**Returns:** *Page*

___

###  target

• **get target**(): *Frame*

*Defined in [src/runtime/Browser.ts:111](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L111)*

**Returns:** *Frame*

___

###  url

• **get url**(): *string*

*Defined in [src/runtime/Browser.ts:135](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L135)*

Returns the URL of the current frame/page

**Returns:** *string*

## Methods

###  authenticate

▸ **authenticate**(`username?`: undefined | string, `password?`: undefined | string): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:150](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`username?` | undefined \| string |
`password?` | undefined \| string |

**Returns:** *Promise‹void›*

___

###  blur

▸ **blur**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:394](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L394)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | string): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:352](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L352)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) \| string |

**Returns:** *Promise‹void›*

___

###  clearBrowserCache

▸ **clearBrowserCache**(): *Promise‹any›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:413](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L413)*

**Returns:** *Promise‹any›*

___

###  clearBrowserCookies

▸ **clearBrowserCookies**(): *Promise‹any›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:407](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L407)*

**Returns:** *Promise‹any›*

___

###  click

▸ **click**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `options?`: ClickOptions): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:257](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L257)*

Sends a click event to the element located at `selector`. If the element is
currently outside the viewport it will first scroll to that element.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  doubleClick

▸ **doubleClick**(`selectorOrLocator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `options?`: ClickOptions): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:268](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L268)*

Sends a double-click event to the element located by the supplied Locator or `selector`. If the element is
currently outside the viewport it will first scroll to that element.

**Parameters:**

Name | Type |
------ | ------ |
`selectorOrLocator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  emulateDevice

▸ **emulateDevice**(`deviceName`: string): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:419](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L419)*

**Parameters:**

Name | Type |
------ | ------ |
`deviceName` | string |

**Returns:** *Promise‹void›*

___

###  evaluate

▸ **evaluate**(`fn`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn), ...`args`: any[]): *Promise‹any›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:145](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) |
`...args` | any[] |

**Returns:** *Promise‹any›*

___

###  extractText

▸ **extractText**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹string›*

*Defined in [src/runtime/Browser.ts:502](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L502)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹string›*

___

###  fetchScreenshots

▸ **fetchScreenshots**(): *string[]*

*Defined in [src/runtime/Browser.ts:563](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L563)*

**Returns:** *string[]*

___

###  findElement

▸ **findElement**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md)›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:456](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md)›*

___

###  findElements

▸ **findElements**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md)[]›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:490](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L490)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md)[]›*

___

###  focus

▸ **focus**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:401](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L401)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`key`: string): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:499](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L499)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  highlightElement

▸ **highlightElement**(`element`: [ElementHandle](../interfaces/_src_page_types_.elementhandle.md)): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:448](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L448)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [ElementHandle](../interfaces/_src_page_types_.elementhandle.md) |

**Returns:** *Promise‹void›*

___

###  interactionTiming

▸ **interactionTiming**(): *Promise‹number›*

*Defined in [src/runtime/Browser.ts:543](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L543)*

**Returns:** *Promise‹number›*

___

###  maybeFindElement

▸ **maybeFindElement**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md) | null›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:472](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L472)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](../interfaces/_src_page_types_.elementhandle.md) | null›*

___

###  navigationTiming

▸ **navigationTiming**(): *Promise‹PerformanceTiming›*

*Defined in [src/runtime/Browser.ts:523](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L523)*

**Returns:** *Promise‹PerformanceTiming›*

___

###  paintTiming

▸ **paintTiming**(): *Promise‹PerformanceEntry[]›*

*Defined in [src/runtime/Browser.ts:531](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L531)*

Fetches the paint performance timing entries

**Returns:** *Promise‹PerformanceEntry[]›*

___

###  performanceTiming

▸ **performanceTiming**(): *Promise‹PerformanceTiming›*

*Defined in [src/runtime/Browser.ts:519](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L519)*

**Returns:** *Promise‹PerformanceTiming›*

___

###  press

▸ **press**(`keyCode`: string, `options?`: undefined | object): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:375](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L375)*

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | string |
`options?` | undefined \| object |

**Returns:** *Promise‹void›*

___

###  saveScreenshot

▸ **saveScreenshot**(`fn`: function): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:569](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L569)*

**Parameters:**

▪ **fn**: *function*

▸ (`path`: string): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

###  selectByIndex

▸ **selectByIndex**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `index`: string): *Promise‹string[]›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:301](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`index` | string |

**Returns:** *Promise‹string[]›*

___

###  selectByText

▸ **selectByText**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string): *Promise‹string[]›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:326](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L326)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |

**Returns:** *Promise‹string[]›*

___

###  selectByValue

▸ **selectByValue**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), ...`values`: string[]): *Promise‹string[]›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:278](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L278)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`...values` | string[] |

**Returns:** *Promise‹string[]›*

___

###  sendKeys

▸ **sendKeys**(...`keys`: string[]): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:381](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L381)*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string, `value`: string): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:497](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L497)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *Promise‹void›*

___

###  setCacheDisabled

▸ **setCacheDisabled**(`cacheDisabled`: boolean): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:558](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L558)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`cacheDisabled` | boolean | true |

**Returns:** *Promise‹void›*

___

###  setExtraHTTPHeaders

▸ **setExtraHTTPHeaders**(`headers`: object): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:431](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L431)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | object |

**Returns:** *Promise‹void›*

___

###  setUserAgent

▸ **setUserAgent**(`userAgent`: string): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:426](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L426)*

**Parameters:**

Name | Type |
------ | ------ |
`userAgent` | string |

**Returns:** *Promise‹void›*

___

###  switchTo

▸ **switchTo**(): *[TargetLocator](_src_page_targetlocator_.targetlocator.md)*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:513](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L513)*

Switch the focus of the browser to another frame or window

**Returns:** *[TargetLocator](_src_page_targetlocator_.targetlocator.md)*

___

###  takeScreenshot

▸ **takeScreenshot**(`options?`: ScreenshotOptions): *Promise‹void›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:439](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L439)*

Takes a screenshot of this element and saves it to the results folder with a random name.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScreenshotOptions |

**Returns:** *Promise‹void›*

___

###  testData

▸ **testData**(`name`: string): *string*

*Defined in [src/runtime/Browser.ts:107](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

###  title

▸ **title**(): *Promise‹string›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:140](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L140)*

**Returns:** *Promise‹string›*

___

###  type

▸ **type**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string, `options?`: undefined | object): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:362](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |
`options?` | undefined \| object |

**Returns:** *Promise‹void›*

___

###  visit

▸ **visit**(`url`: string, `options`: NavigationOptions): *Promise‹void›*

*Defined in [src/runtime/Browser.ts:189](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L189)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`options` | NavigationOptions |  {} |

**Returns:** *Promise‹void›*

___

###  wait

▸ **wait**(`timeoutOrCondition`: [Condition](_src_page_condition_.condition.md) | number): *Promise‹boolean›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:159](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`timeoutOrCondition` | [Condition](_src_page_condition_.condition.md) \| number |

**Returns:** *Promise‹boolean›*

___

###  waitForNavigation

▸ **waitForNavigation**(): *Promise‹any›*

*Implementation of [Browser](../interfaces/_src_runtime_types_.browser.md)*

*Defined in [src/runtime/Browser.ts:538](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Browser.ts#L538)*

**Returns:** *Promise‹any›*