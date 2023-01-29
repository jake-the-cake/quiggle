import { colorObject } from './defaults'
const { prefix, suffix, reset, color, layer } = colorObject

type StringIndex = {[key: string]: string}

const createColorSetting = function (L: string, C: string): string {
  const returnString = prefix + (layer as StringIndex)[L] + (color as StringIndex)[C] + suffix
  return returnString
}

export class Logger {
  config: any

  constructor(config?: any) {
    this.config = config
  }
}
