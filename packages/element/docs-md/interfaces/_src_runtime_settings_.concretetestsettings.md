**[@flood/element](../README.md)**

[Globals](../globals.md) › ["src/runtime/Settings"](../modules/_src_runtime_settings_.md) › [ConcreteTestSettings](_src_runtime_settings_.concretetestsettings.md)

# Interface: ConcreteTestSettings

ConcreteTestSettings represents the minimal set of mandatory settings for a Test to run.

Users provide settings in their script via <TestSettings>, which is ultimately merged with DEFAULT_SETTINGS to yield ConcreteTestSettings.

From the Test's perspective, this means that `undefined` checking is front-loaded and  we can simply use settings as-is without having to check values for definedness.

**`internal`** 

## Hierarchy

* object

  * **ConcreteTestSettings**