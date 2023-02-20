import { BasicRequest } from '../../__types__/responseTypes'
import { defaultResponseObject } from './defaults'

export const initResponseObject: BasicRequest = (res) => {
  res.obj = defaultResponseObject
}