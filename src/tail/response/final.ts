import { BasicRequest } from "../../__types__/responseTypes"

export const finalResponse: any = (req: any, res: any) => {
  res.status(res.responseObject.statusCode).json(res.responseObject)
}

console.log('tail > response > final')
