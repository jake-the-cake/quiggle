import { BasicRequest, ResposeObject } from '../../__types__/responseTypes'

export const initResponseObject: BasicRequest = ( req, res, next) => {
  const obj = {
    success: false,
    statusCode: 500,
    errors: null,
    warnings: null,
    data: null
  } as ResposeObject
  if ( req.body ) req.body.responseObject = obj
  if ( next ) next!()
  else return obj // for testing
}

export const getOne: BasicRequest = (req, res) => {
  // const obj = initResponseObject()
  console.log('this is a route')
  res !== null && res.status(200).json(req.body.responseObject)
}