// import { Page, AuthOptions, PageCloseOptions, Cookie, DeleteCookie } from 'puppeteer'

export const PageBasePoxy = new Proxy(
	{},
	{
		apply: function(target, that, args) {
			console.log(target, that, args)

			// sup.apply(that, args);
			// base.apply(that, args);
		},
	},
)

// export class PageProxy implements Page {
// 	constructor(private handler: (method: string, ...args: any[]) => Promise<any>) {}

// 	/**
// 	 * Provide credentials for http authentication.
// 	 * To disable authentication, pass `null`.
// 	 */
// 	authenticate(credentials: AuthOptions | null): Promise<void> {
// 		return this.handler('authenticate', credentials)
// 	}

// 	/** Brings page to front (activates tab). */
// 	bringToFront(): Promise<void> {
// 		return this.handler('bringToFront')
// 	}

// 	/** Get the browser context that the page belongs to. */
// 	// browserContext(): BrowserContext {}

// 	/** Closes the current page. */
// 	close(options?: PageCloseOptions): Promise<void> {
// 		return this.handler('close', options)
// 	}

// 	/**
// 	 * Gets the cookies.
// 	 * If no URLs are specified, this method returns cookies for the current page URL.
// 	 * If URLs are specified, only cookies for those URLs are returned.
// 	 */
// 	cookies(...urls: string[]): Promise<Cookie[]> {
// 		return this.handler('cookies', urls)
// 	}

// 	/**
// 	 * Deletes the specified cookies.
// 	 */
// 	deleteCookie(...cookies: DeleteCookie[]): Promise<void> {
// 		return this.handler('deleteCookie', ...cookies)
// 	}

// 	// /** Emulates given device metrics and user agent. This method is a shortcut for `setUserAgent` and `setViewport`.  */
// 	// emulate(options: EmulateOptions): Promise<void>

// 	// /** Emulates the media. */
// 	// emulateMediaType(mediaType: MediaType | null): Promise<void>

// 	// /**
// 	//  * Given an array of media feature objects, emulates CSS media features on the page.
// 	//  * Passing null resets all.
// 	//  */
// 	// emulateMediaFeatures(features: MediaFeature[] | null): Promise<void>

// 	// /**
// 	//  * Changes the timezone of the page.
// 	//  * See ICU’s [metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs.
// 	//  * Passing null disables timezone emulation.
// 	//  */
// 	// emulateTimezone(tz: string | null): Promise<void>

// 	// /**
// 	//  * Adds a function which would be invoked in one of the following scenarios: whenever the page is navigated; whenever the child frame is attached or navigated.
// 	//  * The function is invoked after the document was created but before any of its scripts were run. This is useful to amend JavaScript environment, e.g. to seed Math.random.
// 	//  * @param fn The function to be evaluated in browser context.
// 	//  * @param args The arguments to pass to the `fn`.
// 	//  */
// 	// evaluateOnNewDocument(fn: EvaluateFn, ...args: SerializableOrJSHandle[]): Promise<void>

// 	// /**
// 	//  * The method adds a function called name on the page's `window` object.
// 	//  * When called, the function executes `puppeteerFunction` in node.js and returns a
// 	//  * Promise which resolves to the return value of `puppeteerFunction`.
// 	//  * @param name The name of the function on the window object.
// 	//  * @param fn Callback function which will be called in Puppeteer's context.
// 	//  */
// 	// exposeFunction(name: string, puppeteerFunction: (...args: any[]) => any): Promise<void>

// 	// /** An array of all frames attached to the page. */
// 	// frames(): Frame[]

// 	// /**
// 	//  * Navigate to the previous page in history.
// 	//  * @param options The navigation parameters.
// 	//  */
// 	// goBack(options?: NavigationOptions): Promise<Response | null>

// 	// /**
// 	//  * Navigate to the next page in history.
// 	//  * @param options The navigation parameters.
// 	//  */
// 	// goForward(options?: NavigationOptions): Promise<Response | null>

// 	// /** Returns the virtual keyboard. */
// 	// keyboard: Keyboard

// 	// /** Indicates that the page has been closed. */
// 	// isClosed(): boolean

// 	// /** Page is guaranteed to have a main frame which persists during navigation's. */
// 	// mainFrame(): Frame

// 	// /** Gets the page metrics. */
// 	// metrics(): Promise<Metrics>

// 	// /** Gets the virtual mouse. */
// 	// mouse: Mouse

// 	// /**
// 	//  * Generates a PDF of the page with `print` css media.
// 	//  * To generate a pdf with `screen` media, call `page.emulateMedia('screen')` before calling `page.pdf()`:
// 	//  * @param options The PDF parameters.
// 	//  */
// 	// pdf(options?: PDFOptions): Promise<Buffer>

// 	// /**
// 	//  * The method iterates JavaScript heap and finds all the objects with the given prototype.
// 	//  * @param prototypeHandle A handle to the object prototype.
// 	//  */
// 	// queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>

// 	// /**
// 	//  * Reloads the current page.
// 	//  * @param options The navigation parameters.
// 	//  */
// 	// reload(options?: NavigationOptions): Promise<Response>

