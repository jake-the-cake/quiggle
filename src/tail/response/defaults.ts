import { ResposeObject } from "../../__types__/responseTypes"

export const defaultResponseObject: ResposeObject = {
  success: false,
  statusCode: 500,
  errors: null,
  warnings: null,
  data: null
}