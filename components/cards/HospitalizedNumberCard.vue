<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <dashed-rectangle-time-bar-chart
        :title-id="'number-of-hospitalized'"
        :info-titles="['入院患者数']"
        :chart-id="'dashed-rectangle-time-bar-chart-hospitalized'"
        :chart-data="patientsGraph"
        :date="positiveStatus.date"
        :unit="'人'"
        :dashed-rectangle-range="'2020-05-11'"
        :added-value="50"
        :table-labels="tableLabels"
      >
        <template v-slot:additionalDescription>
          <span>{{ '（注）' }}</span>
          <ul>
            <li>
              {{
                '入院患者数は、医療機関への入院者数及び宿泊療養施設の利用者数の合計を表す。'
              }}
            </li>
            <li>
              {{
                '数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
          </ul>
        </template>
      </dashed-rectangle-time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import DashedRectangleTimeBarChart from '@/components/DashedRectangleTimeBarChart.vue'
import positiveStatus from '@/data/positive_status.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    DashedRectangleTimeBarChart,
  },
  data() {
    const formatData = positiveStatus.data
      .filter((d) => new Date(d.date) >= new Date('2020-03-06'))
      .map((d) => ({
        日付: new Date(d.date),
        小計: d.hospitalized,
      }))
    // 入院患者数グラフ
    const patientsGraph = formatGraph(formatData)
    const tableLabels = ['入院患者数']

    return {
      positiveStatus,
      patientsGraph,
      tableLabels,
    }
  },
}
</script>
