import { BasicRequest } from '../../__types__/responseTypes'
import { defaultResponseObject } from './defaults'

export const initResponseObject: BasicRequest = (req, res, next) => {
  if (!next) return defaultResponseObject
  res.responseObject = defaultResponseObject
  next()
}

console.log('tail > response > init')
