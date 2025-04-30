
# Styling

## How to Styling?

This is very simple. Import the style from the dist and then define a new style.

## Example

### Bootstrap v5.2.2

<iframe
  src="https://codesandbox.io/embed/vue-pivottable-bootstrap-style-8qn2vc?fontsize=14&hidenavigation=1&theme=light&view=preview"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="vue-pivottable-bootstrap-style"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vrxr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
>
</iframe>

::: details

```css

* {
  box-sizing: border-box
}

/* pvtUi */
table.pvtUi {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  vertical-align: top;
  border: 1px solid #dee2e6;
} 
table.pvtUi > :not(caption)> * > * {
  border: 1px solid #dee2e6;
}
table.pvtUi td {
  padding: 0.5rem 0.5rem;
  overflow-x: auto;
}
table.pvtUi > tbody > tr:nth-child(2) > :nth-child(2),
table.pvtUi > tbody > tr:nth-child(3) > :nth-child(1) {
  background-color: rgba(0, 0, 0, 0.05);
}
table.pvtUi > tbody td:nth-child(1) {
  width: 25%;
}

/* pvtUi selector */
.pvtUi .pvtDropdown {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  transition:
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
  appearance: none;
  outline: none;
}

/* pvtUi selector */
.pvtUi .pvtVals :first-child {
  display: flex;
}
.pvtUi .pvtVals .pvtDropdown:not(:first-child) {
  margin-top: 0.5rem;
}
.pvtUi .pvtVals .pvtRowOrder,
.pvtUi .pvtVals .pvtColOrder {
  cursor: pointer;
  width: 15px;
  margin-left: 5px;
  user-select: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;  
}

/* pivot Axis Container */
.pvtUi .pvtAxisContainer.pvtHorizList li {
  display: inline-flex;
  margin-left: .125rem;
  flex-wrap: wrap;
}
.pvtUi .pvtAxisContainer.pvtVertList.pvtRows {
  vertical-align: top;
}
.pvtUi .pvtAxisContainer.pvtVertList.pvtRows li {
  display: flex;
  margin-bottom: .125rem;
}
.pvtUi .pvtAxisContainer li {
  align-items: stretch;
  list-style-type: none;
  cursor: move;
}
.pvtUi .pvtAxisContainer li .pvtAttr {
  background-color: #0d6efd;
  color: #fff;
  padding: 0.35em 0.65em;
  white-space: nowrap;
  border-radius: 0.375rem;
  user-select: none;
}
.pvtUi .pvtAxisContainer li .pvtAttr:hover:not(.disabled, .sortonly) {
  border-color: #0a58ca;
  background-color: #0b5ed7;
}
.pvtUi .pvtAxisContainer li .pvtAttr.disabled {
  opacity: 0.65;
  cursor: default;
}
.pvtUi .pvtAxisContainer li .pvtAttr.sortonly {
  border: 1px solid #0d6efd;
  color: #0d6efd;
  background-color: #fff;
}
.pvtUi .pvtAxisContainer li .pvtAttr .pvtFilterBox {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  z-index: 1;
  background-color: #fff;
  user-select: none;
  border: 1px solid #dee2e6;
  max-width: 600px;
  min-width: 210px;
  min-height: 100px;;
  color: #000;
  padding: 12px 8px;
}

/* pvtFilterBox */
.sortable-chosen .pvtFilterBox {
  display: none !important;
}
.pvtFilterBox .pvtSearchContainer .pvtSearch {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}
.pvtFilterBox .pvtSearchContainer .pvtButton:not(:last-child) {
  border-radius: 0;
}
.pvtFilterBox .pvtSearchContainer .pvtButton:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
}

/* pvtTable */
table.pvtTable {
  width: 100%;
  color: #212529;
  border-color: #dee2e6;
  border-collapse: collapse;
}
table.pvtTable thead,
table.pvtTable tbody,
table.pvtTable tr,
table.pvtTable td,
table.pvtTable th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
table.pvtTable > :not(caption)> * > * {
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px transparent;
}
table.pvtTable thead {
  vertical-align: bottom;
}
table.pvtTable tbody {
  vertical-align: inherit;
}
table.pvtTable th {
  font-weight: bold;
}

/* pvtCheckContainer */
.pvtCheckContainer p {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: .125rem;
}
.pvtCheckContainer p:not(:first-child) {
  margin-top: .125rem;
}
.pvtCheckContainer p:last-child {
  margin-bottom: 0;
}
.pvtCheckContainer p input[type="checkbox"] {
  border-radius: .25em;
  float: left;
  margin-left: -1.5em;
  width: 1em;
  height: 1em;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, .25);
  background-color: #fff;
  background-position: center;
  background-size: contain;
  appearance: none;
}
.pvtCheckContainer p.selected input[type="checkbox"] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.pvtCheckContainer p .pvtOnly {
  cursor: pointer;
  position: absolute;
  right: .75rem;
  color: #0d6efd;
  font-size: 1rem;
  font-weight: 400;
  background-color: transparent;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
}
.pvtCheckContainer .pvtOnly:hover {
  color: #0a58ca;
}

/* pvtSearch */
.pvtSearch {
  padding: .375rem .75rem;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  outline: none;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
}

/* pvtButton */
.pvtButton {
  padding: .375rem .75rem;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 400;
  background-color: transparent;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  border: 1px solid #6c757d;
  border-radius: 0.375rem;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
}
.pvtButton:hover,
.pvtButton:active {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

/* pvtTriangle */
.pvtTriangle {
  cursor: pointer;
  color: #fff;
}

/* pvtFilteredAttribute */
.pvtFilteredAttribute {
  font-style: italic;
}

/* pvtFilterTextClear */
.pvtFilterTextClear {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
}
/* media css */
@media screen and (max-width:576px) {
  .pvtRenderers {
    width: 100%;
  }

  .pvtAxisContainer {
    display: none;
  }
}
@media screen and (width: 768px) {
  .pvtRenderers {
    width: 40%;
  }
}
```

