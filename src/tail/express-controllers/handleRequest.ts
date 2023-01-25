import { BasicRequest } from '../../__types__/responseTypes'

export const getOne: BasicRequest = (req, res) => {

  res !== null && res.status(200).json(req.responseObject)
}
