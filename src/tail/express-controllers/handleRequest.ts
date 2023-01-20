import { BasicRequest, ResposeObject } from '../../__types__/responseTypes'

const defaultResponseObject: ResposeObject = {
  success: false,
  statusCode: 500,
  errors: null,
  warnings: null,
  data: null
}

export const initResponseObject: BasicRequest = (req, res, next) => {
  const obj = defaultResponseObject
  if (next) {
    req.responseObject = obj
    next()
  } else return obj // for testing
}

export const getOne: BasicRequest = (req, res) => {
  // const obj = initResponseObject()
  console.log('this is a route')
  res !== null && res.status(200).json(req.responseObject)
}
