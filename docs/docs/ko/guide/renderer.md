# 렌더러

## 사용법

사용자 정의 `renderer` 함수를 정의하고 props로 전달하기만 하면 됩니다.

## plotly 렌더러 <sup style="color:#42b983">0.4.6+에서 새로 추가</sup>

vue-pivottable에 plotly-renderer가 더 이상 포함되어 있지 않지만, 다음과 같이 사용할 수 있습니다:

### 설치

```bash
npm install @vue-pivottable/plotly-renderer
```

### SFC

```js
import PlotlyRenderer from '@vue-pivottable/plotly-renderer'

const renderer = (() => ({
  'Grouped Column Chart': PlotlyRenderer['Grouped Column Chart'],
  'Stacked Column Chart': PlotlyRenderer['Stacked Column Chart'],
  'Grouped Bar Chart': PlotlyRenderer['Grouped Bar Chart'],
  'Stacked Bar Chart': PlotlyRenderer['Stacked Bar Chart'],
  'Line Chart': PlotlyRenderer['Line Chart'],
  'Dot Chart': PlotlyRenderer['Dot Chart'],
  'Area Chart': PlotlyRenderer['Area Chart'],
  'Scatter Chart': PlotlyRenderer['Scatter Chart'],
  'Multiple Pie Chart': PlotlyRenderer['Multiple Pie Chart']
}))()
```

### 브라우저

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plotly 렌더러</title>
  <link rel="stylesheet" href="https://unpkg.com/vue-pivottable@0.4.5/dist/vue-pivottable.css">
  <script src="https://unpkg.com/vue@2.6.14/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-pivottable@0.4.5/dist/vue-pivottable.umd.js"></script>
  <script src="dist/plotly-renderer.umd.js"></script>
</head>
<body>
  <div id="app">
    <vue-pivottable-ui
      :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
      renderer-name="Area Chart"
      :renderers="renderers"
      :rows="['color']"
      :cols="['shape']"
    >
    </vue-pivottable-ui>
  </div>
  <script type="text/javascript">
    Vue.use(VuePivottable.default)
    new Vue({
      el: '#app',
      computed: {
        renderers () {
          return (() => ({
            'Grouped Column Chart': PlotlyRenderer['Grouped Column Chart'],
            'Stacked Column Chart': PlotlyRenderer['Stacked Column Chart'],
            'Grouped Bar Chart': PlotlyRenderer['Grouped Bar Chart'],
            'Stacked Bar Chart': PlotlyRenderer['Stacked Bar Chart'],
            'Line Chart': PlotlyRenderer['Line Chart'],
            'Dot Chart': PlotlyRenderer['Dot Chart'],
            'Area Chart': PlotlyRenderer['Area Chart'],
            'Scatter Chart': PlotlyRenderer['Scatter Chart'],
            'Multiple Pie Chart': PlotlyRenderer['Multiple Pie Chart']
          }))()
        }
      }
    })
  </script>
</body>
</html>

```

## 스크롤 테이블 렌더러 <sup style="color:#42b983">0.4.64+에서 새로 추가</sup>

### 설치

```bash
npm install @vue-pivottable/scroll-renderer
```

### SFC

```js
import ScrollRenderer from '@vue-pivottable/scroll-renderer'

const renderer = (() => ({
  Table : ScrollRenderer.Table,
  'Table Heatmap': ScrollRenderer['Table Heatmap'],
  'Table Col Heatmap': ScrollRenderer['Table Col Heatmap'],
  'Table Row Heatmap': ScrollRenderer['Table Row Heatmap']
}))()
```

### 라이브 데모

[링크](https://jsfiddle.net/seungwoo321/nopkdha6/)

## 소계 렌더러 <sup style="color:#42b983">0.4.69+에서 새로 추가</sup>

소계 행/열과 확장/축소 기능이 있는 피벗 테이블을 렌더링합니다. [subtotal.js](https://github.com/nagarajanchinnasamy/subtotal)에서 영감을 받았습니다.

### 설치

```bash
npm install @vue-pivottable/subtotal-renderer
```

### SFC (Vue 2)

```js
import { SubtotalRenderers } from '@vue-pivottable/subtotal-renderer/vue2'
```

```html
<vue-pivottable
  :data="data"
  :rows="['category', 'subcategory', 'product']"
  :cols="['region', 'city']"
  :renderers="SubtotalRenderers"
  rendererName="Subtotal Table"
/>
```

### 기능

- 계층적 데이터에 대한 자동 소계 행/열
- 화살표 아이콘을 클릭하여 그룹 확장/축소
- clickCallback 및 labels 지원
- `subtotalOptions` prop을 통해 커스터마이징 가능

### 옵션

```html
<vue-pivottable
  :renderers="SubtotalRenderers"
  rendererName="Subtotal Table"
  :subtotalOptions="{
    rowSubtotalDisplay: { displayOnTop: false, enabled: true, hideOnExpand: false },
    colSubtotalDisplay: { displayOnTop: false, enabled: true, hideOnExpand: false },
    arrowCollapsed: '▶',
    arrowExpanded: '▼'
  }"
/>
```

## 멀티 값 렌더러 <sup style="color:#42b983">0.4.69+에서 새로 추가</sup>

열마다 다른 집계기를 사용하여 여러 값을 렌더링합니다.

### 설치

```bash
npm install @vue-pivottable/multi-value-renderer
```

### SFC (Vue 2)

```js
import { MultiValueRenderers } from '@vue-pivottable/multi-value-renderer/vue2'

// 각 값에 다른 집계기 정의
const aggregatorMap = {
  sales: 'Sum',
  quantity: 'Average',
  profit: 'Sum'
}
```

```html
<vue-pivottable
  :data="data"
  :rows="['region']"
  :cols="['product']"
  :vals="['sales', 'quantity', 'profit']"
  :renderers="MultiValueRenderers"
  rendererName="Multi Value Table"
  :aggregatorMap="aggregatorMap"
/>
```

### 기능

- 단일 피벗 테이블에 여러 값 표시
- 각 값 열에 다른 집계기 적용
- 모든 표준 테이블 기능 지원 (히트맵, 합계 등)