<template>
  <div id="app">
      <vue-pivottable-ui>
        <table class="pvtUi">
          <tbody>
            <tr>
              <td class="pvtRenderers">
                <select class="pvtDropdown">
                  <option value="">Table Heatmap</option>
                </select>
              </td>
              <td class="pvtAxisContainer pvtUnused pvtHorizList">
                  <li data-id="reservedinstancesid">
                    <span class="pvtAttr">
                      Payer Gender
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="Payer Smoker">
                    <span class="pvtAttr">
                      Payer Smoker
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="Day of Week">
                    <span class="pvtAttr">
                      Day of Week
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="Meal">
                    <span class="pvtAttr">
                      Meal
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
              </td>
            </tr>
            <tr>
              <td class="pvtVals">
                <div>
                  <select class="pvtDropdown" style="display:inline-block;">
                    <option value="">Sum over Sum</option>
                  </select>
                  <a role="button" class="pvtRowOrder">↕</a>
                  <a role="button" class="pvtColOrder">↔</a>
                </div>
                <select class="pvtDropdown">
                  <option value="">Tip</option>
                </select>
                <select class="pvtDropdown">
                  <option value="">Total Bill</option>
                </select>
              </td>
              <td class="pvtAxisContainer pvtHorizList pvtCols">
                <li data-id="Party Size">
                  <span class="pvtAttr ">
                    Party Size
                    <span class="pvtTriangle"> ▾</span>
                  </span>
                  <!-- Filter Box -->
                  <div class="pvtFilterBox" style="touch-action: none; display: block; cursor: initial; z-index: 1117; transform: translate(0px, 0px);">
                    <div class="pvtSearchContainer">
                      <input type="text" placeholder="Filter values" class="pvtSearch" value="">
                      <a class="pvtCloseX">×</a>
                      <a role="button" class="pvtButton">Select All</a>
                      <a role="button" class="pvtButton">Deselect All</a>
                    </div>
                    <div class="pvtCheckContainer">
                      <p>
                        <input type="checkbox" value="Thursday">Thursday
                        <a href="javascript:;" class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>
                      </p>
                      <p class="selected">
                        <input type="checkbox" value="Friday" checked="checked">Friday
                        <a href="javascript:;" class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>
                      </p>
                      <p>
                        <input type="checkbox" value="Saturday">Saturday
                        <a href="javascript:;" class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>
                      </p>
                    </div>
                  </div>
                  <!-- Filter Box End -->
                </li>
              </td>
            </tr>
            <tr>
              <td class="pvtAxisContainer pvtVertList pvtRows">
                <li data-id="Payer Gender">
                  <span class="pvtAttr ">
                    Payer Gender
                    <span class="pvtTriangle"> ▾</span>
                  </span>
                </li>
              </td>
              <td class="pvtOutput">
                <vue-pivottable
                    :data="pivotData"
                    :rows="['Payer Gender']"
                    :cols="['Party Size']"
                    aggregatorName="Sum over Sum"
                    :vals="['Tip', 'Total Bill']"
                    rendererName="Heatmap"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </vue-pivottable-ui>
  </div>
</template>

<script>
// 'Total Bill', 'Tip', 'Payer Gender', 'Payer Smoker', 'Day of Week', 'Meal', 'Party Size'
import tips from './tips'
export default {
  name: 'app',
  data () {
    return {
      pivotData: tips
    }
  }
}
</script>

<style>

</style>
