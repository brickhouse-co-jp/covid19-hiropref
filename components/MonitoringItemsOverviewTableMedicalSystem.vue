<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('入院患者数') }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['入院患者数'].value"
          :unit="items['入院患者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('確保病床') }}</span>
            <span>{{ items['入院患者確保病床数'].value }}</span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('宿泊療養施設療養者数') }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['宿泊療養施設療養者数'].value"
          :unit="items['宿泊療養施設療養者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('確保室数') }}</span>
            <span>{{ items['宿泊療養施設確保室数'].value }}</span>
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