:::

### Vuexy UI Template (bootstrap based)

- <https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-3/table/bs-table>

<iframe
  src="https://codesandbox.io/embed/vue-pivottable-vuexy-style-1evibo?fontsize=14&hidenavigation=1&theme=light&view=preview"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="vue-pivottable-vuexy-style"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vrxr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

::: details

```css
* {
  box-sizing: border-box;
  line-height: 1.15;
}
body {
  font-size: 1rem;
  line-height: 1.45;
}
/* pvtUi */
table.pvtUi {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-weight: 400;
  vertical-align: top;
  border: 1px solid #6e6b7b;
  color: #6e6b7b;
}
table.pvtUi td {
  padding: 0.75rem;
  overflow-x: auto;
}
table.pvtUi>tbody td:nth-child(1) {
  width: 25%;
}

/* pvtUi selector */
.pvtUi .pvtDropdown {
  user-select: none;
  margin: 0;
  border: 1px solid #d8d6de;
  border-radius: .357rem;
  background-color: inherit;
  background-color: inherit;
  background-position: calc(100% - 12px) 13px, calc(100% - 20px) 13px, 100% 0;
  background-size: 18px 14px, 18px 14px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d8d6de' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  appearance: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  height: 2.714rem;
  vertical-align: middle;
  color: #6e6b7b;
  width: 100%;
  padding: 0.438rem 2rem 0.438rem 1rem;
}
.pvtUi .pvtVals :first-child {
  display: flex;
}
.pvtAxisContainer,
.pvtVals,
td.pvtOutput {
  border: 1px solid #ebe9f1;
}

.pvtFilteredAttribute {
  font-style: italic;
}

.pvtFilterTextClear {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
}

.pvtTriangle {
  cursor: pointer;
  font-size: 18px;
  color: #7367f0;
}

.pvtOnly {
  display: block;
  width: 35px;
  float: right;
  font-size: 12px;
  padding-left: 5px;
  cursor: pointer;
}

.pvtOnlySpacer {
  display: block;
  width: 35px;
  float: right;
}

/* pvtTable */
table.pvtTable {
  background-color: transparent;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-size: .857rem;
}
table.pvtTable thead tr th {
  vertical-align: top;
  text-transform: uppercase;
  font-size: 0.857rem;
  letter-spacing: 0.5px;
  background-color: #f3f2f7;
}
table.pvtTable thead tr th,
table.pvtTable tbody tr th,
table.pvtTable tbody tr td {
  border: 1px solid #ebe9f1;
  padding: .3rem .5rem;
}

table.pvtTable tbody tr td {
  vertical-align: top;
  text-align: right;
}
table.pvtTable .pvtColLabel {
  text-align: center;
}
table.pvtTable .pvtTotalLabel {
  text-align: right;
}
.pvtTotal,
.pvtGrandTotal {
  font-weight: bold;
}
.pvtRowOrder,
.pvtColOrder {
  cursor: pointer;
  width: 15px;
  margin-left: 5px;
  display: inline-block;
  user-select: none;
  text-decoration: none !important;
}
.pvtAxisContainer,
.pvtVals {
  padding: 5px;
  min-width: 20px;
  min-height: 20px;
}
.pvtVals {
  white-space: nowrap;
  vertical-align: top;
}
.pvtVals div {
  padding-bottom: 5px;
}
.pvtVals.pvtText {
  vertical-align: middle;
  font-size: 15px;
  font-weight: bold;
  user-select: none;
  text-align: start;
}
.pvtRenderers {
  border: 1px solid #ebe9f1;
  user-select: none;
}

/* pvtAxisContainer */
.pvtAxisContainer li {
  margin-bottom: 6px;
  padding: 8px 3px;
  list-style-type: none;
  cursor: move;
}
.pvtAxisContainer li.pvtPlaceholder {
  border-radius: 5px;
  border: 1px dashed #a2b1c6;
}
.pvtAxisContainer li.pvtPlaceholder span.pvtAttr {
  display: none;
}
.pvtAxisContainer li span.pvtAttr {
  box-shadow: none;
  font-weight: 500;
  padding: 0.786rem 1.5rem;
  white-space: nowrap;
  border-radius: 0.25rem;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px dashed #7367f0;
  border-radius: 0.25rem;
  color: #7367f0;
}
.pvtAxisContainer li span.pvtAttr.disabled {
  cursor: not-allowed;
}
.pvtHorizList li {
  display: inline-block;
}
.pvtVertList {
  vertical-align: top;
}

/* pvtFilterBox */
.sortable-chosen .pvtFilterBox {
  display: none;
}
.pvtFilterBox input {
  border: 1px solid #ebe9f1;
  border-radius: 5px;
  color: #506784;
  padding: 0 3px;
  font-size: 14px;
}
.pvtFilterBox input:focus {
  border-color: #7367f0;
  outline: none;
}
.pvtFilterBox {
  background-color: #f8f8f8;
  z-index: 100;
  color: #6e6b7b;
  border: 1px solid #ebe9f1;
  max-width: 600px;
  min-width: 210px;
  position: absolute;
  padding: 6px;
  user-select: none;
  min-height: 100px;
}
.pvtFilterBox .pvtButton {
  display: inline-block;
  user-select: none;
  padding: 0.8rem 2rem;
  padding-right: calc(2rem / 1.75);
  padding-left: calc(2rem / 1.75);
  border-radius: 0.358rem;
  text-decoration: none;
  border: 1px solid #ebe9f1;
}
.pvtFilterBox input[type='text'] {
  outline: none;
  display: block;
  width: 100%;
  border-radius: .375rem;
  border-color: #ebe9f1;
  margin-bottom: 5px;
  padding: .438rem 1rem
}

/* pvtSearchContainer */
.pvtSearchContainer a:nth-child(3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.pvtSearchContainer a:nth-child(4) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
}

/* pvtCheckContainer */
.pvtCheckContainer {
  text-align: left;
  font-size: 14px;
  white-space: nowrap;
  overflow: scroll;
  width: 100%;
  max-height: 30vh;
}
.pvtCheckContainer p {
  margin: 0 0 1px 0;
  padding: 3px;
  cursor: default;
}

.pvtCheckContainer p input[type="checkbox"] {
  margin-right: 0.5rem;
}

.pvtCheckContainer p.selected {
  min-width: 100%;
  width: max-content;
}

.pvtCheckContainer p:hover.pvtOnly {
  display: block;
}

.pvtCheckContainer p:hover.pvtOnlySpacer {
  display: none;
}
```

:::
