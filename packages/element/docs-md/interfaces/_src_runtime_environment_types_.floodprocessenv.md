**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime-environment/types"](../modules/_src_runtime_environment_types_.md) › [FloodProcessEnv](_src_runtime_environment_types_.floodprocessenv.md)

# Interface: FloodProcessEnv

## Hierarchy

* **FloodProcessEnv**

## Index

### Properties

* [BROWSER_ID](_src_runtime_environment_types_.floodprocessenv.md#browser_id)
* [FLOOD_GRID_INDEX](_src_runtime_environment_types_.floodprocessenv.md#flood_grid_index)
* [FLOOD_GRID_NODE_SEQUENCE_ID](_src_runtime_environment_types_.floodprocessenv.md#flood_grid_node_sequence_id)
* [FLOOD_GRID_REGION](_src_runtime_environment_types_.floodprocessenv.md#flood_grid_region)
* [FLOOD_GRID_SEQUENCE_ID](_src_runtime_environment_types_.floodprocessenv.md#flood_grid_sequence_id)
* [FLOOD_GRID_SQEUENCE_ID](_src_runtime_environment_types_.floodprocessenv.md#flood_grid_sqeuence_id)
* [FLOOD_LOAD_TEST](_src_runtime_environment_types_.floodprocessenv.md#flood_load_test)
* [FLOOD_NODE_INDEX](_src_runtime_environment_types_.floodprocessenv.md#flood_node_index)
* [FLOOD_PROJECT_ID](_src_runtime_environment_types_.floodprocessenv.md#flood_project_id)
* [FLOOD_SEQUENCE_ID](_src_runtime_environment_types_.floodprocessenv.md#flood_sequence_id)
* [SEQUENCE](_src_runtime_environment_types_.floodprocessenv.md#sequence)

## Properties

###  BROWSER_ID

• **BROWSER_ID**: *number*

*Defined in [src/runtime-environment/types.ts:2](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L2)*

___

###  FLOOD_GRID_INDEX

• **FLOOD_GRID_INDEX**: *number*

*Defined in [src/runtime-environment/types.ts:6](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L6)*

___

###  FLOOD_GRID_NODE_SEQUENCE_ID

• **FLOOD_GRID_NODE_SEQUENCE_ID**: *number*

*Defined in [src/runtime-environment/types.ts:7](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L7)*

___

###  FLOOD_GRID_REGION

• **FLOOD_GRID_REGION**: *string*

*Defined in [src/runtime-environment/types.ts:3](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L3)*

___

###  FLOOD_GRID_SEQUENCE_ID

• **FLOOD_GRID_SEQUENCE_ID**: *number*

*Defined in [src/runtime-environment/types.ts:5](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L5)*

___

###  FLOOD_GRID_SQEUENCE_ID

• **FLOOD_GRID_SQEUENCE_ID**: *number*

*Defined in [src/runtime-environment/types.ts:4](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L4)*

___

###  FLOOD_LOAD_TEST

• **FLOOD_LOAD_TEST**: *boolean*

*Defined in [src/runtime-environment/types.ts:24](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L24)*

`true` when running as a load test on https://flood.io
`false` otherwise

This can be useful for changing settings based on whether you're
testing your script locally or running it as a fully fledged load test.

___

###  FLOOD_NODE_INDEX

• **FLOOD_NODE_INDEX**: *number*

*Defined in [src/runtime-environment/types.ts:8](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L8)*

___

###  FLOOD_PROJECT_ID

• **FLOOD_PROJECT_ID**: *number*

*Defined in [src/runtime-environment/types.ts:10](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L10)*

___

###  FLOOD_SEQUENCE_ID

• **FLOOD_SEQUENCE_ID**: *number*

*Defined in [src/runtime-environment/types.ts:9](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L9)*

___

###  SEQUENCE

• **SEQUENCE**: *number*

*Defined in [src/runtime-environment/types.ts:15](https://github.com/flood-io/element/blob/d9c12d9/packages/element/src/runtime-environment/types.ts#L15)*

Globally unique sequence number for this browser instance.