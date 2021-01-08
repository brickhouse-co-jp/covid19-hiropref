import dayjs from 'dayjs'

// import Data from '@/data/data.json'

export const formatCityInfectedNumber = (
  Data: { 居住地: string; 年代: string; date: string }[]
): Object[] => {
  const RubyLabel: { area: string; ruby: string; count: number }[] = [
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

  // 日付フォーマット関数
  function formatDate(dateString: string) {
    return dayjs(dateString).format('YYYYMMDD')
  }

  // 最新日付とオブジェクトの日付比較関数
  function filterDate(item: { date: string }) {
    const dataDate = formatDate(item.date)
    if (dataDate === LatestDate) {
      return true
    }
  }
  const patients = Data
  // 最終行のオブジェクトから最新日付を取得
  const LatestDate: string = formatDate(patients.slice(-1)[0].date)
  // 最新日付と一致するdateを持つオブジェクトを抽出
  const LatestPatientsData = patients.filter(filterDate)
  // 最新日付のオブジェクトから居住地のみを取得
  const arrayCity = LatestPatientsData.map((obj) => obj['居住地'])

  arrayCity.forEach((Element) => {
    switch (Element) {
      case '広島市':
        RubyLabel[0].count = RubyLabel[0].count + 1
        break
      case '呉市':
        RubyLabel[1].count = RubyLabel[1].count + 1
        break
      case '福山市':
        RubyLabel[2].count = RubyLabel[2].count + 1
        break
      case '安芸太田町':
        RubyLabel[3].count = RubyLabel[3].count + 1
        break
      case '安芸高田市':
        RubyLabel[4].count = RubyLabel[4].count + 1
        break
      case '江田島市':
        RubyLabel[5].count = RubyLabel[5].count + 1
        break
      case '大崎上島町':
        RubyLabel[6].count = RubyLabel[6].count + 1
        break
      case '大竹市':
        RubyLabel[7].count = RubyLabel[7].count + 1
        break
      case '尾道市':
        RubyLabel[8].count = RubyLabel[8].count + 1
        break
      case '海田町':
        RubyLabel[9].count = RubyLabel[9].count + 1
        break
      case '北広島町':
        RubyLabel[10].count = RubyLabel[10].count + 1
        break
      case '熊野町':
        RubyLabel[11].count = RubyLabel[11].count + 1
        break
      case '坂町':
        RubyLabel[12].count = RubyLabel[12].count + 1
        break
      case '庄原市':
        RubyLabel[13].count = RubyLabel[13].count + 1
        break
      case '神石高原町':
        RubyLabel[14].count = RubyLabel[14].count + 1
        break
      case '世羅町':
        RubyLabel[15].count = RubyLabel[15].count + 1
        break
      case '竹原市':
        RubyLabel[16].count = RubyLabel[16].count + 1
        break
      case '廿日市市':
        RubyLabel[17].count = RubyLabel[17].count + 1
        break
      case '東広島市':
        RubyLabel[18].count = RubyLabel[18].count + 1
        break
      case '府中市':
        RubyLabel[19].count = RubyLabel[19].count + 1
        break
      case '府中町':
        RubyLabel[20].count = RubyLabel[20].count + 1
        break
      case '三原市':
        RubyLabel[21].count = RubyLabel[21].count + 1
        break
      case '三次市':
        RubyLabel[22].count = RubyLabel[22].count + 1
        break
      case '広島県外':
        RubyLabel[23].count = RubyLabel[23].count + 1
        break
      case '非公表':
        RubyLabel[24].count = RubyLabel[24].count + 1
        break
    }
  })
  return RubyLabel
}
