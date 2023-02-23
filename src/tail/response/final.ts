import { BasicRequest } from "../../__types__/responseTypes"

export const finalResponse: any = (res: any) => {
  res.status(res.obj.statusCode).json(res.obj)
}