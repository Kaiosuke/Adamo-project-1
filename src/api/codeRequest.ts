import { ICode } from '@interfaces/code'
import { instanceLocal } from './instance'

const getCode = async (code: string): Promise<ICode> => {
  const res = await instanceLocal('codes', {
    params: {
      code: code
    }
  })

  return res.data[0]
}

export { getCode }
