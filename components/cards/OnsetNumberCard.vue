<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <monitoring-confirmed-cases-chart
        title-id="monitoring-number-of-confirmed-cases"
        :info-titles="['新規陽性者数(発症日別)']"
        chart-id="monitoring-confirmed-cases-chart"
        :chart-data="chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :unit="'人'"
        url="https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068"
      >
        <template v-slot:additionalDescription>
          <ul>
            <li>
              {{
                '各数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
            <li>
              {{ '検疫所等における陽性者数は含まれていない。' }}
            </li>
            <li>
              {{
                '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、平準化し全体の傾向を見る目的から、過去7日間の移動平均値を折れ線グラフで示す（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）'
              }}
            </li>
            <li>
              {{ '無症状の場合を除いて集計している。' }}
            </li>
          </ul>
        </template>
      </monitoring-confirmed-cases-chart>
    </client-only>
  </v-col>
</template>

<script>
import MonitoringConfirmedCasesChart from '@/components/MonitoringConfirmedCasesChart.vue'
import Data from '@/data/daily_positive_detail-onset.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MonitoringConfirmedCasesChart,
  },
  data() {
    const [patientsCount, sevenDayMoveAverages, labels] = Data.data.reduce(
      (res, data) => {
        res[0].push(data.count)
        res[1].push(data.weekly_average_count)
        res[2].push(data.diagnosed_date)
        return res
      },
      [[], [], []]
    )
    const chartData = [patientsCount, sevenDayMoveAverages]
    const dataLabels = ['陽性者数', '7日間移動平均']
    const tableLabels = ['陽性者数', '7日間移動平均']
    const date = Data.date

    const getFormatter = (columnIndex) => {
      // モニタリング指標(1)新規陽性者数の7日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      labels,
      dataLabels,
      tableLabels,
      getFormatter,
    }
  },
}
</script>
