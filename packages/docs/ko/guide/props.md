# Props

## data

* Type: `none`
* Default: `none`
* **Required**

data to be summarized

## vals

* Type: `Array`
* Default: `[]`

attribute names used as arguments to aggregator (gets passed to aggregator generating function)

## cols

* Type: `Array`
* Default: `[]`

attribute names to prepopulate in cols area

## rows

* Type: `Array`
* Default: `[]`

attribute names to prepopulate in row area

## rowTotal

* Type: `Boolean`
* Default: `true`

show total of rows

## colTotal

* Type: `Boolean`
* Default: `true`

show total of cols

## aggregators

* Type: `Object`
* Default: `aggregators` from `Utilities`

dictionary of generators for aggregation functions in dropdown (see [original PivotTable.js documentation](https://github.com/nicolaskruchten/pivottable/wiki/Aggregators))

## aggregatorName

* Type: `String`
* Default: `Count`

key to `aggregators` object specifying the aggregator to use for computations

## rendererName

* Type: `String`
* Default : `Table`

key to renderers object specifying the renderer to use

## valueFilter

* Type: `Object`
* Default: `{}`

object whose keys are attribute names and values are objects of attribute value-boolean pairs which denote records to include or exclude from computation and rendering; used to prepopulate the filter menus that appear on double-click

## sorters

* Type: `Function or Object`
* Default: `{}`

accessed or called with an attribute name and can return a function which can be used as an argument to array.sort for output purposes.

## derivedAttributes

* Type: `Object`
* Default: `{}`

defines derived attributes

## rowOrder

* Type: `String`
* Default: `key_a_to_z`

the order in which row data is provided to the renderer, must be one of `"key_a_to_z"`, `"value_a_to_z"`, `"value_z_to_a"`, ordering by value orders by row total

## colOrder

* Type: `String`
* Default: `key_a_to_z`

the order in which column data is provided to the renderer, must be one of `"key_a_to_z"`, `"value_a_to_z"`, `"value_z_to_a"`, ordering by value orders by column total

## tableMaxWidth

* Type: `Number`
* Default: `0`

value of max-width in table style

## hiddenAttributes

* Type: `Array`
* Default: `[]`

contains attribute names to omit from the UI

## hiddenFromAggregators

* Type: `Array`
* Default: `[]`

contains attribute names to omit from the aggregator arguments dropdowns

## hiddenFromDragDrop

* Type: `Array`
* Default: `[]`

contains attribute names to omit from the aggregator arguments dropdowns

## sortonlyFromDragDrop

* Type: `Array`
* Default: `[]`

contains attribute names to sort from the drag'n'drop of the UI

## disabledFromDragDrop

* Type: `Array`
* Default: `[]`
contains attribute names to disable from the drag'n'drop portion of the UI

## menuLimit

* Type: `Number`
* Default: `500`

maximum number of values to list in the double-click menu

## tableColorScaleGenerator

* Type: `Function`
* Default: `undefined`

generate custom color render for `Table Heatmap`
