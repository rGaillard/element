**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/types"](../modules/_src_runtime_types_.md) › [Browser](_src_runtime_types_.browser.md)

# Interface: Browser

Browser is the main entry point in each <[step]>, it's your direct connection to the browser running the test.

```typescript
import { step } from "@flood/element"
export default () => {
  step("Start", async browser => {
    await browser.visit("https://challenge.flood.io")
  })
}
```

## Hierarchy

* **Browser**

## Implemented by

* [Browser](../classes/_src_runtime_browser_.browser.md)

## Index

### Properties

* [frames](_src_runtime_types_.browser.md#frames)
* [mouse](_src_runtime_types_.browser.md#mouse)
* [page](_src_runtime_types_.browser.md#page)

### Methods

* [authenticate](_src_runtime_types_.browser.md#authenticate)
* [blur](_src_runtime_types_.browser.md#blur)
* [clear](_src_runtime_types_.browser.md#clear)
* [clearBrowserCache](_src_runtime_types_.browser.md#clearbrowsercache)
* [clearBrowserCookies](_src_runtime_types_.browser.md#clearbrowsercookies)
* [click](_src_runtime_types_.browser.md#click)
* [doubleClick](_src_runtime_types_.browser.md#doubleclick)
* [emulateDevice](_src_runtime_types_.browser.md#emulatedevice)
* [evaluate](_src_runtime_types_.browser.md#evaluate)
* [findElement](_src_runtime_types_.browser.md#findelement)
* [findElements](_src_runtime_types_.browser.md#findelements)
* [focus](_src_runtime_types_.browser.md#focus)
* [highlightElement](_src_runtime_types_.browser.md#highlightelement)
* [maybeFindElement](_src_runtime_types_.browser.md#maybefindelement)
* [press](_src_runtime_types_.browser.md#press)
* [selectByIndex](_src_runtime_types_.browser.md#selectbyindex)
* [selectByText](_src_runtime_types_.browser.md#selectbytext)
* [selectByValue](_src_runtime_types_.browser.md#selectbyvalue)
* [sendKeys](_src_runtime_types_.browser.md#sendkeys)
* [setExtraHTTPHeaders](_src_runtime_types_.browser.md#setextrahttpheaders)
* [setUserAgent](_src_runtime_types_.browser.md#setuseragent)
* [switchTo](_src_runtime_types_.browser.md#switchto)
* [takeScreenshot](_src_runtime_types_.browser.md#takescreenshot)
* [title](_src_runtime_types_.browser.md#title)
* [type](_src_runtime_types_.browser.md#type)
* [visit](_src_runtime_types_.browser.md#visit)
* [wait](_src_runtime_types_.browser.md#wait)
* [waitForNavigation](_src_runtime_types_.browser.md#waitfornavigation)

## Properties

###  frames

• **frames**: *Frame[]*

*Defined in [src/runtime/types.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L85)*

The list of puppeteer Frames

___

###  mouse

• **mouse**: *[Mouse](../classes/_src_page_mouse_.mouse.md)*

*Defined in [src/runtime/types.ts:268](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L268)*

The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
Every page has its own <[Mouse]>, accessible with `browser.mouse`.

___

###  page

• **page**: *Page*

*Defined in [src/runtime/types.ts:80](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L80)*

The current puppeteer Page

## Methods

###  authenticate

▸ **authenticate**(`username?`: undefined | string, `password?`: undefined | string): *Promise‹void›*

*Defined in [src/runtime/types.ts:92](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L92)*

Sets the HTTP Authentication details to use if the page is presented with an authentication prompt.

Call without any args to disable authentication.

**Parameters:**

Name | Type |
------ | ------ |
`username?` | undefined \| string |
`password?` | undefined \| string |

**Returns:** *Promise‹void›*

___

###  blur

▸ **blur**(`locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹void›*

*Defined in [src/runtime/types.ts:219](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L219)*

Removes focus from the specified DOM element.

**`memberof`** Driver

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹void›*

*Defined in [src/runtime/types.ts:197](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L197)*

Clears the selected value of an input or select control.

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹void›*

___

###  clearBrowserCache

▸ **clearBrowserCache**(): *Promise‹any›*

*Defined in [src/runtime/types.ts:102](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L102)*

Clear browser cache.

**Returns:** *Promise‹any›*

___

###  clearBrowserCookies

▸ **clearBrowserCookies**(): *Promise‹any›*

*Defined in [src/runtime/types.ts:97](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L97)*

Clear browser cookies.

**Returns:** *Promise‹any›*

___

###  click

▸ **click**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `options?`: ClickOptions): *Promise‹void›*

*Defined in [src/runtime/types.ts:171](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L171)*

Sends a click event to the element located at `selector`. If the element is
currently outside the viewport it will first scroll to that element.

**Example:**

```typescript
step("Start", async browser => {
  await browser.click(By.partialLinkText('Start'))
})
```

In this example we're constructing a <[Locatable]> using the `By.partialLinkText()` Locator, which will match the first `<a>` tag which contains the text "Start".

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  doubleClick

▸ **doubleClick**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `options?`: ClickOptions): *Promise‹void›*

*Defined in [src/runtime/types.ts:177](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L177)*

Sends a double-click event to the element located by the supplied Locator or `selector`. If the element is
currently outside the viewport it will first scroll to that element.

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`options?` | ClickOptions |

**Returns:** *Promise‹void›*

___

###  emulateDevice

▸ **emulateDevice**(`deviceName`: [Device](../enums/_src_page_enums_.device.md)): *Promise‹void›*

*Defined in [src/runtime/types.ts:107](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L107)*

Configure Browser to emulate a given device

**Parameters:**

Name | Type |
------ | ------ |
`deviceName` | [Device](../enums/_src_page_enums_.device.md) |

**Returns:** *Promise‹void›*

___

###  evaluate

▸ **evaluate**(`fn`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn), ...`args`: any[]): *Promise‹any›*

*Defined in [src/runtime/types.ts:154](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) |
`...args` | any[] |

**Returns:** *Promise‹any›*

___

###  findElement

▸ **findElement**(`locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)›*

*Defined in [src/runtime/types.ts:289](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L289)*

Uses the provided locator to find the first element it matches, returning an ElementHandle.
If no element is found throws an error.

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)›*

___

###  findElements

▸ **findElements**(`locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

*Defined in [src/runtime/types.ts:294](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L294)*

Uses the provided locator to find all elements matching the locator condition, returning an array of ElementHandles

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md)[]›*

___

###  focus

▸ **focus**(`locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹void›*

*Defined in [src/runtime/types.ts:228](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L228)*

Makes the element located by the first argument the receiver of future input.

**`memberof`** Driver

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) | The <[Locator]> to use to find an element to send focus to. |

**Returns:** *Promise‹void›*

___

###  highlightElement

▸ **highlightElement**(`element`: [ElementHandle](_src_page_types_.elementhandle.md)): *Promise‹void›*

*Defined in [src/runtime/types.ts:278](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L278)*

Highlight an element. Useful in concert with takeScreenshot to tweak your locators.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [ElementHandle](_src_page_types_.elementhandle.md) |

**Returns:** *Promise‹void›*

___

###  maybeFindElement

▸ **maybeFindElement**(`locator`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable)): *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

*Defined in [src/runtime/types.ts:283](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L283)*

Uses the provided locator to find the first element it matches, returning an ElementHandle.

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |

**Returns:** *Promise‹[ElementHandle](_src_page_types_.elementhandle.md) | null›*

___

###  press

▸ **press**(`keyCode`: string, `options?`: undefined | object): *Promise‹void›*

*Defined in [src/runtime/types.ts:233](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L233)*

Presses a key on the keyboard specified by key code. For example, <[Key.ALT]>

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | string |
`options?` | undefined \| object |

**Returns:** *Promise‹void›*

___

###  selectByIndex

▸ **selectByIndex**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `index`: string): *Promise‹string[]›*

*Defined in [src/runtime/types.ts:187](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L187)*

Selects an option within a `<select>` tag by its index in the list.

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`index` | string |

**Returns:** *Promise‹string[]›*

___

###  selectByText

▸ **selectByText**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string): *Promise‹string[]›*

*Defined in [src/runtime/types.ts:192](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L192)*

Selects an option within a `<select>` tag by matching its visible text.

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |

**Returns:** *Promise‹string[]›*

___

###  selectByValue

▸ **selectByValue**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), ...`values`: string[]): *Promise‹string[]›*

*Defined in [src/runtime/types.ts:182](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L182)*

Selects an option within a `<select>` tag using the value of the `<option>` element.

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`...values` | string[] |

**Returns:** *Promise‹string[]›*

___

###  sendKeys

▸ **sendKeys**(...`keys`: string[]): *Promise‹void›*

*Defined in [src/runtime/types.ts:262](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L262)*

`sendKeys` simulates typing a list of strings on the keyboard.

If a string is a member of <[Key]> it is pressed individually. Otherwise the string is typed.
This allows sendKeys to simulate a user typing control keys such as `Key.ENTER`.

**Example:**
```typescript
await browser.click("#input_address")
await browser.sendKeys("Hello, World!", Key.ENTER)
```

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹void›*

___

###  setExtraHTTPHeaders

▸ **setExtraHTTPHeaders**(`headers`: object): *Promise‹void›*

*Defined in [src/runtime/types.ts:114](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | object |

**Returns:** *Promise‹void›*

___

###  setUserAgent

▸ **setUserAgent**(`userAgent`: string): *Promise‹void›*

*Defined in [src/runtime/types.ts:112](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L112)*

Set Browser to send a custom User Agent (UA) string

**Parameters:**

Name | Type |
------ | ------ |
`userAgent` | string |

**Returns:** *Promise‹void›*

___

###  switchTo

▸ **switchTo**(): *[TargetLocator](../classes/_src_page_targetlocator_.targetlocator.md)*

*Defined in [src/runtime/types.ts:299](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L299)*

Switch the focus of the browser to another frame, tab, or window.

**Returns:** *[TargetLocator](../classes/_src_page_targetlocator_.targetlocator.md)*

___

###  takeScreenshot

▸ **takeScreenshot**(`options?`: ScreenshotOptions): *Promise‹void›*

*Defined in [src/runtime/types.ts:273](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L273)*

Takes a screenshot of the whole page and saves it to the `flood/results` folder with a random sequential name. You can download the archive of your test results at the end of the test to retrieve these screenshots.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScreenshotOptions |

**Returns:** *Promise‹void›*

___

###  title

▸ **title**(): *Promise‹string›*

*Defined in [src/runtime/types.ts:75](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L75)*

**Returns:** *Promise‹string›*

___

###  type

▸ **type**(`locatable`: [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable), `text`: string, `options?`: undefined | object): *Promise‹void›*

*Defined in [src/runtime/types.ts:210](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L210)*

Types a string into an `<input>` control, key press by key press. Use this to fill inputs as though it was typed by the user.

**Example:**
```typescript
step("Step 1", async browser => {
  await browser.type(By.css("#email"), "user@example.com")
})
```

**Parameters:**

Name | Type |
------ | ------ |
`locatable` | [NullableLocatable](../modules/_src_runtime_types_.md#nullablelocatable) |
`text` | string |
`options?` | undefined \| object |

**Returns:** *Promise‹void›*

___

###  visit

▸ **visit**(`url`: string, `options?`: NavigationOptions): *Promise‹void›*

*Defined in [src/runtime/types.ts:132](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L132)*

Instructs the browser to navigate to a specific page. This is typically used as the
entrypoint to your test, as the first instruction it is also responsible for creating
a new Browser tab for this page to load into.

**Example:**

```typescript
step("Start", async browser => {
  await browser.visit("https://example.com")
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | url to visit |
`options?` | NavigationOptions | puppeteer navigation options  |

**Returns:** *Promise‹void›*

___

###  wait

▸ **wait**(`timeoutOrCondition`: [Condition](../classes/_src_page_condition_.condition.md) | number): *Promise‹boolean›*

*Defined in [src/runtime/types.ts:150](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L150)*

Creates a waiter which will pause the test until a condition is met or a timeout is reached. This can be used for validation or control flow.

Check out <[Until]> for a rich set of wait <[Condition]>s.

**Example:**

```typescript
step("Start", async browser => {
  await browser.wait(Until.elementIsVisible(By.css('h1.title')))
})
```

You can use either a numeric value in seconds to wait for a specific time,
or a <[Condition]>, for more flexible conditions.

**Parameters:**

Name | Type |
------ | ------ |
`timeoutOrCondition` | [Condition](../classes/_src_page_condition_.condition.md) \| number |

**Returns:** *Promise‹boolean›*

___

###  waitForNavigation

▸ **waitForNavigation**(): *Promise‹any›*

*Defined in [src/runtime/types.ts:152](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/types.ts#L152)*

**Returns:** *Promise‹any›*