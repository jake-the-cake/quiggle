import { initResponseObject, setDataResponse, setErrorResponse } from '../tail/response'
import { ResposeObject } from '../__types__/responseTypes'

// Testing that the response object sets to the defaults
// const responseObject: ResposeObject = initResponseObject({}, null)!
const obj: any = {}
initResponseObject(obj)
describe('Create a response object', function () {
  test('Default success to false', () => expect(obj.obj?.success).toBe(false))
  test('Default status of 500', () => expect(obj.obj?.statusCode).toBe(500))
  test('Default errors to null', () => expect(obj.obj?.errors).toBe(null))
  test('Default warnings to null', () => expect(obj.obj?.warnings).toBe(null))
  test('Default data to null', () => expect(obj.obj?.data).toBe(null))
})

// Testing that the response object changes on success
const secondObject: ResposeObject = { ...obj.obj }
setDataResponse(secondObject, 200)
describe('Set response object params for success', function () {
  test('Set success to true', () => expect(secondObject?.success).toBe(true))
  test('Set status to 200', () => expect(secondObject?.statusCode).toBe(200))
  test('Set errors to null', () => expect(secondObject?.errors).toBe(null))
})

// Testing that the response object changes on error
const thirdObject: ResposeObject = { ...secondObject }
setErrorResponse(thirdObject, 401)
describe('Set response object params for errors', function () {
  test('Set success to false', () => expect(thirdObject?.success).toBe(false))
  test('Set status to 401', () => expect(thirdObject?.statusCode).toBe(401))
  test('Set data to null', () => expect(thirdObject?.data).toBe(null))
})
