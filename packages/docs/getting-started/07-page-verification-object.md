---
title: Verifying pages
articleGroup: Getting Started
subGroup: Page Verification
gettingStartedOrder: 7
position: 7
---

When load testing an application, it's very important to verify the page at each step of the test. This verification acts not only as a way to ensure you are in the correct part of the application under test but also serves to anchor test timings to allow Element to correctly calculate and aggregate metrics such as the step response time.

If you don't verify the state of the app, then you're only timing the action of clicking on a link or button -- that is, the performance of the javascript running on the page. Adding verification allows your test to take into account both the javascript performance, *and* the page load and display times.

## Using complete strings

The easiest way to verify that a resulting page has been load successfully is to check some static text value that you know will apear once the page has loaded.

```typescript
await browser.wait(Until.elementIsVisible(By.visibleText('Resulting page text here')))
```
We can use the *browser.wait* command along with the *By.visibleText* option containing the static text we would like to validate against.

Or, you are able to use a simple text verification over 2 statements as follows:

```typescript
let pageTextVerify = By.visibleText('Welcome to')
await browser.wait(Until.elementIsVisible(pageTextVerify))
```

## Using partial strings

If part of the known text is likely to change, consider using the partial visible text matcher:

```typescript
let pageTextVerify = By.partialVisibleText('Welcome to')
await browser.wait(Until.elementIsVisible(pageTextVerify))
```

## Using XPath

You are also able to wait for a specific object property on a resulting page load using a simple XPath query.

```typescript
let pageObjectVerify = By.xpath("//a[contains(@id, 'MyLoginLink')]")
await browser.wait(Until.elementIsVisible(pageObjectVerify))
```

<!-- suffix -->
---
Using the guide to [Interacting with Forms](/docs/1.0/06-interacting-with-forms), you've learned to type in text fields. In [Link Navigation](/docs/1.0/getting-started/05-link-navigation), you learned to click on a button. You can put these two together to simulate a user logging into your application. But what if you want to use different user credentials? In the next section, we'll talk test data.