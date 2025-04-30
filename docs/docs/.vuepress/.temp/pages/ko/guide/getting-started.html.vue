<template><div><h1 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기"><span>시작하기</span></a></h1>
<h2 id="설치" tabindex="-1"><a class="header-anchor" href="#설치"><span>설치</span></a></h2>
<blockquote>
<p>⚠️ <strong>최신 버전</strong>의 vue-pivottable은 <strong>Vue 3</strong>만 지원합니다. Vue 3을 사용 중이라면 <a href="https://github.com/vue-pivottable/vue3-pivottable" target="_blank" rel="noopener noreferrer">vue3-pivottable</a> 저장소를 참고하세요.</p>
</blockquote>
<h3 id="직접-다운로드-cdn" tabindex="-1"><a class="header-anchor" href="#직접-다운로드-cdn"><span>직접 다운로드 / CDN</span></a></h3>
<ul>
<li>unpkg: <a href="https://unpkg.com/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js" target="_blank" rel="noopener noreferrer">https://unpkg.com/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js</a></li>
<li>jsdelivr: <a href="https://cdn.jsdelivr.net/npm/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js</a></li>
</ul>
<p>Vue 다음에 vue-pivottable을 포함하세요:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vue-pivottable.umd.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-설치" tabindex="-1"><a class="header-anchor" href="#npm-설치"><span>NPM 설치</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># install in your project</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> vue-pivottable@0.4.68</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용-방법" tabindex="-1"><a class="header-anchor" href="#사용-방법"><span>사용 방법</span></a></h2>
<p>컴포넌트를 import 하고 사용하세요.</p>
<h3 id="vue-pivottable-사용-예시" tabindex="-1"><a class="header-anchor" href="#vue-pivottable-사용-예시"><span>Vue Pivottable 사용 예시</span></a></h3>
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
<h3 id="vue-pivottable-ui-사용-예시" tabindex="-1"><a class="header-anchor" href="#vue-pivottable-ui-사용-예시"><span>Vue Pivottable UI 사용 예시</span></a></h3>
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


