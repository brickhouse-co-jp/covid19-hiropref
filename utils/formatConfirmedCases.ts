type DataType = {
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
          // children: [
          //   {
          //     attr: '軽症・中等症'
          //     value: number
          //   },
          //   {
          //     attr: '重症'
          //     value: number
          //   }
          // ]
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '宿泊療養'
          value: number
        },
        {
          attr: '施設療養'
          value: number
        },
        {
          attr: 'その他'
          value: number
        },
        {
          attr: '重症者数'
          value: number
        },
        {
          attr: '中等症者数'
          value: number
        }
        // {
        //   attr: '調査中'
        //   value: number
        // },
      ]
    }
  ]
}

type ConfirmedCasesType = {
  陽性者数: number
  入院中: number
  // 軽症中等症: number
  // 重症: number
  宿泊療養: number
  施設療養: number
  その他: number
  // 調査中: number
  死亡: number
  退院: number
  重症者数: number
  中等症者数: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr?: string
  value?: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    陽性者数: getSelectedItem(data, '陽性患者数'),
    入院中: getSelectedItem(data, '入院中'),
    // 軽症中等症: getSelectedItem(data, '軽症・中等症'),
    // 重症: getSelectedItem(data, '重症'),
    宿泊療養: getSelectedItem(data, '宿泊療養'),
    施設療養: getSelectedItem(data, '施設療養'),
    その他: getSelectedItem(data, 'その他'),
    // 調査中: getSelectedItem(data, '調査中'),
    死亡: getSelectedItem(data, '死亡'),
    退院: getSelectedItem(data, '退院'),
    重症者数: getSelectedItem(data, '重症者数'),
    中等症者数: getSelectedItem(data, '中等症者数'),
  } as ConfirmedCasesType
}
