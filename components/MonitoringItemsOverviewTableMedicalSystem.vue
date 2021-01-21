<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ '入院患者数' }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['入院患者数'].value"
          :unit="items['入院患者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ '確保病床' }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['入院患者確保病床数'].value"
              :unit="items['入院患者確保病床数'].unit"
            />
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>確保病床利用率</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="
                retInpatientRatio(
                  monitoringData.入院患者数,
                  monitoringData.入院患者確保病床数
                ).value
              "
              :unit="unit"
            />
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ '宿泊療養施設療養者数' }}</span>
        <monitoring-items-overview-table-value-with-translatable-unit
          :value="items['宿泊療養施設療養者数'].value"
          :unit="items['宿泊療養施設療養者数'].unit"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ '確保室数' }}</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="items['宿泊療養施設確保室数'].value"
              :unit="items['宿泊療養施設確保室数'].unit"
            />
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>宿泊療養施設利用率</span>
            <monitoring-items-overview-table-value-with-translatable-unit
              :value="
                retInpatientRatio(
                  monitoringData.宿泊療養施設療養者数,
                  monitoringData.宿泊療養施設確保室数
                ).value
              "
              :unit="unit"
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
import MoniItem from '@/data/monitoring_items.json'
import { MonitoringItems } from '@/utils/formatMonitoringItems'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

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
  data() {
    return {
      monitoringData: MoniItem.data,
      unit: { text: '%', translatable: false },
    }
  },
  methods: {
    retInpatientRatio(item1: number, item2: number) {
      const parentNum: number = item1
      const childNum: number = item2
      const toNumberInHundredthsPlace = getCommaSeparatedNumberToFixedFunction(
        1
      )
      const calc = (parentNum / childNum) * 100
      const retVal: object = {
        value: toNumberInHundredthsPlace(calc),
      }
      return retVal
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
