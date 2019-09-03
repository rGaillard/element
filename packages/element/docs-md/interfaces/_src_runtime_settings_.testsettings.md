**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Settings"](../modules/_src_runtime_settings_.md) › [TestSettings](_src_runtime_settings_.testsettings.md)

# Interface: TestSettings

The TestSettings interface specifies the available settings you have to configure how your test runs. These properties should be exported using the property `settings`.

**Example:**

```typescript
export const settings: TestSettings = {
  loopCount: Infinity,
  clearCache: true
}
```

See [DEFAULT_SETTINGS] for a list of the default value for each setting.

## Hierarchy

* **TestSettings**

## Index

### Properties

* [actionDelay](_src_runtime_settings_.testsettings.md#optional-actiondelay)
* [blockedDomains](_src_runtime_settings_.testsettings.md#optional-blockeddomains)
* [chromeVersion](_src_runtime_settings_.testsettings.md#optional-chromeversion)
* [clearCache](_src_runtime_settings_.testsettings.md#optional-clearcache)
* [clearCookies](_src_runtime_settings_.testsettings.md#optional-clearcookies)
* [consoleFilter](_src_runtime_settings_.testsettings.md#optional-consolefilter)
* [description](_src_runtime_settings_.testsettings.md#optional-description)
* [device](_src_runtime_settings_.testsettings.md#optional-device)
* [disableCache](_src_runtime_settings_.testsettings.md#optional-disablecache)
* [duration](_src_runtime_settings_.testsettings.md#optional-duration)
* [extraHTTPHeaders](_src_runtime_settings_.testsettings.md#optional-extrahttpheaders)
* [ignoreHTTPSErrors](_src_runtime_settings_.testsettings.md#optional-ignorehttpserrors)
* [incognito](_src_runtime_settings_.testsettings.md#optional-incognito)
* [launchArgs](_src_runtime_settings_.testsettings.md#optional-launchargs)
* [loopCount](_src_runtime_settings_.testsettings.md#optional-loopcount)
* [name](_src_runtime_settings_.testsettings.md#optional-name)
* [responseTimeMeasurement](_src_runtime_settings_.testsettings.md#optional-responsetimemeasurement)
* [screenshotOnFailure](_src_runtime_settings_.testsettings.md#optional-screenshotonfailure)
* [stepDelay](_src_runtime_settings_.testsettings.md#optional-stepdelay)
* [userAgent](_src_runtime_settings_.testsettings.md#optional-useragent)
* [waitTimeout](_src_runtime_settings_.testsettings.md#optional-waittimeout)
* [waitUntil](_src_runtime_settings_.testsettings.md#optional-waituntil)

## Properties

### `Optional` actionDelay

• **actionDelay**? : *undefined | number*

*Defined in [src/runtime/Settings.ts:96](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L96)*

Specifies the time (in seconds) to wait between each action call.

Waiting between actions simulates the behaviour of a real user as they read, think and act on the page's content.

___

### `Optional` blockedDomains

• **blockedDomains**? : *string[]*

*Defined in [src/runtime/Settings.ts:210](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L210)*

Blocks requests to a list a domains. Accepts partial matches using `*` or any matcher accepted by [Micromatch](https://github.com/micromatch/micromatch)

Matching is applied to the `hostname` only, unless the blocked domain contains a `:` in which case it will match against `hostname` and `port`.

Example:

`["*.google-analytics.com", "*:1337"]`

___

### `Optional` chromeVersion

• **chromeVersion**? : *[ChromeVersion](../modules/_src_runtime_settings_.md#chromeversion)*

*Defined in [src/runtime/Settings.ts:198](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L198)*

Specifies a version of Google Chrome

___

### `Optional` clearCache

• **clearCache**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:130](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L130)*

Specifies whether Browser cache should be cleared after each test loop.

**`default`** false

___

### `Optional` clearCookies

• **clearCookies**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:123](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L123)*

Specifies whether cookies should be cleared after each test loop.

**`default`** true

___

### `Optional` consoleFilter

• **consoleFilter**? : *[ConsoleMethod](../modules/_src_runtime_settings_.md#consolemethod)[]*

*Defined in [src/runtime/Settings.ts:182](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L182)*

Specify which console methods to filter out. By default no console methods are filtered.

This setting can be useful for very noisy tests. When a method is filtered, it still works as normal but the message will be omitted from the Element output.

___

### `Optional` description

• **description**? : *undefined | string*

*Defined in [src/runtime/Settings.ts:157](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L157)*

Speicifies the description of the test specified in the comments section

**`default`** ""

___

### `Optional` device

• **device**? : *undefined | string*

*Defined in [src/runtime/Settings.ts:111](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L111)*

Specifies a device to emulate with browser device emulation.

___

### `Optional` disableCache

• **disableCache**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:135](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L135)*

Disables browser request cache for all requests.

___

### `Optional` duration

• **duration**? : *undefined | number*

*Defined in [src/runtime/Settings.ts:82](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L82)*

Maximum duration to run the test for.

Note that when running a load test via https://flood.io, the duration of the load test takes precedence over this setting.

Defaults to `-1` for no timeout.

___

### `Optional` extraHTTPHeaders

• **extraHTTPHeaders**? : *undefined | object*

*Defined in [src/runtime/Settings.ts:143](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L143)*

Specifies a set of extra HTTP headers to set before each test loop.
If this setting is undefined, the extra HTTP headers are left as-is between iterations.

**`default`** {}

___

### `Optional` ignoreHTTPSErrors

• **ignoreHTTPSErrors**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:187](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L187)*

Whether to ignore HTTPS errors during navigation. Defaults to `false`

___

### `Optional` incognito

• **incognito**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:193](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L193)*

Controls whether each iteration should run within an Incognito window instead of a normal
window. The Incognito session will be destroyed between each loop.

___

### `Optional` launchArgs

• **launchArgs**? : *string[]*

*Defined in [src/runtime/Settings.ts:225](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L225)*

Additional arguments to pass to the browser instance.
The list of Chromium flags can be found at https://peter.sh/experiments/chromium-command-line-switches/

___

### `Optional` loopCount

• **loopCount**? : *undefined | number*

*Defined in [src/runtime/Settings.ts:89](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L89)*

Number of times to run this test.

Defaults to `-1` for an unlimited number of loops.

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [src/runtime/Settings.ts:150](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L150)*

Speicifies the name of the test specified in the comments section

**`default`** "Element Test"

___

### `Optional` responseTimeMeasurement

• **responseTimeMeasurement**? : *[ResponseTiming](../modules/_src_runtime_settings_.md#responsetiming)*

*Defined in [src/runtime/Settings.ts:175](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L175)*

Configures how we record response time for each step.

Possible values:
- `"page"`: Record the document loading response time. This is usually what you consider response time on paged web apps.
- `"network"`: Takes the mean response time of all network requests which occur during a step. This is useful for Single Page Application which don't actually trigger a navigation.
- `"step"`: (Default) Records the wall clock time of a step. This is useful for Single Page Application which don't actually trigger a navigation.
- `"stepWithThinkTime"`: Records the wall clock time of a step including `actionDelay` time.

___

### `Optional` screenshotOnFailure

• **screenshotOnFailure**? : *undefined | false | true*

*Defined in [src/runtime/Settings.ts:164](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L164)*

Take a screenshot of the page when a command fails, to aid in debugging.

Screenshots are saved to `/flood/result/screenshots` in the test archive.

___

### `Optional` stepDelay

• **stepDelay**? : *undefined | number*

*Defined in [src/runtime/Settings.ts:101](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L101)*

Specifies the time (in seconds) to wait after each step.

___

### `Optional` userAgent

• **userAgent**? : *undefined | string*

*Defined in [src/runtime/Settings.ts:106](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L106)*

Specifies a custom User Agent (UA) string to send.

___

### `Optional` waitTimeout

• **waitTimeout**? : *undefined | number*

*Defined in [src/runtime/Settings.ts:116](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L116)*

Global wait timeout applied to all wait tasks.

___

### `Optional` waitUntil

• **waitUntil**? : *[ElementPresence](../modules/_src_runtime_settings_.md#elementpresence)*

*Defined in [src/runtime/Settings.ts:219](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime/Settings.ts#L219)*