**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/page/By"](../modules/_src_page_by_.md) › [By](_src_page_by_.by.md)

# Class: By

By is used to create <[Locator]>s to find Elements or use in any place which accepts a Locator or <[Locatable]>.

**`class`** By

## Hierarchy

* **By**

## Index

### Constructors

* [constructor](_src_page_by_.by.md#constructor)

### Properties

* [args](_src_page_by_.by.md#args)
* [command](_src_page_by_.by.md#command)

### Methods

* [attr](_src_page_by_.by.md#static-attr)
* [css](_src_page_by_.by.md#static-css)
* [id](_src_page_by_.by.md#static-id)
* [js](_src_page_by_.by.md#static-js)
* [linkText](_src_page_by_.by.md#static-linktext)
* [nameAttr](_src_page_by_.by.md#static-nameattr)
* [partialLinkText](_src_page_by_.by.md#static-partiallinktext)
* [partialVisibleText](_src_page_by_.by.md#static-partialvisibletext)
* [tagName](_src_page_by_.by.md#static-tagname)
* [visibleText](_src_page_by_.by.md#static-visibletext)
* [xpath](_src_page_by_.by.md#static-xpath)

## Constructors

###  constructor

\+ **new By**(`command`: string, ...`args`: any[]): *[By](_src_page_by_.by.md)*

*Defined in [src/page/By.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`...args` | any[] |

**Returns:** *[By](_src_page_by_.by.md)*

## Properties

###  args

• **args**: *string[]*

*Defined in [src/page/By.ts:18](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L18)*

___

###  command

• **command**: *string*

*Defined in [src/page/By.ts:17](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L17)*

## Methods

### `Static` attr

▸ **attr**(`tagName`: string, `attrName`: string, `attrValue`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:118](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L118)*

Locates an element where the attribute matches the value.

**Example:**
By.attr('name', 'frame-name')

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attrName` | string |
`attrValue` | string |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` css

▸ **css**(`selector`: string, `debugString?`: undefined | string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:29](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L29)*

Locates an element using a CSS (jQuery) style selector

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selector` | string |   |
`debugString?` | undefined \| string | - |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` id

▸ **id**(`id`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:42](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L42)*

Locates elements by the ID attribute. This locator uses the CSS selector
`*[id="$ID"]`, _not_ `document.getElementById`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID to search for  |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` js

▸ **js**(`script`: [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn), ...`args`: any[]): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:94](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L94)*

Locates an elements by evaluating a JavaScript expression.
The result of this expression must be an element or list of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`script` | [EvaluateFn](../modules/_src_runtime_types_.md#evaluatefn) | The script to execute. |
`...args` | any[] | - |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` linkText

▸ **linkText**(`text`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:53](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L53)*

Locates link elements whose `textContent` matches the given
string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The link text to search for.  |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` nameAttr

▸ **nameAttr**(`value`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:108](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L108)*

Locates elements whose `name` attribute has the given value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The name attribute to search for. |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

The new locator.

___

### `Static` partialLinkText

▸ **partialLinkText**(`text`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:63](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L63)*

Locates link elements whose `textContent` contains the given
substring.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The substring to check for in a link's visible text.  |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` partialVisibleText

▸ **partialVisibleText**(`text`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:83](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L83)*

Locates all elements whose `textContent` contains the given
substring and is not hidden by CSS.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The substring to check for in a elements's visible text.  |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` tagName

▸ **tagName**(`name`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:131](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L131)*

Locates elements with a given tag name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The tag name to search for. |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

The new locator.

___

### `Static` visibleText

▸ **visibleText**(`text`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:73](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L73)*

Locates all elements whose `textContent` equals the given
substring and is not hidden by CSS.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The string to check for in a elements's visible text.  |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

___

### `Static` xpath

▸ **xpath**(`xpath`: string): *[Locator](../interfaces/_src_page_types_.locator.md)*

*Defined in [src/page/By.ts:146](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/page/By.ts#L146)*

Locates elements matching a XPath selector. Care should be taken when
using an XPath selector with a {@link webdriver.WebElement} as WebDriver
will respect the context in the specified in the selector. For example,
given the selector `//div`, WebDriver will search from the document root
regardless of whether the locator was used with a WebElement.

**`see`** http://www.w3.org/TR/xpath/

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xpath` | string | The XPath selector to use. |

**Returns:** *[Locator](../interfaces/_src_page_types_.locator.md)*

The new locator.