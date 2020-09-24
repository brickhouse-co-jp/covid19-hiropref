<template>
  <div
    class="Contacts"
    aria-labelledby="pageHeader"
    aria-describedby="contactsCardTable"
  >
    <page-header id="pageHeader" class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table
        id="contactsCardTable"
        class="Contacts-Card-Table"
        v-bind="tableAttrs"
        aria-describedby="pageHeader"
      >
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('新型コロナウイルス感染症に関する相談窓口') }}
            </th>
            <th class="text-center" scope="col">
              {{ $t('新型コロナウイルスコールセンター') }}
            </th>
            <th class="text-center tel" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('広島市･呉市･福山市以外の市町') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('広島県各保健所') }}
            </td>
            <td class="tel">
              <a href="tel:0825132567" class="importantContact">082-513-2567</a
              ><br />
              <p class="caution">
                {{ $t(`24時間対応`) }}
              </p>
              <p class="caution">
                {{
                  $t(
                    `電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。`
                  )
                }}
              </p>
            </td>
          </tr>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('広島市') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('広島市各保健センター') }}
            </td>
            <td class="tel">
              <a href="tel:0822414566" class="importantContact">082-241-4566</a
              ><br />
              <p class="caution">
                {{ $t('24時間対応') }}
              </p>
            </td>
          </tr>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('呉市') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('呉市保健所') }}
            </td>
            <td class="tel">
              <a href="tel:0823225858" class="importantContact">0823-22-5858</a
              ><br />
              <p class="caution">
                {{ $t('24時間対応') }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Contacts-Card mtSec">
      <table
        id="contactsCardTable"
        class="Contacts-Card-Table"
        v-bind="tableAttrs"
        aria-describedby="pageHeader"
      >
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">
              {{ $t('名前') }}
            </th>
            <th class="text-center tel" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('本サイトの管理・運営に関すること') }}
            </td>
            <td class="bureau">
              {{ $t('ブランド・コミュニケーション戦略チーム') }}
            </td>
            <td class="tel"><a href="tel:0825132378">082-513-2378</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症対応資金') }}
            </td>
            <td class="bureau">{{ $t('経営革新課') }}</td>
            <td class="tel">
              <a href="tel:082-513-3321">
                082-513-3321
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('広島コロナお知らせQR') }}
            </td>
            <td class="bureau">
              {{ $t('広島コロナお知らせQRサポートセンター') }}
            </td>
            <td class="tel">
              <a href="tel:082-513-2845">082-513-2845</a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症対策取組宣言店') }}
            </td>
            <td class="bureau">{{ $t('サポートセンター') }}</td>
            <td class="tel">
              <a href="tel:082-513-2845">082-513-2845</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
  },
  data() {
    return {
      pc: true,
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    },
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string,
    }
  },
})
</script>

<style lang="scss">
.mtSec {
  margin-top: 20px;
}
@include largerThan($medium) {
  .mtSec {
    margin-top: 30px;
  }
}
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        padding: 1em 0;
        @include font-size(14, true);
      }

      td {
        padding: 1em 16px;
        @include font-size(14);
      }

      .importantContact {
        font-weight: bold;
        @include font-size(16, true);
      }

      .tel ul {
        list-style: none;
        padding: 0;
      }

      .tel li {
        margin: 8px 0;
      }

      @include largerThan($medium) {
        th.tel {
          width: 35%;
        }
        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }

      p.caution {
        margin: 0;
        @include font-size(12);
      }
    }
  }
}
</style>
