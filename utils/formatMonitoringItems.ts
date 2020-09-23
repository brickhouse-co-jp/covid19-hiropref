// monitoring_items.json の型チェック用

import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

type DataKey =
  | '新規陽性者数'
  | '陽性率(広島市)'
  | '検査件数(広島市)'
  | '陽性率(呉市)'
  | '検査件数(呉市)'
  | '陽性率(福山市)'
  | '検査件数(福山市)'
  | '陽性率(県管轄)'
  | '検査件数(県管轄)'
  | '入院患者数'
  | '入院患者確保病床数'
  | '宿泊療養施設療養者数'
  | '宿泊療養施設確保室数'
  | '感染経路不明(公表時点)'
  | '検査件数(合計)'
  | '陽性率(合計)'

type RawData = {
  新規陽性者数: number
  '陽性率(広島市)': number
  '検査件数(広島市)': number
  '陽性率(呉市)': number
  '検査件数(呉市)': number
  '陽性率(福山市)': number
  '検査件数(福山市)': number
  '陽性率(県管轄)': number
  '検査件数(県管轄)': number
  入院患者数: number
  入院患者確保病床数: string
  宿泊療養施設療養者数: number
  宿泊療養施設確保室数: string
  '感染経路不明(公表時点)': number
  '検査件数(合計)': number
  '陽性率(合計)': number
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

  const toInteger = getCommaSeparatedNumberToFixedFunction(0)
  const toNumberIn10thPlace = getCommaSeparatedNumberToFixedFunction(1)

  return {
    新規陽性者数: {
      value: toNumberIn10thPlace(rawDataObj['新規陽性者数']),
      unit: unitPerson,
    },
    '検査件数(広島市)': {
      value: toNumberIn10thPlace(rawDataObj['検査件数(広島市)']),
      unit: unitReports,
    },
    '陽性率(広島市)': {
      value: toNumberIn10thPlace(rawDataObj['陽性率(広島市)']),
      unit: unitPercentage,
    },
    '検査件数(呉市)': {
      value: toNumberIn10thPlace(rawDataObj['検査件数(呉市)']),
      unit: unitReports,
    },
    '陽性率(呉市)': {
      value: toNumberIn10thPlace(rawDataObj['陽性率(呉市)']),
      unit: unitPercentage,
    },
    '検査件数(福山市)': {
      value: toNumberIn10thPlace(rawDataObj['検査件数(福山市)']),
      unit: unitReports,
    },
    '陽性率(福山市)': {
      value: toNumberIn10thPlace(rawDataObj['陽性率(福山市)']),
      unit: unitPercentage,
    },
    '検査件数(県管轄)': {
      value: toNumberIn10thPlace(rawDataObj['検査件数(県管轄)']),
      unit: unitReports,
    },
    '陽性率(県管轄)': {
      value: toNumberIn10thPlace(rawDataObj['陽性率(県管轄)']),
      unit: unitPercentage,
    },
    入院患者数: {
      value: toInteger(rawDataObj['入院患者数']),
      unit: unitPerson,
    },
    入院患者確保病床数: {
      value: rawDataObj['入院患者確保病床数'],
      unit: null,
    },
    宿泊療養施設療養者数: {
      value: toInteger(rawDataObj['宿泊療養施設療養者数']),
      unit: unitPerson,
    },
    宿泊療養施設確保室数: {
      value: rawDataObj['宿泊療養施設確保室数'],
      unit: null,
    },
    '感染経路不明(公表時点)': {
      value: toInteger(rawDataObj['感染経路不明(公表時点)']),
      unit: unitPerson,
    },
    '検査件数(合計)': {
      value: toInteger(rawDataObj['検査件数(合計)']),
      unit: unitReports,
    },
    '陽性率(合計)': {
      value: toNumberIn10thPlace(rawDataObj['陽性率(合計)']),
      unit: unitPercentage,
    },
  }
}
