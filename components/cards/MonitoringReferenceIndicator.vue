<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="'参考指標'"
        title-id="monitoring-items-overview"
        :date="monitoringItemsData.date"
      >
        <template v-slot:additionalDescription>
          <span>{{ '（注）' }}</span>
          <ul>
            <li>
              {{ '広島県の指標' }}
            </li>
            <li>
              {{ 'これを参考にしてますよ' }}
            </li>
          </ul>
        </template>
        <section>
          <h4>{{ '本県の現状' }}</h4>
          <reference-indicator
            :aria-label="'感染状況'"
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

<script>
// import AppLink from '@/components/AppLink.vue'
import DataView from '@/components/DataView.vue'
import ReferenceIndicator from '@/components/ReferenceIndicator.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import formatMonitoringItems from '@/utils/formatMonitoringItems'

export default {
  components: {
    DataView,
    ReferenceIndicator,
    // AppLink,
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    return {
      monitoringItemsData,
      monitoringItems,
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
</style>
