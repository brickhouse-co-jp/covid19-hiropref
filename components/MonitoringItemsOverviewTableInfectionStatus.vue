<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ '新規陽性者数' }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['新規陽性者数'].value"
          :unit="items['新規陽性者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>
              {{ '感染経路不明(公表時点)' }}
            </span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['感染経路不明(公表時点)'].value"
              :unit="items['感染経路不明(公表時点)'].unit"
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
