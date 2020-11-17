<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
      <div class="UpdatedAt">
        <span>{{ '最終更新' }}</span>
        <time :datetime="updatedAt">{{ formattedDateForDisplay }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ '注釈' }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" :is-emergency="false" />
    <monitoring-comment-card />
    <!-- <tokyo-alert-card v-if="TokyoAlert.alert" /> -->
    <static-info
      class="mb-4"
      :url="'https://www.pref.hiroshima.lg.jp/site/guard-dial/'"
      :text="'｢風邪かな?｣と感じたらまずは電話してください！'"
      :btn-text="'相談の手順を見る'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import MonitoringCommentCard from '@/components/MonitoringCommentCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticInfo from '@/components/StaticInfo.vue'
// import TokyoAlertCard from '@/components/TokyoAlertCard.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
// import TokyoAlert from '@/data/tokyo_alert.json'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    // TokyoAlertCard,
    MonitoringCommentCard,
  },
  data() {
    const { lastUpdate } = Data

    return {
      // TokyoAlert,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '県内の感染動向',
      },
      lastUpdate,
      newsItems: News.newsItems,
    }
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.lastUpdate)
    },
    formattedDateForDisplay() {
      return `${this.$d(new Date(this.$data.lastUpdate), 'dateTime')} JST`
    },
  },
  head(): MetaInfo {
    return {
      title: '県内の感染動向' as string,
    }
  },
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
}
</style>
