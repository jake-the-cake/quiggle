import { initResponseObject, setDataResponse } from '../tail/response'

// Testing that the response object sets to the defaults
const responseObject = initResponseObject({}, null)
describe('Create a response object', function () {
  test('Default success to false', () => expect(responseObject?.success).toBe(false))
  test('Default status of 500', () => expect(responseObject?.statusCode).toBe(500))
  test('Default errors to null', () => expect(responseObject?.errors).toBe(null))
  test('Default warnings to null', () => expect(responseObject?.warnings).toBe(null))
  test('Default data to null', () => expect(responseObject?.data).toBe(null))
})

// Testing that the response object changes on success
const secondObject: any = {...responseObject}
setDataResponse(secondObject, 200)
describe('Set response object params for success', function(){
  test('Set success to true', () => expect(secondObject?.success).toBe(true))
  test('Set status to 200', () => expect(secondObject?.statusCode).toBe(200))
  test('Set errors to null', () => expect(secondObject?.errors).toBe(null))
})