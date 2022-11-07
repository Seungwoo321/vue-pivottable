# Utilities

```js
import { PivotUtilities } from 'vue-pivottable'
```

## numberFormat

```js
  const usFmt = PivotUtilities.numberFormat()
  const usFmtInt = PivotUtilities.numberFormat({ digitsAfterDecimal: 0 })
  const usFmtPct = PivotUtilities.numberFormat({
    digitsAfterDecimal: 1,
    scaler: 100,
    suffix: '%'
  })
```

## sortAs

```js
const sorters = function () {
  return {
    'Day of Week': PivotUtilities.sortAs(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  }
}
```

## aggregatorTemplates

Built-in Aggregators and Aggregator Templates

```js
const aggregators = ((tpl) => ({
    'Count': tpl.count(usFmtInt),
    'Count Unique Values': tpl.countUnique(usFmtInt),
    'List Unique Values': tpl.listUnique(', '),
    Sum: tpl.sum(usFmt),
    'Integer Sum': tpl.sum(usFmtInt),
    'Average': tpl.average(usFmt),
    'Median': tpl.median(usFmt),
    'Sample Variance': tpl.var(1, usFmt),
    'Sample Standard Deviation': tpl.stdev(1, usFmt),
    'Minimum': tpl.min(usFmt),
    'Maximum': tpl.max(usFmt),
    'First': tpl.first(usFmt),
    'Last': tpl.last(usFmt),
    'Sum over Sum': tpl.sumOverSum(usFmt),
    'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
    'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
    'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
    'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
    'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
    'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
  })
)(PivotUtilities.aggregatorTemplates)
```

## locales

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
  },
  fr: {
    frAggregators,
    localeStrings: {
      renderError: 'Une erreur est survenue en dessinant le tableau croisé.',
      computeError: 'Une erreur est survenue en calculant le tableau croisé.',
      uiRenderError: "Une erreur est survenue en dessinant l'interface du tableau croisé dynamique.",
      selectAll: 'Sélectionner tout',
      selectNone: 'Ne rien sélectionner',
      tooMany: '(trop de valeurs à afficher)',
      filterResults: 'Filtrer les valeurs',
      totals: 'Totaux',
      vs: 'sur',
      by: 'par',
      apply: 'Appliquer',
      cancel: 'Annuler'
    }
  }
}
```
