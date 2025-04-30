<template><div><h1 id="props-reference" tabindex="-1"><a class="header-anchor" href="#props-reference"><span>Props Reference</span></a></h1>
<h2 id="basic-props" tabindex="-1"><a class="header-anchor" href="#basic-props"><span>Basic Props</span></a></h2>
<p>Props that support both <code v-pre>vue-pivottable</code> and <code v-pre>vue-pivottable-ui</code>.</p>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code> || <code v-pre>Object</code></li>
<li>Default: <code v-pre>undefined</code></li>
<li><strong>Required</strong></li>
</ul>
<p>data to be summarized</p>
<p><a href="https://codesandbox.io/s/vue-pivottable-base-qhqoz" target="_blank" rel="noopener noreferrer">live</a></p>
<!-- <iframe src="https://codesandbox.io/embed/vue-pivottable-props-data-l1rzc?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-props-data"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->
<h3 id="vals" tabindex="-1"><a class="header-anchor" href="#vals"><span>vals</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>attribute names used as arguments to aggregator (gets passed to aggregator generating function)</p>
<p><a href="https://codesandbox.io/embed/vue-pivottable-props-vals-vjqfh" target="_blank" rel="noopener noreferrer">live</a></p>
<!-- <iframe src="https://codesandbox.io/embed/vue-pivottable-props-vals-vjqfh?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-props-vals"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->
<h3 id="cols" tabindex="-1"><a class="header-anchor" href="#cols"><span>cols</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>attribute names to prepopulate in cols area</p>
<h3 id="rows" tabindex="-1"><a class="header-anchor" href="#rows"><span>rows</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>attribute names to prepopulate in row area</p>
<h3 id="rowtotal" tabindex="-1"><a class="header-anchor" href="#rowtotal"><span>rowTotal</span></a></h3>
<ul>
<li>Type: <code v-pre>Boolean</code></li>
<li>Default: <code v-pre>true</code></li>
</ul>
<p>show total of rows</p>
<h3 id="coltotal" tabindex="-1"><a class="header-anchor" href="#coltotal"><span>colTotal</span></a></h3>
<ul>
<li>Type: <code v-pre>Boolean</code></li>
<li>Default: <code v-pre>true</code></li>
</ul>
<p>show total of cols</p>
<h3 id="aggregators" tabindex="-1"><a class="header-anchor" href="#aggregators"><span>aggregators</span></a></h3>
<ul>
<li>Type: <code v-pre>Object</code></li>
<li>Default: <code v-pre>aggregators</code> from <code v-pre>Utilities</code></li>
</ul>
<p>dictionary of generators for aggregation functions in dropdown (see <a href="https://github.com/nicolaskruchten/pivottable/wiki/Aggregators" target="_blank" rel="noopener noreferrer">original PivotTable.js documentation</a>)</p>
<h3 id="aggregatorname" tabindex="-1"><a class="header-anchor" href="#aggregatorname"><span>aggregatorName</span></a></h3>
<ul>
<li>Type: <code v-pre>String</code></li>
<li>Default: <code v-pre>Count</code></li>
</ul>
<p>key to <code v-pre>aggregators</code> object specifying the aggregator to use for computations</p>
<h3 id="renderername" tabindex="-1"><a class="header-anchor" href="#renderername"><span>rendererName</span></a></h3>
<ul>
<li>Type: <code v-pre>String</code></li>
<li>Default : <code v-pre>Table</code></li>
</ul>
<p>key to renderers object specifying the renderer to use</p>
<h3 id="valuefilter" tabindex="-1"><a class="header-anchor" href="#valuefilter"><span>valueFilter</span></a></h3>
<ul>
<li>Type: <code v-pre>Object</code></li>
<li>Default: <code v-pre>{}</code></li>
</ul>
<p>object whose keys are attribute names and values are objects of attribute value-boolean pairs which denote records to include or exclude from computation and rendering; used to prepopulate the filter menus that appear on double-click</p>
<h3 id="sorters" tabindex="-1"><a class="header-anchor" href="#sorters"><span>sorters</span></a></h3>
<ul>
<li>Type: <code v-pre>Function or Object</code></li>
<li>Default: <code v-pre>{}</code></li>
</ul>
<p>accessed or called with an attribute name and can return a function which can be used as an argument to array.sort for output purposes.</p>
<h3 id="derivedattributes" tabindex="-1"><a class="header-anchor" href="#derivedattributes"><span>derivedAttributes</span></a></h3>
<ul>
<li>Type: <code v-pre>Object</code></li>
<li>Default: <code v-pre>{}</code></li>
</ul>
<p>defines derived attributes</p>
<h3 id="roworder" tabindex="-1"><a class="header-anchor" href="#roworder"><span>rowOrder</span></a></h3>
<ul>
<li>Type: <code v-pre>String</code></li>
<li>Default: <code v-pre>key_a_to_z</code></li>
</ul>
<p>the order in which row data is provided to the renderer, must be one of <code v-pre>&quot;key_a_to_z&quot;</code>, <code v-pre>&quot;value_a_to_z&quot;</code>, <code v-pre>&quot;value_z_to_a&quot;</code>, ordering by value orders by row total</p>
<h3 id="colorder" tabindex="-1"><a class="header-anchor" href="#colorder"><span>colOrder</span></a></h3>
<ul>
<li>Type: <code v-pre>String</code></li>
<li>Default: <code v-pre>key_a_to_z</code></li>
</ul>
<p>the order in which column data is provided to the renderer, must be one of <code v-pre>&quot;key_a_to_z&quot;</code>, <code v-pre>&quot;value_a_to_z&quot;</code>, <code v-pre>&quot;value_z_to_a&quot;</code>, ordering by value orders by column total</p>
<h3 id="tablemaxwidth" tabindex="-1"><a class="header-anchor" href="#tablemaxwidth"><span>tableMaxWidth</span></a></h3>
<ul>
<li>Type: <code v-pre>Number</code></li>
<li>Default: <code v-pre>0</code></li>
</ul>
<p>value of max-width in table style</p>
<h3 id="tablecolorscalegenerator" tabindex="-1"><a class="header-anchor" href="#tablecolorscalegenerator"><span>tableColorScaleGenerator</span></a></h3>
<ul>
<li>Type: <code v-pre>Function</code></li>
<li>Default: <code v-pre>undefined</code></li>
</ul>
<p>generate custom color render for <code v-pre>Table Heatmap</code></p>
<h3 id="locales-deprecated" tabindex="-1"><a class="header-anchor" href="#locales-deprecated"><span>locales <sup style="color:#c92222;">deprecated</sup></span></a></h3>
<ul>
<li>Type: <code v-pre>Object</code></li>
<li>Default: <a href="/guide/utilities.html#locales" target="_blank" rel="noopener noreferrer">see utilities</a></li>
</ul>
<p>localeStrings is deprecated, replace in locales.</p>
<h2 id="pivottable-ui-props" tabindex="-1"><a class="header-anchor" href="#pivottable-ui-props"><span>Pivottable UI Props</span></a></h2>
<p>Props that only support <code v-pre>vue-pivottable-ui</code>.</p>
<h3 id="hiddenattributes" tabindex="-1"><a class="header-anchor" href="#hiddenattributes"><span>hiddenAttributes</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>contains attribute names to omit from the UI</p>
<h3 id="hiddenfromaggregators" tabindex="-1"><a class="header-anchor" href="#hiddenfromaggregators"><span>hiddenFromAggregators</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>contains attribute names to omit from the aggregator arguments dropdowns</p>
<h3 id="hiddenfromdragdrop" tabindex="-1"><a class="header-anchor" href="#hiddenfromdragdrop"><span>hiddenFromDragDrop</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>contains attribute names to omit from the aggregator arguments dropdowns</p>
<h3 id="sortonlyfromdragdrop" tabindex="-1"><a class="header-anchor" href="#sortonlyfromdragdrop"><span>sortonlyFromDragDrop</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code></li>
</ul>
<p>contains attribute names to sort from the drag'n'drop of the UI</p>
<h3 id="disabledfromdragdrop" tabindex="-1"><a class="header-anchor" href="#disabledfromdragdrop"><span>disabledFromDragDrop</span></a></h3>
<ul>
<li>Type: <code v-pre>Array</code></li>
<li>Default: <code v-pre>[]</code>
contains attribute names to disable from the drag'n'drop portion of the UI</li>
</ul>
<h3 id="menulimit" tabindex="-1"><a class="header-anchor" href="#menulimit"><span>menuLimit</span></a></h3>
<ul>
<li>Type: <code v-pre>Number</code></li>
<li>Default: <code v-pre>500</code></li>
</ul>
<p>maximum number of values to list in the double-click menu</p>
<h3 id="rowlimit" tabindex="-1"><a class="header-anchor" href="#rowlimit"><span>rowLimit</span></a></h3>
<ul>
<li>Type: <code v-pre>Number</code></li>
<li>Default: <code v-pre>0</code></li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>rowLimit is deprecated.</p>
</div>
<h3 id="collimit" tabindex="-1"><a class="header-anchor" href="#collimit"><span>colLimit</span></a></h3>
<ul>
<li>Type: <code v-pre>Number</code></li>
<li>Default: <code v-pre>0</code></li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>colLimit is deprecated.</p>
</div>
</div></template>


