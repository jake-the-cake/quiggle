import { initResponseObject } from '../tail/express-controllers/handleRequest'

// Testing that the response object sets to the defaults
const responseObject = initResponseObject( {}, null)
describe('Create a response object', function(){
	test('Default success to false', () => expect(responseObject!.success ).toBe(false))
	test('Default status of 500', () => expect(responseObject!.statusCode ).toBe(500))
	test('Default errors to null', () => expect(responseObject!.errors ).toBe(null))
	test('Default warnings to null', () => expect(responseObject!.warnings ).toBe(null))
	test('Default data to null', () => expect(responseObject!.data ).toBe(null))
})