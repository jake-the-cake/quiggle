import { BasicRequest } from "../../__types__/responseTypes"

export const finalResponse: BasicRequest = (req, res) => {
  res.status(res.responseObject.statusCode).json(res.responseObject)
}

console.log('tail > response > final')
