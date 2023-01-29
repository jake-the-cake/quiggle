import { StringColorSettings, StringIndex } from '../../__types__/loggerTypes'
import { colorObject } from './defaults'
let { prefix, suffix, reset, color, layer } = colorObject

export function createEffectString(L: string, C: string): string {
  return prefix + (layer as StringIndex)[L] + (color as StringIndex)[C] + suffix
}

export function createString(text: string, settings?: StringColorSettings, options?: any): string{
	let returnString: string = ''
	if (settings?.bg) returnString += createEffectString('bg', settings.bg)
	if (settings?.font) returnString += createEffectString('font', settings.font)
	returnString += text
	if (options && typeof options === 'string'){
		switch(options){
			case 'noreset':
				reset = ''
		}
	}
	returnString += reset
	return returnString
}