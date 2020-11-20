<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="'検査陽性者の状況'"
        :title-id="'details-of-confirmed-cases'"
        :date="date"
      >
        <template v-slot:additionalDescription>
          <ul>
            <li>
              {{ '検疫所等における陽性者数は含まれていない。' }}
            </li>
            <li>
              {{
                '各数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
          </ul>
        </template>
        <confirmed-cases-details-table
          :aria-label="'検査陽性者の状況'"
          v-bind="confirmedCases"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

// import AppLink from '@/components/AppLink.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import DataView from '@/components/DataView.vue'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
    // AppLink,
  },
  data() {
    const mainSummary = Data.main_summary
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      confirmedCases,
      date,
    }
  },
}
</script>

<style module>
.mt1rem {
  margin-top: 1.4rem;
}
</style>
