<template><div><h1 id="슬롯" tabindex="-1"><a class="header-anchor" href="#슬롯"><span>슬롯</span></a></h1>
<p>vue-pivottable-ui를 사용자 정의하기 위한 옵션입니다.</p>
<div class="hint-container warning">
<p class="hint-container-title">주의</p>
<p>슬롯과 범위가 지정된 슬롯(scoped slots) 모두 지원되지만, v-slot 지시문 사용을 권장합니다.</p>
</div>
<h2 id="renderercell" tabindex="-1"><a class="header-anchor" href="#renderercell"><span>rendererCell</span></a></h2>
<p>렌더러를 선택하는 선택 UI를 교체하려면 <code v-pre>rendererCell</code> 슬롯을 사용하세요.</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable-ui</span></span>
<span class="line">    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">      { color: 'blue', shape: 'circle' },</span>
<span class="line">      { color: 'red', shape: 'triangle' },</span>
<span class="line">    ]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color']<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['shape']<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>rendererCell</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-table<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 0.25rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>Table2</span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable-ui</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottableUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-pivottable"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vue-pivottable/dist/vue-pivottable.css"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottableUi<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-ui-renderercellslot-1sf5v?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_RendererCellSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<h2 id="aggregatorcell" tabindex="-1"><a class="header-anchor" href="#aggregatorcell"><span>aggregatorCell</span></a></h2>
<p>집계기를 선택하는 선택 UI를 교체하려면 이것을 사용할 수 있습니다.</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable-ui</span></span>
<span class="line">    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">      { color: 'blue', shape: 'circle' },</span>
<span class="line">      { color: 'red', shape: 'triangle' },</span>
<span class="line">    ]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color']<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['shape']<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>aggregatorCell</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-calculator<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 0.25rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>Count</span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable-ui</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottableUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-pivottable"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vue-pivottable/dist/vue-pivottable.css"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottableUi<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-ui-aggregatorcellslot-bol0q?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_AggregatorCellSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<h2 id="colgroup" tabindex="-1"><a class="header-anchor" href="#colgroup"><span>colGroup</span></a></h2>
<p><code v-pre>td.pvtAxisContainer</code>의 너비를 고정하거나, 드래그 필드가 <code v-pre>td.pvtAxisContainer</code>를 오버플로우하지 않도록 하려면 이 슬롯을 사용할 수 있습니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p><code v-pre>td.pvtAxisContainer</code>는 <strong>overflow-x:auto;</strong> 속성을 가지고 있습니다.</p>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable-ui</span></span>
<span class="line">      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">        { color: 'blue', shapeeeeeeeeeeeeeeee: 'circle' },</span>
<span class="line">        { color: 'red', shapeeeeeeeeeeeeeeee: 'triangle' },</span>
<span class="line">      ]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color', 'shapeeeeeeeeeeeeeeee']<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>rendererCell</span><span class="token punctuation">></span></span>Table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>aggregatorCell</span><span class="token punctuation">></span></span>Count<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>colGroup</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>colGroup</span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colGroupFirstWidth<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>colGroup</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>colGroup</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>colGroup</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable-ui</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>colGroupFirstWidth: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colGroupFirstWidth<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottableUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-pivottable"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vue-pivottable/dist/vue-pivottable.css"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottableUi<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">colGroupFirstWidth</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-ui-colgroupslot-9k8uv?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_ColGroupSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<h2 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>output</span></a></h2>
<p>이것은 <code v-pre>td.pvtOutput</code> 영역을 대체하는 슬롯입니다.</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable-ui</span></span>
<span class="line">      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">        { color: 'blue', shape: 'circle' },</span>
<span class="line">        { color: 'red', shape: 'triangle' },</span>
<span class="line">      ]<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color']<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['shape']<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>output</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loaded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line highlighted">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>로딩 중...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable-ui</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-sm btn-secondary mt-1<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loaded<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reload<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-redo mr-25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line">      다시 로드</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottableUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-pivottable"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"vue-pivottable/dist/vue-pivottable.css"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottableUi<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">loaded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-ui-outputslot-nct9t?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_OutputSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div></template>


