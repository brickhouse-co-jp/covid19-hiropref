<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <confirmed-cases-by-municipalities-table
        :title="'陽性者数の累計（市町別）'"
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
      </confirmed-cases-by-municipalities-table>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import Data from '@/data/patient.json'
import ConfirmedCasesByMunicipalitiesTable from '~/components/ConfirmedCasesByMunicipalitiesTable.vue'
import { getCommaSeparatedNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    ConfirmedCasesByMunicipalitiesTable,
  },
  data() {
    const { datasets, date } = Data

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 区市町村ごとの陽性者数
    const municipalitiesTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    if (this.$i18n.locale === 'ja') {
      municipalitiesTable.headers = [
        { text: '管轄', value: 'area' },
        { text: '市町', value: 'label' },
        { text: 'ふりがな', value: 'ruby' },
        { text: '陽性者数', value: 'count', align: 'end' },
      ]
    } else {
      municipalitiesTable.headers = [
        { text: '管轄', value: 'area' },
        { text: '市町', value: 'label' },
        { text: '陽性者数', value: 'count', align: 'end' },
      ]
    }

    // データをソート
    const areaOrder = ['広島市', '呉市', '福山市', '県管轄', '-', '', null]
    datasets.data
      .sort((a, b) => {
        // 全体をふりがなでソート
        if (a.ruby === b.ruby) {
          return 0
        } else if (a.ruby > b.ruby) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // '県管轄' -> '広島市' -> '呉市' -> '福山市' -> '-' -> の順にソート
        return areaOrder.indexOf(a.area) - areaOrder.indexOf(b.area)
      })

    // データを追加
    municipalitiesTable.datasets = datasets.data
      .filter((d) => d.label !== '小計')
      .map((d) => {
        const area = d.area
        const label = d.label
        const count = countFormatter(d.count)

        if (this.$i18n.locale === 'ja') {
          const ruby = d.ruby
          return { area, ruby, label, count }
        } else {
          return { area, label, count }
        }
      })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(datasets.date), 'dateWithoutYear'),
      }),
    }

    return {
      date: formattedDate,
      municipalitiesTable,
      info,
    }
  },
}
</script>
