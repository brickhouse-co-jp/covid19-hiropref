<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <city-infection-table
        :title="'最新の陽性者数（市町別）'"
        :title-id="'number-of-confirmed-cases-by-municipalities'"
        :chart-data="municipalitiesTable"
        :date="date"
        :info="info"
      >
        <template v-slot:additionalDescription>
          <ul>
            <li>
              {{
                '数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
            <li>
              {{ '公表資料をもとに作成。' }}
            </li>
            <li>
              {{ '検疫所等における陽性者の情報は含まれていない。' }}
            </li>
          </ul>
        </template>
      </city-infection-table>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import Data from '@/data/data.json'
import monitoringItems from '@/data/monitoring_items.json'
import patientsData from '@/data/patient.json'
import CityInfectionTable from '~/components/CityInfectionTable.vue'
import { formatCityInfectedNumber } from '~/utils/formatCityInfectedNumber'
// import { getCommaSeparatedNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

// const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    CityInfectionTable,
  },
  data() {
    const { date } = patientsData
    const datasets = formatCityInfectedNumber(Data.patients.data)
    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')
    const latestInfectionNumber = monitoringItems.data['新規陽性者数']
    const latestDate = monitoringItems.data['感染状況更新日付']
    // 区市町村ごとの陽性者数
    const municipalitiesTable = {
      headers: [],
      datasets: [],
    }

    municipalitiesTable.headers = [
      { text: '市町', value: 'area' },
      { text: 'ふりがな', value: 'ruby' },
      { text: '陽性者数', value: 'count', align: 'end' },
    ]

    // データを追加
    municipalitiesTable.datasets = datasets

    const info = {
      sText: this.$d(new Date(latestDate), 'dateWithoutYear') + 'の数値',
      lText: String(latestInfectionNumber),
      unit: '人',
    }

    return {
      date: formattedDate,
      municipalitiesTable,
      info,
    }
  },
}
</script>
