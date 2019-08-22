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
                      reservedinstancesid
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="operatingsystem">
                    <span class="pvtAttr">
                      operatingsystem
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="instancetype">
                    <span class="pvtAttr">
                      instancetype
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="region">
                    <span class="pvtAttr">
                      region
                      <span class="pvTringle">▾</span>
                    </span>
                  </li>
                  <li data-id="groupname">
                    <span class="pvtAttr">
                      groupname
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
                <li data-id="projectname">
                  <span class="pvtAttr ">
                    projectname
                    <span class="pvtTriangle"> ▾</span>
                  </span>
                  <!-- Filter Box -->
                  <div class="pvtFilterBox" style="touch-action: none; display: block; cursor: initial; z-index: 1117; transform: translate(0px, 0px);">
                    <!-- <a class="pvtCloseX">×</a> -->
                    <!-- <div class="pvtSearchContainer"> -->
                      <a role="button" class="pvtButton">Select All</a>
                      <a role="button" class="pvtButton">Deselect All</a>
                      <input type="text" placeholder="Filter values" class="pvtSearch" value="">
                    <!-- </div> -->
                    <div class="pvtCheckContainer">
                      <p>
                        <input type="checkbox" value="Thursday">Thursday
                      </p>
                      <p class="selected">
                        <input type="checkbox" value="Friday" checked="checked">Friday
                      </p>
                      <p>
                        <input type="checkbox" value="Saturday">Saturday
                      </p>
                      <!-- <p class="selected">
                        <a class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>Thursday
                      </p>
                      <p class="selected">
                        <a class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>Friday
                      </p>
                      <p class="selected">
                        <a class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>Saturday
                      </p>
                      <p class="selected">
                        <a class="pvtOnly">only</a>
                        <a class="pvtOnlySpacer">&nbsp;</a>
                        Sunday
                      </p> -->
                    </div>
                  </div>
                  <!-- Filter Box End -->
                </li>
                <li data-id="quantity">
                  <span class="pvtAttr ">
                    quantity
                    <span class="pvtTriangle"> ▾</span>
                  </span>
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
                    :rows="['dt', 'region', 'productcode', 'projectname']"
                    :cols="['projectname', 'quantity']"
                    aggregatorName="Sum"
                    :vals="['value']"
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

export default {
  name: 'app',
  data () {
    return {
      pivotData: []

    }
  }
}
</script>

<style>

</style>
