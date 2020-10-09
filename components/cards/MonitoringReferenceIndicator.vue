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
              {{ '広島県における感染動向を評価する指標。' }}
            </li>
            <li>
              {{
                '病床ひっ迫具合は、入院病床数及び宿泊療養施設の室数の合計に占める入院等人数の割合を表す。'
              }}
            </li>
            <li>
              {{
                '各指標でステージ1～4に該当する数値を設定し、指標ごとの状況を総合的に判断して、県におけるステージの評価を行っている。'
              }}
            </li>
            <li>
              {{ '各指標とステージの判断基準は次のとおり。' }}
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>ステージ3</th>
                <th>ステージ4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>病床のひっ迫具合</td>
                <td>25％</td>
                <td>50％</td>
              </tr>
              <tr>
                <td>全療養者数</td>
                <td>15人</td>
                <td>25人</td>
              </tr>
              <tr>
                <td>ＰＣＲ陽性率</td>
                <td>10%</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>新規報告数</td>
                <td>15人</td>
                <td>25人</td>
              </tr>
            </tbody>
          </table>
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

table {
  margin-top: 10px;
}
th,
td {
  padding-left: 10px;
  padding-right: 10px;

  @include largerThan($small) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @include largerThan($medium) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @include largerThan($large) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
