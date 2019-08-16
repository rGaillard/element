---
title: Scripting Tips
position: 9
articleGroup: Getting Started
gettingStartedOrder: 9
---

There are many useful command line flags that help writing and debugging tests scripts. See the command line help for the `run` command (`element run --help`) for a full list of options.

### Watching for changes

When developing a test script, it is incredibly useful to see the results of your steps as you write them. When you pass the `--watch` flag, the `run` command will watch your test script and rerun the test when it changes.

```bash
element run my-element-test.ts --watch
```

Every time you save a change to `test.ts` the test will run again, showing you the updated output.

### Inspecting the page

Taking screenshots is a fantastic way of getting a glimpse of your page at important points during your test. However, while writing scripts the ability to view and interact with the entire page can be incredibly useful. In the same way DevTools are invaluable when building an application, with Element they can be just as helpful when writing test scripts.

Passing the `--devtools` flag when running a script does two things: run in non-headless mode, and also open DevTools. A GUI instance of Chrome will be used to run your test (rather than headless, which is the default) allowing you to see the steps execute on the page as your script runs. Element also opens the DevTools, letting you view the console, select elements and debug the page.

```bash
element run my-element-test.ts --devtools
```

Running tests in this way is especially useful when used in conjunction with [Browser.wait](../../api/Browser.md#browserwaittimeoutorcondition) to pause your script at specific points. This is a great technique for debugging a test script, or the page under test itself. If your test script interacts with many elements on a page (e.g. filling in a form), it is also an excellent way to capture element selectors.

> **Tip:**
>
> To see test steps execute without opening DevTools, use the `--no-headless` option instead.

You can check out more tips and tricks for running Element on the [Flood blog](https://flood.io/blog/tips-and-tricks-for-using-flood-element/).

---
In the last step of this guide, we'll cover how to take your Element script and use it to run a load test in the cloud.
