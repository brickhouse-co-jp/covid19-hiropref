<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <positive-rate-mixed-chart
        :title-id="'positive-rate'"
        :info-titles="['検査の陽性率']"
        :chart-id="'positive-rate-chart'"
        :chart-data="positiveRateGraph"
        :get-formatter="getFormatter"
        :date="PositiveRate.date"
        :labels="positiveRateLabels"
        unit="%"
        :option-unit="'人'"
        :data-labels="positiveRateDataLabels"
        :table-labels="positiveRateTableLabels"
      >
        <template v-slot:additionalDescription>
          <span>{{ '（注）' }}</span>
          <ul>
            <li>
              {{ '医療機関実施の検査件数を含む。' }}
            </li>
            <li>
              {{ '検査結果の判明日を基準とする。' }}
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
              {{ '陰性確認のために行った検査の件数は含めない。' }}
            </li>
          </ul>
        </template>
      </positive-rate-mixed-chart>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
import PositiveRate from '@/data/positive_rate.json'
import {
  getCommaSeparatedNumberToFixedFunction,
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart,
  },
  data() {
    // 検査実施日別状況
    const { data } = PositiveRate
    const pcrPositiveCount = data.map((data) => data.positive_count)
    const pcrNegativeCount = data.map((data) => data.negative_count)
    // const antigenPositiveCount = data.map((data) => data.antigen_positive_count)
    // const antigenNegativeCount = data.map((data) => data.antigen_negative_count)
    const positiveRates = data.map((data) => data.positive_rate)
    const positiveRateLabels = data.map((data) => data.diagnosed_date)
    // const weeklyAverageDiagnosedCount = data.map(
    //   (data) => data.weekly_average_diagnosed_count
    // )
    const positiveRateGraph = [
      pcrPositiveCount,
      // antigenPositiveCount,
      pcrNegativeCount,
      // antigenNegativeCount,
      // weeklyAverageDiagnosedCount,
      positiveRates,
    ]
    const positiveRateDataLabels = [
      '検査陽性者数',
      // '抗原検査陽性者数',
      '検査陰性者数',
      // '抗原検査陰性者数',
      // '検査人数（5日間移動平均）',
      '陽性率(5日間移動平均)',
    ]
    const positiveRateTableLabels = positiveRateDataLabels.map((d) => d)

    const getFormatter = (columnIndex) => {
      // if (columnIndex === 4) {
      if (columnIndex === 2) {
        // 検査人数（７日間移動平均）は小数点第1位まで表示し、整数部分は３桁区切りにする。
        return getCommaSeparatedNumberToFixedFunction(1)
        // } else if (columnIndex === 5) {
      } else if (columnIndex === 3) {
        // 陽性率は小数点第1位まで表示する。
        return getNumberToFixedFunction(1)
      } else {
        return getNumberToLocaleStringFunction()
      }
    }

    return {
      PositiveRate,
      positiveRateGraph,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
      getFormatter,
    }
  },
}
</script>
