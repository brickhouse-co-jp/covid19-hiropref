<template>
  <div>
    <card-row class="DataBlock">
      <!-- 6指標 -->
      <monitoring-reference-indicator />
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 報告日別による陽性者数の累計 -->
      <confirmed-cases-number-card />
      <!-- 感染・検査・医療提供の最新情報 -->
      <monitoring-items-overview-card />
      <!-- 新規陽性者数(公表日別) -->
      <monitoring-confirmed-cases-number-card />
      <!-- 新規陽性者数(公表日別) -->
      <onset-number-card />
      <!-- #7119における発熱等相談件数 -->
      <!-- <consultation-about-fever-number-card /> -->
      <!-- 新規陽性者における感染経路等不明者数 -->
      <untracked-rate-card />
      <!-- 検査の陽性率-->
      <positive-rate-card />
      <!-- 救急医療の東京ルールの適用件数 -->
      <!-- <tokyo-rules-application-number-card /> -->
      <!-- 入院患者数 -->
      <hospitalized-number-card />
      <!-- 重症患者数 -->
      <!-- <severe-case-card /> -->
    </card-row>
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'

// 6指標
import MonitoringReferenceIndicator from '@/components/cards/MonitoringReferenceIndicator.vue'
// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// 報告日別による陽性者数の累計
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
// 感染・検査・医療提供の最新情報
import MonitoringItemsOverviewCard from '@/components/cards/MonitoringItemsOverviewCard.vue'
// 新規陽性者数(報告日別)
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
// 新規陽性者数(発症日別)
import OnsetNumberCard from '@/components/cards/OnsetNumberCard.vue'
// #7119における発熱等相談件数
// import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
// 新規陽性者における感染経路等不明者数
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
// 検査の陽性率
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
// 救急医療の東京ルールの適用件数
// import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'
// 入院患者数
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
// 重症患者数
// import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
/* eslint-enable simple-import-sort/sort */

export default Vue.extend({
  components: {
    CardRow,
    MonitoringReferenceIndicator,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    OnsetNumberCard,
    MonitoringItemsOverviewCard,
    MonitoringConfirmedCasesNumberCard,
    // ConsultationAboutFeverNumberCard,
    UntrackedRateCard,
    PositiveRateCard,
    // TokyoRulesApplicationNumberCard,
    HospitalizedNumberCard,
    // SevereCaseCard,
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
