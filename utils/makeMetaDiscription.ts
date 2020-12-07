import Data from '@/data/data.json'
import MonitoringItems from '@/data/monitoring_items.json'

const patients = Data.patients.data
const LatestDate = patients.slice(-1)[0].date

// 最新日付のオブジェクトを取得
const LatestPatientsData = patients.filter(filterDate)
function filterDate(item: any) {
  if (item.date >= LatestDate) {
    return true
  }
}
// 最新日付のオブジェクトから居住地のみを取得
const arrayCity = LatestPatientsData.map((obj) => obj['居住地'])
// 居住地ごとの件数を確認してオブジェクト化
const countCity: any = {}
for (let i = 0; i < arrayCity.length; i++) {
  const elm = arrayCity[i]
  countCity[elm] = (countCity[elm] || 0) + 1
}
// 居住地ごとの件数でソート(降順)
const objCountCity = Object.entries(countCity)
objCountCity.sort(function (p1: any, p2: any) {
  const key = p1[1]
  const val = p2[1]
  return val - key
})
// ソートした配列をオブジェクトに変換
const sortCountCity = Object.fromEntries(objCountCity)
// 市町名を抽出
const cityName = Object.keys(sortCountCity)
// 市町の感染者数を抽出
const cityInfectedCount = Object.values(sortCountCity)
// 市町:~人の形にフォーマット
const cityCntDiscription: any = []
for (const cn in cityName) {
  cityCntDiscription.push(cityName[cn] + ':' + cityInfectedCount[cn] + '人')
}

// metadiscription用文言作成
export const SetMetaDiscription = (): string => {
  const cityCnt = cityCntDiscription
  const DailyNewCases = MonitoringItems.data['新規陽性者数']
  const InfectionStatusChangeDate = MonitoringItems.data[
    '感染状況更新日付'
  ].replace('2020/', '')
  const discription =
    InfectionStatusChangeDate +
    'の県内の感染者数は' +
    DailyNewCases +
    '人です。' +
    cityCnt +
    ' 当サイトは新型コロナウイルス感染症に関する最新情報を提供するために、広島県が開設したものです。'
  return discription
}
