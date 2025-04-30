<template><div><h1 id="언어-설정" tabindex="-1"><a class="header-anchor" href="#언어-설정"><span>언어 설정</span></a></h1>
<h2 id="사용-방법" tabindex="-1"><a class="header-anchor" href="#사용-방법"><span>사용 방법</span></a></h2>
<p>기본 <code v-pre>locales</code>는 /src/helper/utils.js 파일에 정의되어 있습니다.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> locales <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    aggregators<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">localeStrings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">renderError</span><span class="token operator">:</span> <span class="token string">'An error occurred rendering the PivotTable results.'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">computeError</span><span class="token operator">:</span> <span class="token string">'An error occurred computing the PivotTable results.'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">uiRenderError</span><span class="token operator">:</span> <span class="token string">'An error occurred rendering the PivotTable UI.'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">selectAll</span><span class="token operator">:</span> <span class="token string">'Select All'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">selectNone</span><span class="token operator">:</span> <span class="token string">'Select None'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">tooMany</span><span class="token operator">:</span> <span class="token string">'(too many to list)'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filterResults</span><span class="token operator">:</span> <span class="token string">'Filter values'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">totals</span><span class="token operator">:</span> <span class="token string">'Totals'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">vs</span><span class="token operator">:</span> <span class="token string">'vs'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">by</span><span class="token operator">:</span> <span class="token string">'by'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">  locales</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>새로운 언어를 추가하려면 <code v-pre>locale</code>과 <code v-pre>locales</code> 속성을 모두 설정해야 합니다.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PivotUtilities <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-pivottable"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> locales <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">en</span><span class="token operator">:</span> PivotUtilities<span class="token punctuation">.</span>locales<span class="token punctuation">.</span>en<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">ko</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">aggregators</span><span class="token operator">:</span> PivotUtilities<span class="token punctuation">.</span>aggregators<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">localeStrings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">renderError</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">"피벗 테이블 결과를 렌더링하는 동안 오류가 발생 했습니다."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">computeError</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">"피벗 테이블 결과를 계산하는 동안 오류가 발생 했습니다."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">uiRenderError</span><span class="token operator">:</span></span>
<span class="line">        <span class="token string">"피벗 테이블 UI를 렌더링하는 동안 오류가 발생 했습니다."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">selectAll</span><span class="token operator">:</span> <span class="token string">"모두 선택"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">selectNone</span><span class="token operator">:</span> <span class="token string">"선택 안함"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">tooMany</span><span class="token operator">:</span> <span class="token string">"표시 할 값이 너무 많습니다."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filterResults</span><span class="token operator">:</span> <span class="token string">"값 필터링"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">totals</span><span class="token operator">:</span> <span class="token string">"합계"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">only</span><span class="token operator">:</span> <span class="token string">"단독"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">vs</span><span class="token operator">:</span> <span class="token string">"vs"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">by</span><span class="token operator">:</span> <span class="token string">"by"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token string">'en'</span> <span class="token comment">// or 'ko'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="예제" tabindex="-1"><a class="header-anchor" href="#예제"><span>예제</span></a></h2>
<iframe src="https://codesandbox.io/embed/vue-pivottable-locales-m13c7?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-locales"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div></template>


