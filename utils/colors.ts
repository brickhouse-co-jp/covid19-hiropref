export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#964b52',
  fillColor: '#ff8e8e',
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#cd5c5c',
  fillColor: '#ffc1c1',
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#B03D2E',
  fillColor: '#ffe0e0',
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#cbe1c8',
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#283899',
  fillColor: '#283899',
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#1b4d30',
  fillColor: '#1b4d30',
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#964b52',
  fillColor: '#e2eee2',
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    case 4:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC, surfaceStyleG]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

export function getGraphSeriesColor(series: Series) {
  const styles: { [key in Series]: SurfaceStyle } = {
    A: surfaceStyleA,
    B: surfaceStyleB,
    C: surfaceStyleC,
    D: surfaceStyleD,
    E: surfaceStyleE,
    F: surfaceStyleF,
    G: surfaceStyleG,
  }
  return styles[series]
}
