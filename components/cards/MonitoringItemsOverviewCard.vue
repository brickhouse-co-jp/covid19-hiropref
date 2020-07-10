<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('モニタリング項目')"
      title-id="monitoring-items-overview"
      :date="monitoringItemsData.date"
    >
      <template v-slot:additionalDescription>
        <span>{{ $t('（注）') }}</span>
        <ul>
          <li>
            {{
              $t(
                '「＃7119」：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '(6)確保病床：レベル1→1,000床、レベル2→3,000床、レベル3→4,000床'
              )
            }}
          </li>
          <li>
            {{ $t('(7)確保病床：レベル1→100床、レベル2→300床、レベル3→700床') }}
          </li>
          <li>
            {{ $t('(1)～(5)は7日間移動平均で算出') }}
          </li>
          <li>
            {{ $t('(2)(4)(5)は報告日の前日時点の数値') }}
          </li>
          <li>
            {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
          </li>
          <li>
            {{
              $t(
                '(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない'
              )
            }}
          </li>
        </ul>
      </template>
      <section>
        <h4>{{ $t('感染状況') }}</h4>
        <monitoring-items-overview-table-infection-status
          :aria-label="$t('感染状況')"
          :items="monitoringItems"
        />
      </section>
      <section>
        <h4>{{ $t('医療提供体制') }}</h4>
        <monitoring-items-overview-table-medical-system
          :aria-label="$t('医療提供体制')"
          :items="monitoringItems"
        />
      </section>
      <div>
        <external-link
          :class="$style.button"
          url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
        >
          {{ $t('最新のモニタリング項目の分析・総括コメントについて') }}
        </external-link>
      </div>
    </data-view>
  </v-col>
</template>

<script>
import monitoringItemsData from '@/data/monitoring_items.json'
import formatMonitoringItems from '@/utils/formatMonitoringItems'
import DataView from '@/components/DataView.vue'
import MonitoringItemsOverviewTableInfectionStatus from '@/components/MonitoringItemsOverviewTableInfectionStatus.vue'
import MonitoringItemsOverviewTableMedicalSystem from '@/components/MonitoringItemsOverviewTableMedicalSystem.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default {
  components: {
    DataView,
    MonitoringItemsOverviewTableInfectionStatus,
    MonitoringItemsOverviewTableMedicalSystem,
    ExternalLink
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    return {
      monitoringItemsData,
      monitoringItems
    }
  }
}
</script>

<style lang="scss" module>
section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>