<template><div><h1 id="props-참조" tabindex="-1"><a class="header-anchor" href="#props-참조"><span>Props 참조</span></a></h1>
<h2 id="기본-props" tabindex="-1"><a class="header-anchor" href="#기본-props"><span>기본 Props</span></a></h2>
<p><code v-pre>vue-pivottable</code>와 <code v-pre>vue-pivottable-ui</code> 모두를 지원하는 Props입니다.</p>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code> || <code v-pre>Object</code></li>
<li>기본값: <code v-pre>undefined</code></li>
<li><strong>필수</strong></li>
</ul>
<p>요약할 데이터</p>
<p><a href="https://codesandbox.io/s/vue-pivottable-base-qhqoz" target="_blank" rel="noopener noreferrer">라이브 예제</a></p>
<h3 id="vals" tabindex="-1"><a class="header-anchor" href="#vals"><span>vals</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>집계기의 인수로 사용되는 속성 이름(집계 함수 생성에 전달됨)</p>
<p><a href="https://codesandbox.io/embed/vue-pivottable-props-vals-vjqfh" target="_blank" rel="noopener noreferrer">라이브 예제</a></p>
<h3 id="cols" tabindex="-1"><a class="header-anchor" href="#cols"><span>cols</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>열 영역에 미리 채울 속성 이름</p>
<h3 id="rows" tabindex="-1"><a class="header-anchor" href="#rows"><span>rows</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>행 영역에 미리 채울 속성 이름</p>
<h3 id="rowtotal" tabindex="-1"><a class="header-anchor" href="#rowtotal"><span>rowTotal</span></a></h3>
<ul>
<li>타입: <code v-pre>Boolean</code></li>
<li>기본값: <code v-pre>true</code></li>
</ul>
<p>행의 합계 표시 여부</p>
<h3 id="coltotal" tabindex="-1"><a class="header-anchor" href="#coltotal"><span>colTotal</span></a></h3>
<ul>
<li>타입: <code v-pre>Boolean</code></li>
<li>기본값: <code v-pre>true</code></li>
</ul>
<p>열의 합계 표시 여부</p>
<h3 id="aggregators" tabindex="-1"><a class="header-anchor" href="#aggregators"><span>aggregators</span></a></h3>
<ul>
<li>타입: <code v-pre>Object</code></li>
<li>기본값: <code v-pre>Utilities</code>의 <code v-pre>aggregators</code></li>
</ul>
<p>드롭다운에서 집계 함수의 생성기 사전 (<a href="https://github.com/nicolaskruchten/pivottable/wiki/Aggregators" target="_blank" rel="noopener noreferrer">원본 PivotTable.js 문서</a> 참조)</p>
<h3 id="aggregatorname" tabindex="-1"><a class="header-anchor" href="#aggregatorname"><span>aggregatorName</span></a></h3>
<ul>
<li>타입: <code v-pre>String</code></li>
<li>기본값: <code v-pre>Count</code></li>
</ul>
<p>계산에 사용할 집계기를 지정하는 <code v-pre>aggregators</code> 객체의 키</p>
<h3 id="renderername" tabindex="-1"><a class="header-anchor" href="#renderername"><span>rendererName</span></a></h3>
<ul>
<li>타입: <code v-pre>String</code></li>
<li>기본값: <code v-pre>Table</code></li>
</ul>
<p>사용할 렌더러를 지정하는 렌더러 객체의 키</p>
<h3 id="valuefilter" tabindex="-1"><a class="header-anchor" href="#valuefilter"><span>valueFilter</span></a></h3>
<ul>
<li>타입: <code v-pre>Object</code></li>
<li>기본값: <code v-pre>{}</code></li>
</ul>
<p>키가 속성 이름이고 값이 계산 및 렌더링에서 포함하거나 제외할 레코드를 나타내는 속성값-불리언 쌍의 객체인 객체; 더블 클릭시 나타나는 필터 메뉴를 미리 채우는 데 사용됨</p>
<h3 id="sorters" tabindex="-1"><a class="header-anchor" href="#sorters"><span>sorters</span></a></h3>
<ul>
<li>타입: <code v-pre>Function or Object</code></li>
<li>기본값: <code v-pre>{}</code></li>
</ul>
<p>속성 이름으로 접근하거나 호출되며 출력 목적으로 array.sort의 인수로 사용할 수 있는 함수를 반환할 수 있음</p>
<h3 id="derivedattributes" tabindex="-1"><a class="header-anchor" href="#derivedattributes"><span>derivedAttributes</span></a></h3>
<ul>
<li>타입: <code v-pre>Object</code></li>
<li>기본값: <code v-pre>{}</code></li>
</ul>
<p>파생 속성을 정의함</p>
<h3 id="roworder" tabindex="-1"><a class="header-anchor" href="#roworder"><span>rowOrder</span></a></h3>
<ul>
<li>타입: <code v-pre>String</code></li>
<li>기본값: <code v-pre>key_a_to_z</code></li>
</ul>
<p>행 데이터가 렌더러에 제공되는 순서, <code v-pre>&quot;key_a_to_z&quot;</code>, <code v-pre>&quot;value_a_to_z&quot;</code>, <code v-pre>&quot;value_z_to_a&quot;</code> 중 하나여야 함, 값으로 정렬하면 행 합계로 정렬됨</p>
<h3 id="colorder" tabindex="-1"><a class="header-anchor" href="#colorder"><span>colOrder</span></a></h3>
<ul>
<li>타입: <code v-pre>String</code></li>
<li>기본값: <code v-pre>key_a_to_z</code></li>
</ul>
<p>열 데이터가 렌더러에 제공되는 순서, <code v-pre>&quot;key_a_to_z&quot;</code>, <code v-pre>&quot;value_a_to_z&quot;</code>, <code v-pre>&quot;value_z_to_a&quot;</code> 중 하나여야 함, 값으로 정렬하면 열 합계로 정렬됨</p>
<h3 id="tablemaxwidth" tabindex="-1"><a class="header-anchor" href="#tablemaxwidth"><span>tableMaxWidth</span></a></h3>
<ul>
<li>타입: <code v-pre>Number</code></li>
<li>기본값: <code v-pre>0</code></li>
</ul>
<p>테이블 스타일의 max-width 값</p>
<h3 id="tablecolorscalegenerator" tabindex="-1"><a class="header-anchor" href="#tablecolorscalegenerator"><span>tableColorScaleGenerator</span></a></h3>
<ul>
<li>타입: <code v-pre>Function</code></li>
<li>기본값: <code v-pre>undefined</code></li>
</ul>
<p><code v-pre>Table Heatmap</code>을 위한 사용자 정의 색상 렌더 생성</p>
<h3 id="locales-deprecated" tabindex="-1"><a class="header-anchor" href="#locales-deprecated"><span>locales <sup style="color:#c92222;">deprecated</sup></span></a></h3>
<ul>
<li>타입: <code v-pre>Object</code></li>
<li>기본값: <a href="/guide/utilities.html#locales" target="_blank" rel="noopener noreferrer">utilities 참조</a></li>
</ul>
<p>localeStrings는 더 이상 사용되지 않으며, locales로 대체되었습니다.</p>
<h2 id="pivottable-ui-props" tabindex="-1"><a class="header-anchor" href="#pivottable-ui-props"><span>Pivottable UI Props</span></a></h2>
<p><code v-pre>vue-pivottable-ui</code>만 지원하는 Props입니다.</p>
<h3 id="hiddenattributes" tabindex="-1"><a class="header-anchor" href="#hiddenattributes"><span>hiddenAttributes</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>UI에서 생략할 속성 이름을 포함</p>
<h3 id="hiddenfromaggregators" tabindex="-1"><a class="header-anchor" href="#hiddenfromaggregators"><span>hiddenFromAggregators</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>집계기 인수 드롭다운에서 생략할 속성 이름을 포함</p>
<h3 id="hiddenfromdragdrop" tabindex="-1"><a class="header-anchor" href="#hiddenfromdragdrop"><span>hiddenFromDragDrop</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>집계기 인수 드롭다운에서 생략할 속성 이름을 포함</p>
<h3 id="sortonlyfromdragdrop" tabindex="-1"><a class="header-anchor" href="#sortonlyfromdragdrop"><span>sortonlyFromDragDrop</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>UI의 드래그 앤 드롭에서 정렬만 가능한 속성 이름을 포함</p>
<h3 id="disabledfromdragdrop" tabindex="-1"><a class="header-anchor" href="#disabledfromdragdrop"><span>disabledFromDragDrop</span></a></h3>
<ul>
<li>타입: <code v-pre>Array</code></li>
<li>기본값: <code v-pre>[]</code></li>
</ul>
<p>UI의 드래그 앤 드롭 부분에서 비활성화할 속성 이름을 포함</p>
<h3 id="menulimit" tabindex="-1"><a class="header-anchor" href="#menulimit"><span>menuLimit</span></a></h3>
<ul>
<li>타입: <code v-pre>Number</code></li>
<li>기본값: <code v-pre>500</code></li>
</ul>
<p>더블 클릭 메뉴에 나열할 최대 값 수</p>
<h3 id="rowlimit" tabindex="-1"><a class="header-anchor" href="#rowlimit"><span>rowLimit</span></a></h3>
<ul>
<li>타입: <code v-pre>Number</code></li>
<li>기본값: <code v-pre>0</code></li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">경고</p>
<p>rowLimit은 더 이상 사용되지 않습니다.</p>
</div>
<h3 id="collimit" tabindex="-1"><a class="header-anchor" href="#collimit"><span>colLimit</span></a></h3>
<ul>
<li>타입: <code v-pre>Number</code></li>
<li>기본값: <code v-pre>0</code></li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">경고</p>
<p>colLimit은 더 이상 사용되지 않습니다.</p>
</div>
</div></template>


