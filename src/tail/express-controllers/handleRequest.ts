import { BasicRequest, ResposeObject } from '../../__types__/responseTypes'

export const getOne: BasicRequest = function (req, res) {
  res.status(200).json(initResponseObject())
}

export function initResponseObject(): ResposeObject {
  return {
    success: false,
    statusCode: 500, // default to server error
    errors: null,
    warnings: null,
    data: null
  }
}
