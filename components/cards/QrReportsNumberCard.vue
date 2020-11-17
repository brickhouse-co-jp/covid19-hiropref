<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('広島コロナお知らせQR登録数')"
        :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
        :chart-id="'time-bar-chart-contacts'"
        :chart-data="contactsGraph"
        :date="date"
        :unit="$t('件.reports')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000071'"
      />
      <!-- 件.reports = 窓口相談件数 -->
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/TimeBarChart.vue'
import Data from '@/data/qr_read_number.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const { read } = Data
    const { date } = read
    // 相談件数
    const contactsGraph = formatGraph(read.data)

    return {
      contactsGraph,
      date,
    }
  },
}
</script>
