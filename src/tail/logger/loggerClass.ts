import { colorObject } from "./defaults"
const { prefix, suffix, reset, color, layer } = colorObject

const createColorSetting = function( L: string, C: string ): string {
  return prefix + color[C] + layer[L] + suffix
}

export class Logger {
  config: any

  constructor(config: any) {
    this.config = config
    console.log('logger class')
  }
}