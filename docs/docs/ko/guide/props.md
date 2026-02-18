---
sidebarDepth: 3
---

# Props 참조

## 기본 Props

`vue-pivottable`와 `vue-pivottable-ui` 모두를 지원하는 Props입니다.

### data

* 타입: `Array` || `Object`
* 기본값: `undefined`
* **필수**

요약할 데이터

[라이브 예제](https://codesandbox.io/s/vue-pivottable-base-qhqoz)

### vals

* 타입: `Array`
* 기본값: `[]`

집계기의 인수로 사용되는 속성 이름(집계 함수 생성에 전달됨)

[라이브 예제](https://codesandbox.io/embed/vue-pivottable-props-vals-vjqfh)

### cols

* 타입: `Array`
* 기본값: `[]`

열 영역에 미리 채울 속성 이름

### rows

* 타입: `Array`
* 기본값: `[]`

행 영역에 미리 채울 속성 이름

### rowTotal

* 타입: `Boolean`
* 기본값: `true`

행의 합계 표시 여부

### colTotal

* 타입: `Boolean`
* 기본값: `true`

열의 합계 표시 여부

### aggregators

* 타입: `Object`
* 기본값: `Utilities`의 `aggregators`

드롭다운에서 집계 함수의 생성기 사전 ([원본 PivotTable.js 문서](https://github.com/nicolaskruchten/pivottable/wiki/Aggregators) 참조)

### aggregatorName

* 타입: `String`
* 기본값: `Count`

계산에 사용할 집계기를 지정하는 `aggregators` 객체의 키

### rendererName

* 타입: `String`
* 기본값: `Table`

사용할 렌더러를 지정하는 렌더러 객체의 키

### valueFilter

* 타입: `Object`
* 기본값: `{}`

키가 속성 이름이고 값이 계산 및 렌더링에서 포함하거나 제외할 레코드를 나타내는 속성값-불리언 쌍의 객체인 객체; 더블 클릭시 나타나는 필터 메뉴를 미리 채우는 데 사용됨

### sorters

* 타입: `Function or Object`
* 기본값: `{}`

속성 이름으로 접근하거나 호출되며 출력 목적으로 array.sort의 인수로 사용할 수 있는 함수를 반환할 수 있음

### derivedAttributes

* 타입: `Object`
* 기본값: `{}`

파생 속성을 정의함

### rowOrder

* 타입: `String`
* 기본값: `key_a_to_z`

행 데이터가 렌더러에 제공되는 순서, `"key_a_to_z"`, `"value_a_to_z"`, `"value_z_to_a"` 중 하나여야 함, 값으로 정렬하면 행 합계로 정렬됨

### colOrder

* 타입: `String`
* 기본값: `key_a_to_z`

열 데이터가 렌더러에 제공되는 순서, `"key_a_to_z"`, `"value_a_to_z"`, `"value_z_to_a"` 중 하나여야 함, 값으로 정렬하면 열 합계로 정렬됨

### tableMaxWidth

* 타입: `Number`
* 기본값: `0`

테이블 스타일의 max-width 값

### tableColorScaleGenerator

* 타입: `Function`
* 기본값: `undefined`

`Table Heatmap`을 위한 사용자 정의 색상 렌더 생성

### locales <sup style="color:#c92222;">deprecated</sup>

* 타입: `Object`
* 기본값: [utilities 참조](/guide/utilities.html#locales)

localeStrings는 더 이상 사용되지 않으며, locales로 대체되었습니다.

## Pivottable UI Props

`vue-pivottable-ui`만 지원하는 Props입니다.

### hiddenAttributes

* 타입: `Array`
* 기본값: `[]`

UI에서 생략할 속성 이름을 포함

### hiddenFromAggregators

* 타입: `Array`
* 기본값: `[]`

집계기 인수 드롭다운에서 생략할 속성 이름을 포함

### hiddenFromDragDrop

* 타입: `Array`
* 기본값: `[]`

집계기 인수 드롭다운에서 생략할 속성 이름을 포함

### sortonlyFromDragDrop

* 타입: `Array`
* 기본값: `[]`

UI의 드래그 앤 드롭에서 정렬만 가능한 속성 이름을 포함

### disabledFromDragDrop

* 타입: `Array`
* 기본값: `[]`

UI의 드래그 앤 드롭 부분에서 비활성화할 속성 이름을 포함

### menuLimit

* 타입: `Number`
* 기본값: `500`

더블 클릭 메뉴에 나열할 최대 값 수

### config <sup style="color:#42b983">0.4.69+에서 새로 추가</sup>

* 타입: `Object`
* 기본값: `{}`

v-model 지원을 위한 설정 객체입니다. 이 prop을 사용하여 피벗 테이블의 전체 상태를 저장하고 복원할 수 있습니다. 제공된 경우 config 값이 개별 props보다 우선합니다.

```html
<vue-pivottable-ui
  v-model="pivotConfig"
  :data="data"
/>
```

```js
// 설정 저장
const savedConfig = this.pivotConfig

// 설정 복원
this.pivotConfig = savedConfig
```

config 객체에 포함될 수 있는 값:
- `rows`: 행 속성 이름 배열
- `cols`: 열 속성 이름 배열
- `vals`: 값 속성 이름 배열
- `aggregatorName`: 문자열
- `rendererName`: 문자열
- `rowOrder`: 'key_a_to_z' | 'value_a_to_z' | 'value_z_to_a'
- `colOrder`: 'key_a_to_z' | 'value_a_to_z' | 'value_z_to_a'
- `valueFilter`: 객체

### rowLimit

* 타입: `Number`
* 기본값: `0`

:::danger
rowLimit은 더 이상 사용되지 않습니다.
:::

### colLimit

* 타입: `Number`
* 기본값: `0`

:::danger
colLimit은 더 이상 사용되지 않습니다.
:::
