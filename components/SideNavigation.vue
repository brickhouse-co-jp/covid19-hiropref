<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="'サイドメニュー項目を開く'"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            src="/logo.svg"
            :alt="'広島県'"
          />
          <div class="SideNavigation-HeaderText">
            {{ '新型コロナウイルス感染症' }}<br />
            {{ '対策サイト[公式]' }}
          </div>
        </app-link>
      </h1>
    </header>

    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="'サイドメニュー項目を閉じる'"
        @click="$emit('closeNavi', $event)"
      >
        mdi-close
      </v-icon>

      <nav class="SideNavigation-Menu">
        <!-- <div class="SideNavigation-Language">
          <div
            v-if="this.$i18n.locales.length > 1"
            class="SideNavigation-Language"
          >
            <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
          </div>
        </div> -->
        <menu-list :items="items" @click="$emit('closeNavi', $event)" />
      </nav>

      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <app-link
            to="https://page.line.me/hiroshima_pref"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/line.webp" type="image/webp" />
              <img src="/line.png" alt="LINE" />
            </picture>
          </app-link>
          <app-link
            to="http://twitter.com/hiroshima_pref"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/twitter.webp" type="image/webp" />
              <img src="/twitter.png" alt="Twitter" />
            </picture>
          </app-link>
          <app-link
            to="https://ja-jp.facebook.com/pref.hiroshima"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/facebook.webp" type="image/webp" />
              <img src="/facebook.png" alt="Facebook" />
            </picture>
          </app-link>
          <app-link
            to="https://www.youtube.com/user/hiroshimakenkouhou"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/youtube.webp" type="image/webp" />
              <img src="/youtube.png" alt="YouTube" />
            </picture>
          </app-link>
        </div>
        <small class="SideNavigation-Copyright">
          &copy; 2020 Hiroshima Prefectural Government
        </small>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/AppLink.vue'
// import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    MenuList,
    AppLink,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: '県内の最新感染動向',
          link: this.localePath('/'),
        },
        {
          icon: 'CovidIcon',
          title: '新型コロナウイルス感染症が心配なときに',
          link: this.localePath('/flow'),
          divider: true,
        },
        {
          icon: 'mdi-account-multiple',
          title: '県民の方向け支援',
          link:
            'https://www.pref.hiroshima.lg.jp/site/covid-support/kenmin-all.html',
        },
        {
          icon: 'mdi-domain',
          title: '事業者の方向け支援',
          link:
            'https://www.pref.hiroshima.lg.jp/site/covid-support/jigyosha-all.html',
          divider: true,
        },
        {
          title: '広島県 新型コロナウイルス感染症 まとめサイト',
          link: 'https://www.pref.hiroshima.lg.jp/site/2019-ncov/',
        },
        {
          title: '知事からのメッセージ',
          link: 'https://www.pref.hiroshima.lg.jp/site/2019-ncov/message.html',
        },
        {
          title: 'よくあるご質問(厚生労働省HPへ)',
          link:
            'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html',
        },
        {
          title: '広島コロナお知らせQR',
          link: 'https://www.pref.hiroshima.lg.jp/site/2019-ncov/ncov-qr.html',
        },
        {
          title: '新型コロナウイルス感染症対策取組宣言店',
          link:
            'https://www.pref.hiroshima.lg.jp/soshiki/58/inshokusengenten.html',
          divider: true,
        },
        {
          title: '当サイトについて',
          link: this.localePath('/about'),
        },
        {
          title: 'お問い合わせ先一覧',
          link: this.localePath('/contacts'),
        },
        {
          title: '広島県公式ホームページ',
          link: 'https://www.pref.hiroshima.lg.jp/',
        },
      ]
    },
  },
  watch: {
    $route: 'handleChageRoute',
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: #707070;
  @include font-size(13);
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: bold;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  @include font-size(14);
}

.SideNavigation-Footer {
  padding-top: 20px;
}

.SideNavigation-Social {
  display: flex;
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}

.SideNavigation-Copyright {
  display: block;
  margin-top: 15px;
  color: $gray-1;
  line-height: 1.3;
  font-weight: bold;
  @include font-size(10);
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
