import { BasicRequest, ResposeObject } from '../../__types__/responseTypes'

const defaultResponseObject: ResposeObject = {
  success: false,
  statusCode: 500,
  errors: null,
  warnings: null,
  data: null
}

export const initResponseObject: BasicRequest = (req, res, next) => {
  if (!next) return defaultResponseObject
  req.responseObject = defaultResponseObject
  next()
}

export const setDataResponse = ( obj: ResposeObject, statusCode: number): void => {
  obj.statusCode = statusCode
  obj.success = true
  obj.errors = null
}

export const getOne: BasicRequest = (req, res) => {

  res !== null && res.status(200).json(req.responseObject)
}
