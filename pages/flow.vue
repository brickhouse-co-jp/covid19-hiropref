<template>
  <div>
    <div :class="$style.title">
      <covid-icon aria-hidden="true" />
      <page-header :class="$style.text">
        新型コロナウイルス感染症が心配なときに
      </page-header>
      <printer-button
        :wrapper-class="$style.printerButton"
        :class="$style.dPrint"
        to="/print/flow"
      />
    </div>
    <div :class="$style.container">
      <h3 :class="$style.fzTitle">
        電話相談窓口について
      </h3>
      <div :class="$style.sectionNoBorder">
        <h4 :class="$style.sxnHeading">
          相談窓口に御相談いただく目安
        </h4>
        <h5 :class="$style.fontSubtitle">
          少なくとも以下のいずれかに該当する場合には、すぐに御相談ください。(これらに該当しない場合の相談も可能です。)
        </h5>
        <ul :class="$style.list">
          <li>
            息苦しさ(呼吸困難)、強いだるさ(倦怠感)、高熱等の強い症状のいずれかがある場合。
          </li>
          <li>
            重症化しやすい方(高齢者、糖尿病、心不全、呼吸器疾患(COPD等)の基礎疾患がある方や透析を受けている方、免疫抑制剤や抗がん剤等を用いている方)で、発熱や咳などの比較的軽い風邪の症状がある場合。
          </li>
          <li>
            上記以外の方で発熱や咳など比較的軽い風邪の症状が続く場合(症状が4日以上続く場合、強い症状と思う場合、解熱剤などを飲み続けなければならない方は、すぐに相談)
          </li>
        </ul>
      </div>
      <h4 :class="[$style.fzTelWindow, $style.mtTelWindow]">
        電話相談窓口一覧
      </h4>
      <v-row class="d-flex flex-row">
        <v-col cols="12" md="6">
          <v-card class="p-3" height="100%">
            <v-card-title>
              <h5 :class="$style.fzCardTitle">
                広島市､呉市､福山市以外の市町にお住まいの方
              </h5>
            </v-card-title>
            <v-card-text :class="$style.p0">
              <v-card-subtitle :class="$style.fzCardSubTitle"
                >広島県各保健所</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="orange lighten-2" text class="pl-2">
                  <a href="tel:0825132567" :class="$style.fzCardBtn"
                    >082-513-2567</a
                  >
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="p-3" height="100%">
            <v-card-title>
              <h5 :class="$style.fzCardTitle">
                広島市にお住まいの方
              </h5>
            </v-card-title>
            <v-card-text :class="$style.p0">
              <v-card-subtitle :class="$style.fzCardSubTitle">
                広島市各保健センター</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="orange lighten-2" text class="pl-2">
                  <a
                    href="tel:082-241-4566"
                    :class="[$style.fzCardBtn, $style.mtTel]"
                    >082-241-4566</a
                  >
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="p-3" height="100%">
            <v-card-title>
              <h5 :class="$style.fzCardTitle">
                呉市にお住まいの方
              </h5>
            </v-card-title>
            <v-card-text :class="$style.p0">
              <v-card-subtitle :class="$style.fzCardSubTitle">
                呉市保健所</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="orange lighten-2" text class="pl-2">
                  <a
                    href="tel:0823-22-5858"
                    :class="[$style.fzCardBtn, $style.mtTel]"
                    >0823-22-5858</a
                  >
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="p-3" height="100%">
            <v-card-title>
              <h5 :class="$style.fzCardTitle">
                福山市にお住まいの方
              </h5>
            </v-card-title>
            <v-card-text :class="$style.p0">
              <v-card-subtitle :class="$style.fzCardSubTitle">
                福山市保健所</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="orange lighten-2" text class="pl-2">
                  <a
                    href="tel:084-928-1350"
                    :class="[$style.fzCardBtn, $style.mtTel]"
                    >084-928-1350</a
                  >
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div :class="$style.sectionNoBorder">
        <h4 :class="$style.sxnHeading">
          相談･受診の前に心がけていただきたいこと
        </h4>
        <ul :class="$style.list">
          <li>
            発熱等の風邪症状が見られるときは、学校や会社を休み外出を控える。
          </li>
          <li>
            発熱等の風邪症状が見られたら、毎日、体温を測定して記録しておく。
          </li>
          <li>
            基礎疾患（持病）をお持ちの方で症状に変化がある方、新型コロナウイルス感染症以外の病気が心配な方は、まずは、かかりつけ医等に電話で御相談ください。
          </li>
        </ul>
      </div>
      <div :class="$style.sectionNoBorder">
        <h4 :class="$style.sxnHeading">
          医療機関にかかるときのお願い
        </h4>
        <ul :class="$style.list">
          <li>
            複数の医療機関を受診することにより感染を拡大した例がありますので、複数の医療機関を受診することはお控えください。
          </li>
          <li>
            医療機関を受診する際にはマスクを着用するほか、手洗いや咳エチケット(咳やくしゃみをする際に、マスクやティッシュ、ハンカチ、袖・肘の内側などを使って、口や鼻をおさえる)の徹底をお願いします。
          </li>
        </ul>
      </div>
      <div :class="$style.sectionAttention">
        <h4 :class="$style.fontAttention">
          妊娠中の方へ
        </h4>
        <p :class="$style.pAt">
          念のため、重症化しやすい方と同様に、早めに相談窓口に御相談ください。
        </p>
      </div>
      <div :class="$style.sectionAttention">
        <h4 :class="$style.fontAttention">
          お子様をお持ちの方へ
        </h4>
        <p :class="$style.pAt">
          小児については、小児科医による診察が望ましく、かかりつけ小児医療機関に電話で御相談ください。
        </p>
      </div>
      <div :class="$style.sectionAttention">
        <h4 :class="$style.fontAttention">
          障害のある方へ
        </h4>
        <p :class="$style.pAt">
          聴覚に障害のある方、失語症の方、音声機能障害の方など、電話での相談が難しい方に対して、<a
            href="https://www.pref.hiroshima.lg.jp/soshiki/62/soudan-coronavirus.html"
            target="_blank"
            >FAXによる相談</a
          >を受け付けています。
        </p>
      </div>
      <div :class="$style.sectionAttention">
        <h4 :class="$style.fontAttention">
          がん患者及びご家族の皆さまへ
        </h4>
        <p :class="$style.pAt">
          新型コロナウイルス感染症の拡大により、今後の治療に不安を抱えておられるがん患者さんやその家族の方も多いと思います。こうした状況の中で、今後の治療など分からないことや心配なことがあるときは、ご自身で判断なさらず、必ず主治医やがん相談支援センターにご相談ください。<a
            href="https://www.pref.hiroshima.lg.jp/site/gan-net/korona.html"
            target="_blank"
            >問合せ先など詳しくはこちら</a
          >をご覧ください。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import AppLink from '@/components/AppLink.vue'