// 	// /**
// 	//  * Captures a screenshot of the page.
// 	//  * @param options The screenshot options.
// 	//  */
// 	// screenshot(options?: Base64ScreenShotOptions): Promise<string>
// 	// screenshot(options?: BinaryScreenShotOptions): Promise<Buffer>
// 	// screenshot(options?: ScreenshotOptions): Promise<string | Buffer>

// 	// /**
// 	//  * Toggles bypassing page's Content-Security-Policy.
// 	//  * NOTE CSP bypassing happens at the moment of CSP initialization rather then evaluation.
// 	//  * Usually this means that page.setBypassCSP should be called before navigating to the domain.
// 	//  * @param enabled sets bypassing of page's Content-Security-Policy.
// 	//  */
// 	// setBypassCSP(enabled: boolean): Promise<void>

// 	// /**
// 	//  * Determines whether cache is enabled on the page.
// 	//  * @param [enabled=true] Whether or not to enable cache on the page.
// 	//  */
// 	// setCacheEnabled(enabled?: boolean): Promise<void>

// 	// /**
// 	//  * Sets the cookies on the page.
// 	//  * @param cookies The cookies to set.
// 	//  */
// 	// setCookie(...cookies: SetCookie[]): Promise<void>

// 	// /**
// 	//  * This setting will change the default maximum navigation time of 30 seconds for the following methods:
// 	//  * - `page.goto`
// 	//  * - `page.goBack`
// 	//  * - `page.goForward`
// 	//  * - `page.reload`
// 	//  * - `page.waitForNavigation`
// 	//  */
// 	// setDefaultNavigationTimeout(timeout: number): void

// 	// /**
// 	//  * This setting will change the default maximum time for the following methods and related shortcuts:
// 	//  * - `page.goBack`
// 	//  * - `page.goForward`
// 	//  * - `page.goto`
// 	//  * - `page.reload`
// 	//  * - `page.setContent`
// 	//  * - `page.waitFor`
// 	//  * - `page.waitForFunction`
// 	//  * - `page.waitForNavigation`
// 	//  * - `page.waitForRequest`
// 	//  * - `page.waitForResponse`
// 	//  * - `page.waitForSelector`
// 	//  * - `page.waitForXPath`
// 	//  *
// 	//  * NOTE page.setDefaultNavigationTimeout takes priority over page.setDefaultTimeout
// 	//  */
// 	// setDefaultTimeout(timeout: number): void

// 	// /**
// 	//  * The extra HTTP headers will be sent with every request the page initiates.
// 	//  * @param headers An object containing additional http headers to be sent with every request. All header values must be strings.
// 	//  */
// 	// setExtraHTTPHeaders(headers: Headers): Promise<void>

// 	// /**
// 	//  * Sets the page's geolocation.
// 	//  */
// 	// setGeolocation(options: GeoOptions): Promise<void>

// 	// /**
// 	//  * Determines whether JavaScript is enabled on the page.
// 	//  * @param enable Whether or not to enable JavaScript on the page.
// 	//  */
// 	// setJavaScriptEnabled(enabled: boolean): Promise<void>

// 	// /**
// 	//  * Determines whether the offline mode is enabled.
// 	//  * @param enabled When `true`, enables the offline mode for the page.
// 	//  */
// 	// setOfflineMode(enabled: boolean): Promise<void>

// 	// /**
// 	//  * Determines whether the request interception is enabled.
// 	//  * @param enabled When `true` the methods `request.abort`, `request.continue` and `request.respond` must be used.
// 	//  */
// 	// setRequestInterception(enabled: boolean): Promise<void>

// 	// /**
// 	//  * Specifies the User-Agent used in this page.
// 	//  * @param userAgent The user-agent to be used in the page.
// 	//  */
// 	// setUserAgent(userAgent: string): Promise<void>
// 	// /**
// 	//  * Sets the viewport of the page.
// 	//  * @param viewport The viewport parameters.
// 	//  */
// 	// setViewport(viewport: Viewport): Promise<void>

// 	// /** @returns The target this page was created from */
// 	// target(): Target

// 	// /** Returns the page's title. */
// 	// title(): Promise<string>

// 	// /** Returns the virtual touchscreen object. */
// 	// touchscreen: Touchscreen

// 	// /** Returns the tracing object. */
// 	// tracing: Tracing

// 	// /**
// 	//  * The page's URL. This is a shortcut for `page.mainFrame().url()`
// 	//  */
// 	// url(): string

// 	// /** Gets the page viewport. */
// 	// viewport(): Viewport

// 	// waitForRequest(
// 	// 	urlOrPredicate: string | ((req: Request) => boolean),
// 	// 	options?: Timeoutable,
// 	// ): Promise<Request>

// 	// waitForResponse(
// 	// 	urlOrPredicate: string | ((res: Response) => boolean),
// 	// 	options?: Timeoutable,
// 	// ): Promise<Response>

// 	// /**
// 	//  * In non-headless Chromium, this method results in the native file picker dialog not showing up for the user.
// 	//  * This method is typically coupled with an action that triggers file choosing.
// 	//  * This must be called before the file chooser is launched. It will not return a currently active file chooser.
// 	//  */
// 	// waitForFileChooser(options?: Timeoutable): Promise<FileChooser>
// }
