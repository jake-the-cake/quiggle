import { Request, Response } from 'express'

export type BasicRequest = (req: Request, res: Response) => void

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
