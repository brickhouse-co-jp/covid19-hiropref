import Data from '@/data/data.json'
export const formatCityInfectedNumber = (): any => {
  const RubyLabel: any = [
    {
      area: '広島市',
      ruby: 'ひろしまし',
      count: 0,
    },
    {
      area: '呉市',
      ruby: 'くれし',
      count: 0,
    },
    {
      area: '福山市',
      ruby: 'ふくやまし',
      count: 0,
    },
    {
      area: '安芸太田町',
      ruby: 'あきおおたちょう',
      count: 0,
    },
    {
      area: '安芸高田市',
      ruby: 'あきたかたし',
      count: 0,
    },
    {
      area: '江田島市',
      ruby: 'えたじまし',
      count: 0,
    },
    {
      area: '大崎上島町',
      ruby: 'おおさきかみじまちょう',
      count: 0,
    },
    {
      area: '大竹市',
      ruby: 'おおたけし',
      count: 0,
    },
    {
      area: '尾道市',
      ruby: 'おのみちし',
      count: 0,
    },
    {
      area: '海田町',
      ruby: 'かいたちょう',
      count: 0,
    },
    {
      area: '北広島町',
      ruby: 'きたひろしまちょう',
      count: 0,
    },
    {
      area: '熊野町',
      ruby: 'くまのちょう',
      count: 0,
    },
    {
      area: '坂町',
      ruby: 'さかちょう',
      count: 0,
    },
    {
      area: '庄原市',
      ruby: 'しょうばらし',
      count: 0,
    },
    {
      area: '神石高原町',
      ruby: 'じんせきこうげんちょう',
      count: 0,
    },
    {
      area: '世羅町',
      ruby: 'せらちょう',
      count: 0,
    },
    {
      area: '竹原市',
      ruby: 'たけはらし',
      count: 0,
    },
    {
      area: '廿日市市',
      ruby: 'はつかいちし',
      count: 0,
    },
    {
      area: '東広島市',
      ruby: 'ひがしひろしまし',
      count: 0,
    },
    {
      area: '府中市',
      ruby: 'ふちゅうし',
      count: 0,
    },
    {
      area: '府中町',
      ruby: 'ふちゅうちょう',
      count: 0,
    },
    {
      area: '三原市',
      ruby: 'みはらし',
      count: 0,
    },
    {
      area: '三次市',
      ruby: 'みよしし',
      count: 0,
    },
    {
      area: '広島県外',
      ruby: '-',
      count: 0,
    },
    {
      area: '非公表',
      ruby: '-',
      count: 0,
    },
  ]

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
  // 居住地ごとの件数を配列にしてソート(降順)
  const objCountCity = Object.entries(countCity)
  objCountCity.sort(function (p1: any, p2: any) {
    const key = p1[1]
    const val = p2[1]
    return val - key
  })
  // ソートした配列をオブジェクトに変換
  const sortCountCity: any = Object.fromEntries(objCountCity)
  // 市町ごとの感染者数を抽出
  const cityInfectedCount: any = Object.values(sortCountCity)
  // 市町名の配列を抽出
  const cityName = Object.keys(sortCountCity)
  // // RubyLabelの市町名の配列を抽出
  const arrayRubyLabel = RubyLabel.map((obj: { area: any }) => obj.area)
  for (const rn in arrayRubyLabel) {
    for (const cn in cityName) {
      if (cityName[cn] === arrayRubyLabel[rn]) {
        RubyLabel[rn].count = cityInfectedCount[cn]
      }
    }
  }
  return RubyLabel
}
