// import { NextFunction, Request, Response } from 'express'

// export type BasicRequest = (req: Request | any, res: Response | any, next?: () => void) => ResposeObject | void
export type BasicRequest = (res: Response | any) => ResposeObject | void

export interface ResponseWarning {
  type: string
  message?: string
}

export interface ResponseError extends ResponseWarning {
  statusCode?: number
}

export interface ResposeObject {
  success: boolean
  statusCode: number
  errors: ResponseError[] | null
  warnings: ResponseWarning[] | null
  data: any[] | null
}
