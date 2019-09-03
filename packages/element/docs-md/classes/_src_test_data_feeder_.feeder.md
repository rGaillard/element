**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/test-data/Feeder"](../modules/_src_test_data_feeder_.md) › [Feeder](_src_test_data_feeder_.feeder.md)

# Class: Feeder <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Feeder**

## Index

### Constructors

* [constructor](_src_test_data_feeder_.feeder.md#constructor)

### Properties

* [filters](_src_test_data_feeder_.feeder.md#private-filters)
* [instanceID](_src_test_data_feeder_.feeder.md#instanceid)
* [lines](_src_test_data_feeder_.feeder.md#private-lines)
* [pointer](_src_test_data_feeder_.feeder.md#private-pointer)
* [resetOnEnd](_src_test_data_feeder_.feeder.md#private-resetonend)
* [shuffleAfterLoad](_src_test_data_feeder_.feeder.md#private-shuffleafterload)

### Accessors

* [isComplete](_src_test_data_feeder_.feeder.md#iscomplete)
* [isEmpty](_src_test_data_feeder_.feeder.md#isempty)
* [isStart](_src_test_data_feeder_.feeder.md#isstart)
* [size](_src_test_data_feeder_.feeder.md#size)

### Methods

* [append](_src_test_data_feeder_.feeder.md#append)
* [circular](_src_test_data_feeder_.feeder.md#circular)
* [feed](_src_test_data_feeder_.feeder.md#feed)
* [filter](_src_test_data_feeder_.feeder.md#filter)
* [peek](_src_test_data_feeder_.feeder.md#peek)
* [reset](_src_test_data_feeder_.feeder.md#reset)
* [shuffle](_src_test_data_feeder_.feeder.md#shuffle)
* [toString](_src_test_data_feeder_.feeder.md#tostring)

## Constructors

###  constructor

\+ **new Feeder**(`instanceID`: string, `lines`: T[], `pointer`: number, `filters`: [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T›[]): *[Feeder](_src_test_data_feeder_.feeder.md)*

*Defined in [src/test-data/Feeder.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`instanceID` | string | "" |
`lines` | T[] |  [] |
`pointer` | number |  -1 |
`filters` | [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T›[] |  [] |

**Returns:** *[Feeder](_src_test_data_feeder_.feeder.md)*

## Properties

### `Private` filters

• **filters**: *[FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T›[]*

*Defined in [src/test-data/Feeder.ts:14](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L14)*

___

###  instanceID

• **instanceID**: *string*

*Defined in [src/test-data/Feeder.ts:11](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L11)*

___

### `Private` lines

• **lines**: *T[]*

*Defined in [src/test-data/Feeder.ts:12](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L12)*

___

### `Private` pointer

• **pointer**: *number*

*Defined in [src/test-data/Feeder.ts:13](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L13)*

___

### `Private` resetOnEnd

• **resetOnEnd**: *boolean* = true

*Defined in [src/test-data/Feeder.ts:7](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L7)*

___

### `Private` shuffleAfterLoad

• **shuffleAfterLoad**: *boolean* = false

*Defined in [src/test-data/Feeder.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L8)*

## Accessors

###  isComplete

• **get isComplete**(): *boolean*

*Defined in [src/test-data/Feeder.ts:81](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L81)*

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [src/test-data/Feeder.ts:89](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L89)*

**Returns:** *boolean*

___

###  isStart

• **get isStart**(): *boolean*

*Defined in [src/test-data/Feeder.ts:85](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L85)*

**Returns:** *boolean*

___

###  size

• **get size**(): *number*

*Defined in [src/test-data/Feeder.ts:77](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L77)*

**Returns:** *number*

## Methods

###  append

▸ **append**(`lines`: T[]): *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

*Defined in [src/test-data/Feeder.ts:19](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | T[] |

**Returns:** *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

___

###  circular

▸ **circular**(`loop`: boolean): *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

*Defined in [src/test-data/Feeder.ts:39](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L39)*

Configures the feeder to reset at the end, creating a repeating loop

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`loop` | boolean | true |

**Returns:** *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

___

###  feed

▸ **feed**(): *[Option](../modules/_src_utils_option_.md#option)‹T›*

*Defined in [src/test-data/Feeder.ts:57](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L57)*

Advances the feed by one iteration

**Returns:** *[Option](../modules/_src_utils_option_.md#option)‹T›*

___

###  filter

▸ **filter**(`func`: [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T›): *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

*Defined in [src/test-data/Feeder.ts:49](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`func` | [FeedFilterFunction](../modules/_src_test_data_feeder_.md#feedfilterfunction)‹T› |

**Returns:** *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

___

###  peek

▸ **peek**(): *[Option](../modules/_src_utils_option_.md#option)‹T›*

*Defined in [src/test-data/Feeder.ts:69](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L69)*

Reads the data at the current cursor without advancing

**Returns:** *[Option](../modules/_src_utils_option_.md#option)‹T›*

___

###  reset

▸ **reset**(): *void*

*Defined in [src/test-data/Feeder.ts:73](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L73)*

**Returns:** *void*

___

###  shuffle

▸ **shuffle**(`shuffle`: boolean): *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

*Defined in [src/test-data/Feeder.ts:44](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shuffle` | boolean | true |

**Returns:** *[Feeder](_src_test_data_feeder_.feeder.md)‹T›*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/test-data/Feeder.ts:93](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/test-data/Feeder.ts#L93)*

**Returns:** *string*