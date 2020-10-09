<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart-cumulative
        :title="'報告日別による陽性者数の累積'"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :data-kind="'cumulative'"
        :date="date"
        :unit="'人'"
        :by-date="true"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
      >
        <!-- <template v-slot:description>
          <app-link
            :to="`${
              $i18n.locale !== 'ja' ? $i18n.locale : ''
            }/cards/positive-number-by-developed-date`"
            class="Description-Link"
          >
            {{ $t('発症日別による陽性者数の推移はこちら') }}
          </app-link>
        </template> -->
        <template v-slot:additionalDescription>
          <!-- <div class="Description-ExternalLink">
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/todokedehcyouseisya.html"
            >
              {{ '届出保健所別の内訳' }}
            </app-link>
          </div> -->
          <span>{{ '（注）' }}</span>
          <ul>
            <li>
              {{ '公表日を基準に集計。' }}
            </li>
            <li>
              {{ '検疫所等における陽性者数は含まれていない。' }}
            </li>
          </ul>
        </template>
      </time-bar-chart-cumulative>
    </client-only>
  </v-col>
</template>

<script>
// import AppLink from '@/components/AppLink.vue'
import TimeBarChartCumulative from '@/components/TimeBarChartCumulative.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChartCumulative,
    // AppLink,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const date = Data.patients_summary.date

    return {
      patientsGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