// import IconBed from '@/static/flow/bed.svg'
// import IconPhone from '@/static/flow/phone.svg'
import { MetaInfo } from 'vue-meta'

import PageHeader from '@/components/PageHeader.vue'
import PrinterButton from '@/components/PrinterButton.vue'
import CovidIcon from '@/static/covid.svg'

export default {
  components: {
    CovidIcon,
    PageHeader,
    PrinterButton,
    // AppLink,
    // IconPhone,
    // IconBed,
  },
  head(): MetaInfo {
    return {
      title: '新型コロナウイルス感染症が心配なときに' as string,
    }
  },
}
</script>

<style scoped>
.v-card__subtitle {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 14px !important;
}
</style>

<style lang="scss" module>
/* stylelint-disable no-descending-specificity */

$fzXs: 10;
$fzSmall: 14;
$fzRegular: 16;
$fzMedium: 18;
$fzLarge: 20;
$fzHuge: 22;
$fzHeading: 24;
$fzHeadingL: 26;
$fzHeadingXl: 28;
$fzHeading2xl: 30;

$padding: 20;
$margin: 20;

.fzTitle {
  font-size: $fzHeadingXl * 1px;
}
.fontAttention {
  font-size: $fzRegular * 1px;
}
.fzCardTitle {
  font-size: $fzSmall * 1px;
}
.fzCardSubTitle {
  font-size: $fzSmall * 1.3px;
}
.fzCardBtn {
  font-size: $fzSmall * 1px;
}
.p0 {
  padding: 0 !important;
}
.h100 {
  height: 100%;
}
.mtTelWindow {
  margin-top: $margin * 1px;
}
.fzTelWindow {
  @include font-size($fzHeadingL);
}
.dPrint {
  display: inline-block;
}
.list {
  li {
    margin-left: $margin * 1.2px;
    margin-top: 3px;
  }
}
.table {
  border-collapse: collapse;
  border: 1px solid #333;
  .caption {
    p {
      font-size: $fzRegular * 1px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 5px;
    }
  }
}
.th {
  border-collapse: collapse;
  border: 1px solid #333;
  padding: 5px;
  font-size: $fzSmall * 1px;
  background-color: #f5f5f5;
}
.td {
  border-collapse: collapse;
  border: 1px solid #333;
  padding: 5px;
  font-size: $fzSmall * 1px;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: $margin * 1px;
  > svg {
    width: 30px;
    height: 30px;
    > path:not(:first-of-type) {
      fill: $gray-2;
    }
  }
  .text {
    margin-left: 8px;
  }
  .printerButton {
    margin: 0 0 0 auto;
  }
}
.container {
  background-color: $white;
  box-shadow: $shadow;
  border: 0.5px solid $gray-4 !important;
  border-radius: 4px;
  padding: $padding * 1px;
  line-height: 1.35;
  color: $gray-2;
  @include font-size($fzRegular);

  > .conHeading {
    @include font-size($fzHeadingL);
  }
  > .anchorLead {
    margin-top: $margin * 1.5px;
    color: $green-1;
    font-weight: bold;
    text-align: center;
    @include font-size($fzHuge);
  }
  ul {
    padding-left: 0; // override Vuetify style
  }
  p {
    margin-bottom: 0; // override Vuetify style
  }
}
.anchor {
  padding-top: $margin * 1px;
  padding-bottom: $margin * 1px;
  background-color: $white;
  position: relative;
  .anchorList {
    margin: 0 -6px;
    display: flex;
  }
  .anchorItem {
    display: flex;
    width: (100% / 3);
    padding: 0 6px;
    flex: 0 0 auto;
  }
  .anchorLink {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 auto;
    position: relative;
    padding: 20px 20px 40px;
    width: 100%;
    border: 4px solid $green-1;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    font-size: inherit;
    color: $gray-2;
    transition: color 0.2s;
    z-index: 2;
    > * {
      display: block;
      max-width: 100%;
      pointer-events: none;
    }
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
    }
    > svg {
      flex: 0 0 auto;
      margin-top: 20px;
      max-width: 120px;
      max-height: 120px;
      width: 100%;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translate(-50%, 50%);
      width: 0;
      height: 0;
      border-width: 9.5px 6.3px 0 6.3px;
      border-style: solid;
      border-color: $green-1 transparent transparent transparent;
      transition: border-color 0.2s;
    }
    &.active,
    &:hover {
      background-color: $green-1;
      color: $white;
      > svg path {
        fill: $white;
      }
    }
    &.active {
      &::after {
        bottom: -1px;
        transform: translate(-50%, 100%);
        border-width: 19.5px 12.99px 0 12.99px;
        transition: none;
      }
    }
    &:not(.active) {
      &:hover {
        &::after {
          border-top-color: $white;
        }
      }
    }
  }
  &.floating {
    position: fixed;
    top: 0;
    z-index: 1;
    .fig {
      display: none;
    }
  }
}
.section {
  margin-top: $margin * 1.5px;
  padding: $padding * 1px;
  border: 3px solid $gray-3;
  border-radius: 10px;
  background-color: $white;
  &.yellow {
    border-width: 4px;
    border-color: $emergency;
  }
  > * {
    line-height: 1.5;
    &:not(.box):not(.boxes):not(:first-child) {
      margin-top: $margin * 1px;
    }
  }
  > .sxnHeading {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHeadingXl);
  }
  > .sxnHeadingSmall {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .sxnText {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .hr {
    margin-top: $margin * 1px;
    padding-top: $margin * 1.5px;
    border-top: 1px solid $gray-2;
  }
}
.sectionNoBorder {
  margin-top: $margin * 0.8px;
  padding-top: $padding * 0.8px;
  padding-bottom: $padding * 1px;
  background-color: $white;
  &.yellow {
    border-width: 4px;
    border-color: $emergency;
  }
  > * {
    line-height: 1.5;
    &:not(.box):not(.boxes):not(:first-child) {
      margin-top: $margin * 1px;
    }
  }
  > .sxnHeading {
    font-weight: bold;
    @include font-size($fzHeadingL);
  }
  > .sxnHeadingSmall {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .sxnText {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .hr {
    margin-top: $margin * 1px;
    padding-top: $margin * 1.5px;
    border-top: 1px solid $gray-2;
  }
  .fontSubtitle {
    // font-weight: bold;
    font-size: $fzSmall * 1px;
  }
  li {
    font-size: $fzSmall * 1px;
  }
}
.sectionAttention {
  margin-top: $margin * 0.5px;
  padding-top: $padding * 0.7px;
  background-color: $white;
  .pAt {
    margin-top: 5px;
  }
  p {
    font-size: $fzSmall * 1px;
  }
}
.anchor + .section {
  margin-top: 0;
}
.boxes {
  display: flex;
  justify-content: space-between;
}
.box {
  margin-top: $margin * 1px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: 4px;
  padding: $padding * 1px;
  text-align: center;
  line-height: 1.65;
  &.border {
    border: 2px solid $gray-3;
  }
  &.bgGray {
    background-color: $gray-2;
    color: $white;
    .icon path {
      fill: $white; // 内包するアイコンの色を変更
    }
  }
  &.bgYellow {
    background-color: $emergency;
  }
  > .boxHeading {
    font-weight: bold;
    @include font-size($fzLarge);
  }
  > .boxLead {
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .large {
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .small {
    @include font-size($fzSmall);
  }
  > .alignLeft {
    text-align: left;
  }
  > .grow {
    flex: 1 0 auto;
  }
  > * {
    max-width: 100%;
  }
  > *:not(:first-child) {
    margin-top: $margin * 0.75px;
  }
  > .notice {
    width: 100%;
    padding: $margin * 1px;
    border-radius: 4px;
    background-color: $white;
    color: #a00000;
    text-align: center;
    font-weight: bold;
    line-height: 1.35;
    @include font-size($fzSmall);
  }
  > .contact {
    > div {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
      > dt {
        margin-right: 0.5em;
      }
      > dd {
        text-align: left;
      }
    }
    > *:not(:first-child) {
      margin-top: $margin * 1px;
    }
  }
  li {
    list-style-type: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:not(.tel) {
      > i {
        vertical-align: baseline;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .underline {
    text-decoration: underline;
  }
}
.container .box a {
  color: inherit; // for IE11
}
.boxes > .box {
  width: calc(50% - 10px);
}
.iconBed {
  max-width: 37px;
  max-height: 37px; // for IE11
  width: 100%;
}
.overrideExternalLink {
  i {
    font-size: 1em !important;
    &::before {
      color: $white;
      margin-right: 0.2em;
    }
  }
}
.tel {
  font-weight: bold;
  vertical-align: baseline;
  white-space: nowrap;
  line-height: 1px * $fzHuge * 1.35;
  padding: 0 0.25em;
  @include font-size($fzHuge);

  > svg {
    vertical-align: baseline;
    max-width: 0.7em;
    max-height: 0.7em; // for IE11
    width: 100%;
  }

  &:visited,
  &:hover,
  &:active,
  &:focus {
    outline: 1px dotted $white;
  }
}
.detail {
  text-align: center;
  .detailButton {
    @include button-text('md');
    @include font-size(20);

    margin: ($margin * 1.5px) auto 0;
    font-weight: bold;
    text-decoration: none;
    color: $green-1 !important;
    &:hover {
      color: $white !important;
    }
    .icon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
}

// 960
@include lessThan(960) {
  .dPrint {
    display: none;
  }
  .anchor {
    padding-top: 2px;
    .anchorLink {
      padding: 10px 10px 20px;
      > svg {
        margin-top: 1px;
        max-width: 80px;
        max-height: 80px;
      }
      &::after {
        bottom: 5px;
      }
    }
  }
  .boxes {
    display: block;
  }
  .boxes > .box {
    width: auto;
  }
  .fzTelWindow {
    @include font-size($fzHuge);
  }
  .sectionNoBorder {
    margin-top: $margin * 0.8px;
    padding-top: $padding * 0.8px;
    padding-bottom: $padding * 1px;
    background-color: $white;
    &.yellow {
      border-width: 4px;
      border-color: $emergency;
    }
    > * {
      line-height: 1.5;
      &:not(.box):not(.boxes):not(:first-child) {
        margin-top: $margin * 1px;
      }
    }
    > .sxnHeading {
      font-weight: bold;
      @include font-size($fzHuge);
    }
    > .sxnHeadingSmall {
      text-align: center;
      font-weight: bold;
      @include font-size($fzHuge);
    }
    > .sxnText {
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
      @include font-size($fzMedium);
    }
    > .hr {
      margin-top: $margin * 1px;
      padding-top: $margin * 1.5px;
      border-top: 1px solid $gray-2;
    }
    .fontSubtitle {
      font-weight: normal;
      font-size: $fzSmall * 1px;
    }
    li {
      font-size: $fzSmall * 1px;
    }
  }
}

// 600
@function px2vw($px, $vw: 600) {
  @return $px / $vw * 100vw;
}
@include lessThan($small) {
  .fzTitle {
    font-size: $fzHuge * 1px;
  }
  .fzTelWindow {
    font-size: px2vw($fzHeadingL);
  }
  .title {
    margin-bottom: px2vw($margin);
  }
  .container {
    padding: px2vw($padding);
    font-size: px2vw($fzRegular);
    > .conHeading {
      font-size: px2vw($fzHeadingL);
    }
    > .anchorLead {
      margin-top: px2vw($margin * 1.5);
      font-size: px2vw($fzHuge);
    }
  }
  .anchor {
    padding-top: px2vw($margin);
    .anchorLink {
      padding: px2vw(20) px2vw(20) px2vw(40);
      border-width: px2vw(4);
      border-radius: px2vw(10);
      > svg {
        margin-top: px2vw(20);
      }
      &::after {
        bottom: px2vw(20);
        border-width: px2vw(9.5) px2vw(6.3) 0 px2vw(6.3);
      }
      &.active {
        &::after {
          border-width: px2vw(19.5) px2vw(12.99) 0 px2vw(12.99);
        }
      }
    }
    &.floating {
      top: 64px; // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
    }
  }
  .section {
    //margin-top: px2vw($margin * 1.5);
    margin-top: 20px; // フローティングの都合で固定
    padding: px2vw($padding);
    border-width: px2vw(3);
    border-radius: px2vw(10);
    &.yellow {
      border-width: px2vw(3);
    }
    > * {
      &:not(.box):not(.boxes):not(:first-child) {
        margin-top: px2vw($margin);
      }
    }
    > .sxnHeading {
      font-size: px2vw($fzHeadingL);
    }
    > .sxnHeadingSmall {
      font-size: px2vw($fzHuge);
    }
    > .sxnText {
      font-size: px2vw($fzMedium);
    }
    > .hr {
      margin-top: px2vw($margin);
      padding-top: px2vw($margin * 1.5);
    }
  }
  .sectionNoBorder {
    //margin-top: px2vw($margin * 1.5);
    margin-top: 15px; // フローティングの都合で固定
    &.yellow {
      border-width: px2vw(3);
    }
    > * {
      &:not(.box):not(.boxes):not(:first-child) {
        margin-top: px2vw($margin);
      }
    }
    > .sxnHeading {
      font-size: px2vw($fzHeadingL);
    }
    > .sxnHeadingSmall {
      font-size: px2vw($fzHuge);
    }
    > .sxnText {
      font-size: px2vw($fzMedium);
    }
    > .hr {
      margin-top: px2vw($margin);
      padding-top: px2vw($margin * 1.5);
    }
  }
  .sectionAttention {
    margin-top: $margin * 0.5px;
    padding-top: $padding * 0.5px;
    padding-bottom: $padding * 1px;
    background-color: $white;
    .pAt {
      margin-top: 5px;
    }
    p {
      font-size: $fzSmall * 1px;
    }
  }
  .box {
    margin-top: px2vw($margin);
    padding: px2vw($padding);
    border-radius: px2vw(4);
    &.border {
      border-width: px2vw(2);
    }
    > .boxHeading {
      font-size: px2vw($fzLarge);
    }
    > .boxLead {
      font-size: px2vw($fzMedium);
    }
    > .large {
      font-size: px2vw($fzHuge);
    }
    > .small {
      font-size: px2vw($fzSmall);
    }
    > *:not(:first-child) {
      margin-top: px2vw($margin * 0.75);
    }
    > .notice {
      padding: px2vw($margin);
      border-radius: px2vw(4);
      font-size: px2vw($fzSmall);
    }
    > .contact {
      > *:not(:first-child) {
        margin-top: px2vw($margin);
      }
    }
  }
  .tel {
    font-size: px2vw($fzHuge);
  }
  .detail {
    .button {
      padding: px2vw(24) px2vw(36);
      margin: px2vw($margin * 1.5) auto 0;
      font-size: px2vw(20);
    }
  }
}
</style>
