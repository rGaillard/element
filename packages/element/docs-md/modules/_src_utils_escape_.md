**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/utils/Escape"](_src_utils_escape_.md)

# External module: "src/utils/Escape"

## Index

### Functions

* [escapeCss](_src_utils_escape_.md#escapecss)

## Functions

###  escapeCss

▸ **escapeCss**(`css`: string): *string*

*Defined in [src/utils/Escape.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/utils/Escape.ts#L9)*

Escapes a CSS string.

**`throws`** {TypeError} if the input value is not a string.

**`throws`** {InvalidCharacterError} if the string contains an invalid character.

**`see`** https://drafts.csswg.org/cssom/#serialize-an-identifier

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`css` | string | the string to escape. |

**Returns:** *string*

the escaped string.