**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Settings"](_src_runtime_settings_.md)

# External module: "src/runtime/Settings"

## Index

### Interfaces

* [ConcreteTestSettings](../interfaces/_src_runtime_settings_.concretetestsettings.md)
* [TestSettings](../interfaces/_src_runtime_settings_.testsettings.md)

### Type aliases

* [ChromeVersion](_src_runtime_settings_.md#chromeversion)
* [ConsoleMethod](_src_runtime_settings_.md#consolemethod)
* [ElementPresence](_src_runtime_settings_.md#elementpresence)
* [ResponseTiming](_src_runtime_settings_.md#responsetiming)

### Variables

* [DEFAULT_ACTION_WAIT_SECONDS](_src_runtime_settings_.md#const-default_action_wait_seconds)
* [DEFAULT_STEP_WAIT_SECONDS](_src_runtime_settings_.md#const-default_step_wait_seconds)

### Functions

* [normalizeSettings](_src_runtime_settings_.md#normalizesettings)
* [setup](_src_runtime_settings_.md#setup)

### Object literals

* [DEFAULT_SETTINGS](_src_runtime_settings_.md#const-default_settings)

## Type aliases

###  ChromeVersion

Ƭ **ChromeVersion**: *"puppeteer" | "stable"*

*Defined in [src/runtime/Settings.ts:50](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L50)*

Represents the versions of chrome that the test script will run against.

literal | description
--------|-----------
puppeteer | (Default) The browser bundled with [puppeteer]. It is a curated version of [chromium](https://www.chromium.org) (the open source version of Google Chrome). Using the puppeteer-bundled Chromium ensures the best compatibility with puppeteer, but lacks some features such as video support.
stable | The latest version of [Google Chrome](https://www.chromium.org/). Google Chrome has more features than chromium, but isn't tested as thoroughly against puppeteer, which can result in intermittent errors. If you don't need the extra features, please use `bundled`.

___

###  ConsoleMethod

Ƭ **ConsoleMethod**: *"log" | "info" | "debug" | "warn" | "error"*

*Defined in [src/runtime/Settings.ts:40](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L40)*

Specifies a `console` method

___

###  ElementPresence

Ƭ **ElementPresence**: *"visible" | "present" | false | null*

*Defined in [src/runtime/Settings.ts:57](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L57)*

Element presence lists the accepted values for automatically waiting on elements before running actions.

Set to `false` or `null` to disable.

___

###  ResponseTiming

Ƭ **ResponseTiming**: *"page" | "network" | "step" | "stepWithThinkTime"*

*Defined in [src/runtime/Settings.ts:35](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L35)*

Specifies a method for recording response times.

literal | description
--------|------------
step | (Default) Records the wall clock time of a step. This is useful for Single Page Application which don't actually trigger a navigation.
page | Record the document loading response time. This is usually what you consider response time on paged web apps.
network | (Experimental) Takes the mean response time of all network requests which occur during a step. This is useful for Single Page Application which don't actually trigger a navigation.
stepWithThinkTime | `"stepWithThinkTime"`: Records the wall clock time of a step including `actionDelay` time.

## Variables

### `Const` DEFAULT_ACTION_WAIT_SECONDS

• **DEFAULT_ACTION_WAIT_SECONDS**: *0.5* = 0.5

*Defined in [src/runtime/Settings.ts:23](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L23)*

___

### `Const` DEFAULT_STEP_WAIT_SECONDS

• **DEFAULT_STEP_WAIT_SECONDS**: *5* = 5

*Defined in [src/runtime/Settings.ts:22](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L22)*

## Functions

###  normalizeSettings

▸ **normalizeSettings**(`settings`: [TestSettings](../interfaces/_src_runtime_settings_.testsettings.md)): *[TestSettings](../interfaces/_src_runtime_settings_.testsettings.md)*

*Defined in [src/runtime/Settings.ts:273](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L273)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [TestSettings](../interfaces/_src_runtime_settings_.testsettings.md) |

**Returns:** *[TestSettings](../interfaces/_src_runtime_settings_.testsettings.md)*

___

###  setup

▸ **setup**(`settings`: [TestSettings](../interfaces/_src_runtime_settings_.testsettings.md)): *void*

*Defined in [src/runtime/Settings.ts:19](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L19)*

Declares the settings for the test, overriding the settings constant exported in the test script.

_This is a secondary syntax for `export const settings = {}` which functions exactly the same way._

**Example:**

```typescript
export default () => {
 setup({ waitTimeout: 60 })
}
```

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`settings` | [TestSettings](../interfaces/_src_runtime_settings_.testsettings.md) |   |

**Returns:** *void*

## Object literals

### `Const` DEFAULT_SETTINGS

### ▪ **DEFAULT_SETTINGS**: *object*

*Defined in [src/runtime/Settings.ts:231](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L231)*

The default settings for a Test. Any settings you provide are merged into these defaults.

###  actionDelay

• **actionDelay**: *number* = 2

*Defined in [src/runtime/Settings.ts:235](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L235)*

###  blockedDomains

• **blockedDomains**: *never[]* =  []

*Defined in [src/runtime/Settings.ts:250](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L250)*

###  chromeVersion

• **chromeVersion**: *"puppeteer"* = "puppeteer"

*Defined in [src/runtime/Settings.ts:249](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L249)*

###  clearCache

• **clearCache**: *false* = false

*Defined in [src/runtime/Settings.ts:239](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L239)*

###  clearCookies

• **clearCookies**: *true* = true

*Defined in [src/runtime/Settings.ts:238](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L238)*

###  consoleFilter

• **consoleFilter**: *never[]* =  []

*Defined in [src/runtime/Settings.ts:245](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L245)*

by default, don't filter any console messages from the browser

###  description

• **description**: *string* = ""

*Defined in [src/runtime/Settings.ts:253](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L253)*

###  device

• **device**: *string* = "Chrome Desktop Large"

*Defined in [src/runtime/Settings.ts:247](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L247)*

###  disableCache

• **disableCache**: *false* = false

*Defined in [src/runtime/Settings.ts:254](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L254)*

###  duration

• **duration**: *number* =  -1

*Defined in [src/runtime/Settings.ts:233](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L233)*

###  extraHTTPHeaders

• **extraHTTPHeaders**: *object*

*Defined in [src/runtime/Settings.ts:255](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L255)*

#### Type declaration:

###  ignoreHTTPSErrors

• **ignoreHTTPSErrors**: *false* = false

*Defined in [src/runtime/Settings.ts:248](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L248)*

###  incognito

• **incognito**: *false* = false

*Defined in [src/runtime/Settings.ts:251](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L251)*

###  launchArgs

• **launchArgs**: *never[]* =  []

*Defined in [src/runtime/Settings.ts:256](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L256)*

###  loopCount

• **loopCount**: *number* =  Infinity

*Defined in [src/runtime/Settings.ts:234](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L234)*

###  name

• **name**: *string* = "Element Test"

*Defined in [src/runtime/Settings.ts:252](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L252)*

###  responseTimeMeasurement

• **responseTimeMeasurement**: *"step"* = "step"

*Defined in [src/runtime/Settings.ts:241](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L241)*

###  screenshotOnFailure

• **screenshotOnFailure**: *true* = true

*Defined in [src/runtime/Settings.ts:237](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L237)*

###  stepDelay

• **stepDelay**: *number* = 6

*Defined in [src/runtime/Settings.ts:236](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L236)*

###  userAgent

• **userAgent**: *any* =  CustomDeviceDescriptors['Chrome Desktop Large'].userAgent

*Defined in [src/runtime/Settings.ts:246](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L246)*

###  waitTimeout

• **waitTimeout**: *number* = 30

*Defined in [src/runtime/Settings.ts:240](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L240)*

###  waitUntil

• **waitUntil**: *false* = false

*Defined in [src/runtime/Settings.ts:232](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L232)*