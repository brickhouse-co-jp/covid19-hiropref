<template>
  <ul :class="$style.container">
    <li class="list-style-none">
      <ul :class="$style.container">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>行政検査(県内全体)</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>検査件数</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(行政検査)'].value"
                  :unit="items['検査件数(行政検査)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>陽性件数</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性件数(行政検査)'].value"
                  :unit="items['陽性件数(行政検査)'].unit"
                />
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>医療機関検査</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>検査件数</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['検査件数(医療機関検査)'].value"
                  :unit="items['検査件数(医療機関検査)'].unit"
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>陽性件数</span>
                <monitoring-items-overview-table-value-with-translatable-unit
                  :value="items['陽性件数(医療機関検査)'].value"
                  :unit="items['陽性件数(医療機関検査)'].unit"
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
            <span>陽性件数(合計)</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['陽性件数(合計)'].value"
              :unit="items['陽性件数(合計)'].unit"
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
