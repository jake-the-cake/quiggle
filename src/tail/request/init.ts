import { BasicRequest } from '../../__types__/responseTypes'
import { defaultRequestObject } from './defaults'

export const initRequestObject: BasicRequest = (req) => {
  req.obj = defaultRequestObject
}