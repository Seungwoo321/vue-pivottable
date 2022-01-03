# Locale

## How to use?

The default `locales` is defined in /src/helper/utils.js .

```js
const locales = {
  en: {
    aggregators,
    localeStrings: {
      renderError: 'An error occurred rendering the PivotTable results.',
      computeError: 'An error occurred computing the PivotTable results.',
      uiRenderError: 'An error occurred rendering the PivotTable UI.',
      selectAll: 'Select All',
      selectNone: 'Select None',
      tooMany: '(too many to list)',
      filterResults: 'Filter values',
      totals: 'Totals',
      vs: 'vs',
      by: 'by'
    }
  }
}
export {
  locales
}
```

If you want to add a new language add both `locale` and `locales` props.

```js
import { PivotUtilities } from "vue-pivottable";

const locales = {
  en: PivotUtilities.locales.en,
  ko: {
    aggregators: PivotUtilities.aggregators,
    localeStrings: {
      renderError:
        "피벗 테이블 결과를 렌더링하는 동안 오류가 발생 했습니다.",
      computeError:
        "피벗 테이블 결과를 계산하는 동안 오류가 발생 했습니다.",
      uiRenderError:
        "피벗 테이블 UI를 렌더링하는 동안 오류가 발생 했습니다.",
      selectAll: "모두 선택",
      selectNone: "선택 안함",
      tooMany: "표시 할 값이 너무 많습니다.",
      filterResults: "값 필터링",
      totals: "합계",
      only: "단독",
      vs: "vs",
      by: "by",
    },
  },
}

const locale = 'en' // or 'ko'

```

## Example

<iframe src="https://codesandbox.io/embed/vue-pivottable-locales-m13c7?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-locales"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
