// import Data from '@/data/data.json'
import MonitoringItems from '@/data/monitoring_items.json'

// const cities: string[] = [
//   '広島市',
//   '呉市',
//   '福山市',
//   '安芸太田町',
//   '安芸高田市',
//   '江田島市',
//   '大崎上島町',
//   '大竹市',
//   '尾道市',
//   '海田町',
//   '北広島町',
//   '熊野町',
//   '坂町',
//   '庄原市',
//   '神石高原町',
//   '世羅町',
//   '竹原市',
//   '廿日市市',
//   '東広島市',
//   '府中市',
//   '府中町',
//   '三原市',
//   '三次市',
//   '広島県外',
//   '非公表',
// ]

// const patients = Data.patients.data
// const LatestDate = patients.slice(-1)[0].date

// function filterDate(item) {
//   if (item.date >= LatestDate) {
//     return true
//   }
// }

// const LatestPatientsData = patients.filter(filterDate)

// console.log(LatestPatientsData)

// for (const data in LatestPatientsData) {
//   for (const city in cities) {
//     if (city === data['居住地']) {
//       console.log('sefasdfsefafsefasdfasdfasdfse')
//     }
//   }
// }

export const SetMetaDiscription = (): string => {
  const DailyNewCases = MonitoringItems.data['新規陽性者数']
  const InfectionStatusChangeDate = MonitoringItems.data[
    '感染状況更新日付'
  ].replace('2020/', '')
  const discription =
    InfectionStatusChangeDate +
    'の県内の感染者数は' +
    DailyNewCases +
    '人です。' +
    '当サイトは新型コロナウイルス感染症に関する最新情報を提供するために、広島県が開設したものです。'
  return discription
}
