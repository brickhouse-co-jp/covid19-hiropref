import MonitoringItems from '@/data/monitoring_items.json'

export const SetMetaDiscription = (): string => {
  const DailyNewCases = MonitoringItems.data['新規陽性者数']
  const InfectionStatusChangeDate = MonitoringItems.data[
    '感染状況更新日付'
  ].replace('2020/', '')
  const discription =
    InfectionStatusChangeDate +
    'の県内の感染者数は' +
    DailyNewCases +
    '人です。'
  return discription
}
