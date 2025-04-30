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