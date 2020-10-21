<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('感染状況・医療提供体制の分析') }}
      </h3>
    </div>
    <div class="MonitoringComment-description">
      <p>
        {{
          $t(
            '広島県では、専門家による状況分析を項目ごとに行い、県内の感染状況・医療提供体制について、国の示した指標に照らし合わせてステージについて評価しています。'
          )
        }}
        <!-- {{
          $t('{date}付の総括コメントは以下のとおりです。', {
            date: commentDate(),
          })
        }} -->
      </p>
      <v-icon color="#D9D9D9">mdi-chevron-right</v-icon>
      <app-link
        to="https://www.pref.hiroshima.lg.jp/soshiki/19/covid19-stage.html"
      >
        {{ $t('新型コロナウイルス感染状況のステージについて') }}
      </app-link>
    </div>
    <div class="MonitoringComment-comments">
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <h4>{{ $t('感染状況') }}</h4>
          <monitoring-comment-frame
            :level="monitoringItems.data['総括コメント-感染状況'].level - 1"
            :comment="monitoringItems.data['総括コメント-感染状況'].label"
          />
        </v-col>
        <!-- <v-col cols="12" sm="12" md="6" lg="6">
          <h4>{{ $t('医療提供体制') }}</h4>
          <monitoring-comment-frame
            :level="monitoringItems.data['総括コメント-医療提供体制'].level - 1"
            :comment="monitoringItems.data['総括コメント-医療提供体制'].label"
          />
        </v-col> -->
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'
import MonitoringCommentFrame from '@/components/MonitoringCommentFrame.vue'
import monitoringItems from '@/data/monitoring_items.json'

export default Vue.extend({
  components: {
    AppLink,
    MonitoringCommentFrame,
  },
  data() {
    return {
      monitoringItems,
    }
  },
  methods: {
    commentDate() {
      return this.$d(
        new Date(monitoringItems.data['総括コメント-更新日']),
        'dateWithoutYear'
      )
    },
  },
})
</script>

<style lang="scss">
.MonitoringComment {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .MonitoringComment-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .MonitoringComment-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
    }
  }

  .MonitoringComment-description {
    padding: 12px;

    @include font-size(14);
    > a {
      text-decoration: none;
      @include text-link();
    }
  }

  .MonitoringComment-comments {
    h4 {
      margin-bottom: 10px;
      color: $gray-3;
      font-weight: normal;

      @include font-size(14);
    }

    margin: 0 10px;
  }
}
</style>
