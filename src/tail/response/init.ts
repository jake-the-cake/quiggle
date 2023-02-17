import { BasicRequest } from '../../__types__/responseTypes'
import { defaultResponseObject } from './defaults'

export const initResponseObject: BasicRequest = (res) => {
  // if (!next) return defaultResponseObject
  res.obj = defaultResponseObject
  // next()
}

console.log('tail > response > init')
