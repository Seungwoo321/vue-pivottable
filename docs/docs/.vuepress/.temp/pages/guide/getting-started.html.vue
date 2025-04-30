<template><div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<blockquote>
<p>⚠️ <strong>Latest version</strong> of vue-pivottable supports <strong>Vue 3</strong> only. If you're using Vue 3, please refer to the <a href="https://github.com/vue-pivottable/vue3-pivottable" target="_blank" rel="noopener noreferrer">vue3-pivottable</a> repository.</p>
</blockquote>
<h3 id="direct-download-cdn" tabindex="-1"><a class="header-anchor" href="#direct-download-cdn"><span>Direct Download / CDN</span></a></h3>
<ul>
<li>unpkg: <a href="https://unpkg.com/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js" target="_blank" rel="noopener noreferrer">https://unpkg.com/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js</a></li>
<li>jsdelivr: <a href="https://cdn.jsdelivr.net/npm/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js</a></li>
</ul>
<p>Include vue-pivottable after Vue:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vue-pivottable.umd.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>NPM</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># install in your project</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> vue-pivottable@0.4.68</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>Import and use a component.</p>
<h3 id="vue-pivottable" tabindex="-1"><a class="header-anchor" href="#vue-pivottable"><span>Vue Pivottable</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable</span></span>
<span class="line">    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color']<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['shape']<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-pivottable'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'vue-pivottable/dist/vue-pivottable.css'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottable</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-base-qhqoz?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-base"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<h3 id="vue-pivottable-ui" tabindex="-1"><a class="header-anchor" href="#vue-pivottable-ui"><span>Vue Pivottable UI</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-pivottable-ui</span></span>
<span class="line">    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['color']<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['shape']<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-pivottable-ui</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VuePivottableUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-pivottable'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'vue-pivottable/dist/vue-pivottable.css'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    VuePivottableUi</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="https://codesandbox.io/embed/vue-pivottable-ui-base-3y36u?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui-base"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div></template>


