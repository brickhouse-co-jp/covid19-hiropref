<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <untracked-rate-mixed-chart
        :title-id="'untracked-rate'"
        :info-titles="['新規陽性者における感染経路不明者数(公表日別)']"
        :chart-id="'untracked-rate-chart'"
        :chart-data="graphData"
        :get-formatter="getFormatter"
        :date="updated"
        :labels="dateList"
        :unit="['人', '%']"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
      >
        <template v-slot:additionalDescription>
          <span>{{ '（注）' }}</span>
          <ul>
            <li>
              {{
                '検査結果判明日別の感染経路の状況を判明・不明に区別したものである。'
              }}
            </li>
            <li>
              {{
                '数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
            <li>
              {{ '検疫所等における陽性者数は含まれていない。' }}
            </li>
            <li>
              {{
                '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、平準化し全体の傾向を見る目的から、過去5日間の移動平均値を折れ線グラフで示す（例えば、5月5日の移動平均値は、5月1日から5月5日までの実績値を平均したもの）'
              }}
            </li>
            <li>
              {{
                '感染経路不明者の数について、2020年10月６日までのデータについては、10月6日までに感染経路が判明したものを含めていない。一方、10月7日以降のデータについては、公表時点での感染経路の判明の有無を反映させたものとなっている。'
              }}
            </li>
          </ul>
        </template>
      </untracked-rate-mixed-chart>
    </client-only>
  </v-col>
</template>

<script>
import UntrackedRateMixedChart from '@/components/UntrackedRateMixedChart'
import Data from '@/data/daily_positive_detail.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    UntrackedRateMixedChart,
  },
  data() {
    const data = Data.data.filter(
      (d) => new Date(d.diagnosed_date) >= new Date('2020-03-27')
    )
    const reportedCount = data.map((d) => d.reported_count)
    const missingCount = data.map((d) => d.missing_count)
    const untrackedRate = data.map((d) => d.weekly_average_untracked_count)
    // const untrackedIncreseRate = data.map(
    //   (d) => d.weekly_average_untracked_increse_percent
    // )
    const dateList = data.map((d) => d.diagnosed_date)
    const updated = Data.date
    const graphData = [
      reportedCount,
      missingCount,
      untrackedRate,
      // untrackedIncreseRate,
    ]

    const dataLabels = [
      '感染経路判明者',
      '感染経路不明者',
      '感染経路不明者数(5日間移動平均)',
      // '増加比',
    ]
    const tableLabels = [
      '感染経路判明者数',
      '感染経路不明者数',
      '感染経路不明者数(5日間移動平均)',
      // '増加比',
    ]

    const getFormatter = (columnIndex) => {
      // 7日間移動平均と増加比は小数点第1位まで表示する。
      if (columnIndex >= 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      updated,
      graphData,
      dateList,
      dataLabels,
      tableLabels,
      getFormatter,
    }
  },
}
</script>
