### Overview

Element is a browser based load testing tool designed to generate load by simulating user actions against an app.

### class: Browser

#### browser.visit(url: string, options: NavigationOptions = {})

- `options` <[NavigationOptions]>
  - waitUntil: LoadEvent | LoadEvent[]; When to consider navigation succeeded. Default load Navigation is consider when the `load` event is fired.
- returns: <[Promise]<[void]>>

### class: By

#### By.test
