<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="'感染状況･検査体制･医療提供体制の最新情報'"
        title-id="monitoring-items-overview"
        :date="monitoringItemsData.date"
      >
        <template v-slot:additionalDescription>
          <ul>
            <li>
              {{
                '各数値は最新のものを掲載しているが、追って修正される可能性がある。'
              }}
            </li>
            <li>
              {{
                '特に検査件数については、後日件数が確定することも多いため、追って修正される可能性が高い。'
              }}
            </li>
          </ul>
        </template>
        <section>
          <h4>
            {{ '感染状況'
            }}<time :class="$style.mlTime"
              ><span :class="$style.pTime">[</span>{{ infectionStatus
              }}<span :class="$style.mlUpdate">時点</span
              ><span :class="$style.pTime">]</span></time
            >
          </h4>
          <monitoring-items-overview-table-infection-status
            :aria-label="'感染状況'"
            :items="monitoringItems"
          />
        </section>
        <section>
          <h4>
            {{ '検査体制'
            }}<time :class="$style.mlTime"
              ><span :class="$style.pTime">[</span>{{ medicalSystem
              }}<span :class="$style.mlUpdate">結果判明分</span
              ><span :class="$style.pTime">]</span></time
            >
          </h4>
          <monitoring-items-overview-table-medical-test
            :aria-label="'検査体制'"
            :items="monitoringItems"
          />
        </section>
        <section>
          <h4>
            {{ '医療提供体制'
            }}<time :class="$style.mlTime"
              ><span :class="$style.pTime">[</span>{{ medicalTests
              }}<span :class="$style.mlUpdate">時点</span
              ><span :class="$style.pTime">]</span></time
            >
          </h4>
          <monitoring-items-overview-table-medical-system
            :aria-label="'医療提供体制'"
            :items="monitoringItems"
          />
        </section>
        <!-- <div>
          <app-link
            :class="$style.button"
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
          >
            {{ $t('最新のモニタリング項目の分析・総括コメントについて') }}
          </app-link>
        </div> -->
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
// import AppLink from '@/components/AppLink.vue'
import DataView from '@/components/DataView.vue'
import MonitoringItemsOverviewTableInfectionStatus from '@/components/MonitoringItemsOverviewTableInfectionStatus.vue'
import MonitoringItemsOverviewTableMedicalSystem from '@/components/MonitoringItemsOverviewTableMedicalSystem.vue'
import MonitoringItemsOverviewTableMedicalTest from '@/components/MonitoringItemsOverviewTableMedicalTest.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
import formatMonitoringItems from '@/utils/formatMonitoringItems'

export default {
  components: {
    DataView,
    MonitoringItemsOverviewTableInfectionStatus,
    MonitoringItemsOverviewTableMedicalSystem,
    MonitoringItemsOverviewTableMedicalTest,
    // AppLink,
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    const infectionStatus = convertDateToSimpleFormat(
      monitoringItemsData.data.感染状況更新日付
    )
    const medicalSystem = convertDateToSimpleFormat(
      monitoringItemsData.data.検査体制更新日付
    )
    const medicalTests = convertDateToSimpleFormat(
      monitoringItemsData.data.医療提供体制更新日付
    )
    return {
      monitoringItemsData,
      monitoringItems,
      infectionStatus,
      medicalSystem,
      medicalTests,
    }
  },
}
</script>

<style lang="scss" module>
section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}

dfn {
  font-style: normal;
  font-weight: bold;
}

.mlTime {
  margin-left: 10px;
}
.pTime {
  padding-left: 2px;
  padding-right: 2px;
}
.mlUpdate {
  margin-left: 3px;
}
</style>
