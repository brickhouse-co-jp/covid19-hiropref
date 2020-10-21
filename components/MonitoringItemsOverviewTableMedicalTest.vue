<template>
  <ul :class="$style.container">
    <li class="list-style-none">
      <ul :class="$style.container">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ '保健所設置市分' }}</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '検査件数(広島市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(広島市)'].value"
                  :unit="items['検査件数(広島市)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '陽性率(広島市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性率(広島市)'].value"
                  :unit="items['陽性率(広島市)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '検査件数(呉市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(呉市)'].value"
                  :unit="items['検査件数(呉市)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '陽性率(呉市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性率(呉市)'].value"
                  :unit="items['陽性率(呉市)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '検査件数(福山市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(福山市)'].value"
                  :unit="items['検査件数(福山市)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '陽性率(福山市)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性率(福山市)'].value"
                  :unit="items['陽性率(福山市)'].unit"
                />
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ '県保健所管轄分' }}</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '検査件数(県管轄)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(県管轄)'].value"
                  :unit="items['検査件数(県管轄)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '陽性率(県管轄)' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性率(県管轄)'].value"
                  :unit="items['陽性率(県管轄)'].unit"
                />
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ '医療機関実施分' }}</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '検査件数' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(医療機関実施分)'].value"
                  :unit="items['検査件数(医療機関実施分)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ '陽性率' }}</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性率(医療機関実施分)'].value"
                  :unit="items['陽性率(医療機関実施分)'].unit"
                />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="list-style-none">
      <ul :class="$style.container">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ '検査件数(合計)' }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['検査件数(合計)'].value"
              :unit="items['検査件数(合計)'].unit"
            />
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ '陽性率(合計)' }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['陽性率(合計)'].value"
              :unit="items['陽性率(合計)'].unit"
            />
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import MonitoringItemsOverviewTableValueWithTranslatableUnit from '@/components/MonitoringItemsOverviewTableValueWithTranslatableUnit.vue'
import { MonitoringItems } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  components: {
    MonitoringItemsOverviewTableValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>

<style scoped>
.list-style-none {
  list-style: none;
}
</style>
