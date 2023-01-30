type ColorObjectProps = {
  prefix: string
  suffix: string
  reset: string
  color: {
    black: string
    red: string
    green: string
    yellow: string
    blue: string
    magenta: string
    cyan: string
    white: string
  }
  layer: {
    font: string
    bg: string
  }
}

export const colorObject: ColorObjectProps = {
  prefix: '\x1b[',
  suffix: 'm',
  reset: '\x1b[0m',
  color: {
    black: '0',
    red: '1',
    green: '2',
    yellow: '3',
    blue: '4',
    magenta: '5',
    cyan: '6',
    white: '7'
  },
  layer: {
    font: '3',
    bg: '4'
  }
}
