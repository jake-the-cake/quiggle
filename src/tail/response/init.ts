import { BasicRequest } from '../../__types__/responseTypes'
import { defaultResponseObject } from './defaults'

export const initResponseObject: BasicRequest = (res) => {
<<<<<<< HEAD
  res.obj = defaultResponseObject
}
=======
  // if (!next) return defaultResponseObject
  res.obj = defaultResponseObject
  // next()
}

console.log('tail > response > init')
>>>>>>> 7442d46210508ecb36f597141085747dda4b392d
