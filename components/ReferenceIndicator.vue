<template>
  <div>
    <ul :class="[$style.container]">
      <li :class="[$style.boxBigger]">
        <div :class="$style.content">
          <span>
            {{ '病床のひっ迫具合' }}
          </span>
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['病床逼迫具合'].value"
            :unit="items['病床逼迫具合'].unit"
          />
        </div>
      </li>
      <li :class="[$style.boxBigger]">
        <div :class="$style.content">
          <span>
            {{ '療養者数(10万人当たり)' }}
          </span>
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['療養者数'].value"
            :unit="items['療養者数'].unit"
          />
        </div>
      </li>
      <li :class="[$style.boxBigger]">
        <div :class="$style.content">
          <span>
            {{ 'PCR陽性率(直近7日移動平均)' }}
          </span>
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['PCR陽性率'].value"
            :unit="items['PCR陽性率'].unit"
          />
        </div>
      </li>
      <li :class="[$style.boxBigger]">
        <div :class="$style.content">
          <span>
            {{ '新規報告数(直近1週間の10万人当たり)' }}
          </span>
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['新規報告者数'].value"
            :unit="items['新規報告者数'].unit"
          />
        </div>
      </li>
    </ul>
    <ul :class="$style.container">
      <li :class="[$style.box, $style.parent]">
        <div :class="$style.content">
          <span>
            {{ '直近1週間の感染者数' }}
          </span>
        </div>
        <ul :class="$style.group">
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ '今週' }}</span>
              <monitoring-items-overview-table-value-with-translatable-unit
                :value="items['直近1週間の先週比較(今週)'].value"
                :unit="items['直近1週間の先週比較(今週)'].unit"
              />
            </div>
          </li>
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ '先週' }}</span>
              <monitoring-items-overview-table-value-with-translatable-unit
                :value="items['直近1週間の先週比較(先週)'].value"
                :unit="items['直近1週間の先週比較(先週)'].unit"
              />
            </div>
          </li>
        </ul>
      </li>
      <li :class="[$style.box, $style.parent]">
        <div :class="$style.content">
          <span>
            {{ '感染経路不明割合' }}
          </span>
        </div>
        <ul :class="$style.group">
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ '直近7日移動平均' }}</span>
              <monitoring-items-overview-table-value-with-translatable-unit
                :value="items['感染経路不明割合(7日)'].value"
                :unit="items['感染経路不明割合(7日)'].unit"
              />
            </div>
          </li>
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ 'これまでの全感染者' }}</span>
              <monitoring-items-overview-table-value-with-translatable-unit
                :value="items['感染経路不明割合(累計)'].value"
                :unit="items['感染経路不明割合(累計)'].unit"
              />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
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
