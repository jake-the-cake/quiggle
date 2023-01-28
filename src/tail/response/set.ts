import { ResposeObject } from '../../__types__/responseTypes'

export const setDataResponse = (obj: ResposeObject, statusCode: number): void => {
  obj.statusCode = statusCode
  obj.success = true
  obj.errors = null
}

export const setErrorResponse = (obj: ResposeObject, statusCode: number): void => {
  obj.statusCode = statusCode
  obj.success = false
  obj.data = null
}

console.log('tail > response > set')
