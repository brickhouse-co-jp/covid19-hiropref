// monitoring_items.json の型チェック用

import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

type DataKey =
  | '新規陽性者数'
  | '入院患者数'
  | '入院患者確保病床数'
  | '宿泊療養施設療養者数'
  | '宿泊療養施設確保室数'
  | '感染経路不明(公表時点)'
  | '検査件数(合計)'
  | '陽性件数(合計)'
  | '病床逼迫具合'
  | '療養者数'
  | 'PCR陽性率'
  | '新規報告者数'
  | '感染経路不明割合(7日)'
  | '感染経路不明割合(累計)'
  | '確保病床の使用率'
  | '入院率'
  | '重症病床における確保病床の使用率'
  | '検査件数(行政検査)'
  | '陽性件数(行政検査)'
  | '検査件数(医療機関検査)'
  | '陽性件数(医療機関検査)'
  | '即応病床数'
  | '即応病床使用率'
  | '確保病床数(入院)'

type RawData = {
  新規陽性者数: number
  入院患者数: number
  入院患者確保病床数: number
  宿泊療養施設療養者数: number
  宿泊療養施設確保室数: number
  '感染経路不明(公表時点)': number
  '検査件数(合計)': number
  '陽性件数(合計)': number
  病床逼迫具合: number
  療養者数: number
  PCR陽性率: number
  新規報告者数: number
  '感染経路不明割合(7日)': number
  '感染経路不明割合(累計)': number
  確保病床の使用率: number
  入院率: number
  重症病床における確保病床の使用率: number
  '検査件数(行政検査)': number
  '陽性件数(行政検査)': number
  '検査件数(医療機関検査)': number
  '陽性件数(医療機関検査)': number
  即応病床数: number
  即応病床使用率: number
  '確保病床数(入院)': number
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

interface MonitoringItemValue {
  value: string
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
}

export type Unit = {
  text: string // *********** もとの日本語のテキスト
  translatable: boolean // ** 翻訳が必要かどうか
}

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export default (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitReports: Unit = {
    text: '件.reports',
    translatable: true,
  }
  const unitPercentage: Unit = { text: '%', translatable: false }
  const unitRoom: Unit = { text: '室', translatable: false }
  const unitBed: Unit = { text: '床', translatable: false }

  const toInteger = getCommaSeparatedNumberToFixedFunction(0)
  const toNumberIn10thPlace = getCommaSeparatedNumberToFixedFunction(1)
  const toNumberInHundredthsPlace = getCommaSeparatedNumberToFixedFunction(2)

  const retVal = {
    新規陽性者数: {
      value: toInteger(rawDataObj['新規陽性者数']),
      unit: unitPerson,
    },
    入院患者数: {
      value: toInteger(rawDataObj['入院患者数']),
      unit: unitPerson,
    },
    入院患者確保病床数: {
      value: toInteger(rawDataObj['入院患者確保病床数']),
      unit: unitBed,
    },
    宿泊療養施設療養者数: {
      value: toInteger(rawDataObj['宿泊療養施設療養者数']),
      unit: unitPerson,
    },
    宿泊療養施設確保室数: {
      value: toInteger(rawDataObj['宿泊療養施設確保室数']),
      unit: unitRoom,
    },
    '感染経路不明(公表時点)': {
      value: toInteger(rawDataObj['感染経路不明(公表時点)']),
      unit: unitPerson,
    },
    '検査件数(合計)': {
      value: toInteger(rawDataObj['検査件数(合計)']),
      unit: unitReports,
    },
    '陽性件数(合計)': {
      value: toInteger(rawDataObj['陽性件数(合計)']),
      unit: unitReports,
    },
    病床逼迫具合: {
      value: toNumberIn10thPlace(rawDataObj['病床逼迫具合']),
      unit: unitPercentage,
    },
    療養者数: {
      value: toNumberInHundredthsPlace(rawDataObj['療養者数']),
      unit: unitPerson,
    },
    PCR陽性率: {
      value: toNumberIn10thPlace(rawDataObj['PCR陽性率']),
      unit: unitPercentage,
    },
    新規報告者数: {
      value: toNumberInHundredthsPlace(rawDataObj['新規報告者数']),
      unit: unitPerson,
    },
    '感染経路不明割合(7日)': {
      value: toNumberIn10thPlace(rawDataObj['感染経路不明割合(7日)']),
      unit: unitPercentage,
    },
    '感染経路不明割合(累計)': {
      value: toNumberIn10thPlace(rawDataObj['感染経路不明割合(累計)']),
      unit: unitPercentage,
    },
    確保病床の使用率: {
      value: toNumberIn10thPlace(rawDataObj['確保病床の使用率']),
      unit: unitPercentage,
    },
    入院率: {
      value: toNumberIn10thPlace(rawDataObj['入院率']),
      unit: unitPercentage,
    },
    '検査件数(行政検査)': {
      value: toInteger(rawDataObj['検査件数(行政検査)']),
      unit: unitReports,
    },
    '陽性件数(行政検査)': {
      value: toInteger(rawDataObj['陽性件数(行政検査)']),
      unit: unitReports,
    },
    '検査件数(医療機関検査)': {
      value: toInteger(rawDataObj['検査件数(医療機関検査)']),
      unit: unitReports,
    },
    '陽性件数(医療機関検査)': {
      value: toInteger(rawDataObj['陽性件数(医療機関検査)']),
      unit: unitReports,
    },
    即応病床数: {
      value: toInteger(rawDataObj['即応病床数']),
      unit: unitBed,
    },
    '確保病床数(入院)': {
      value: toInteger(rawDataObj['確保病床数(入院)']),
      unit: unitBed,
    },
    即応病床使用率: {
      value: toNumberIn10thPlace(rawDataObj['即応病床使用率']),
      unit: unitPercentage,
    },
    重症病床における確保病床の使用率: {
      value: toNumberIn10thPlace(
        rawDataObj['重症病床における確保病床の使用率']
      ),
      unit: unitPercentage,
    },
  }

  if (retVal['検査件数(行政検査)'].value === '0') {
    retVal['陽性件数(行政検査)'].value = '-'
  }
  if (retVal['検査件数(医療機関検査)'].value === '0') {
    retVal['陽性件数(医療機関検査)'].value = '-'
  }
  if (retVal['検査件数(合計)'].value === '0') {
    retVal['陽性件数(合計)'].value = '-'
  }

  return retVal
}
