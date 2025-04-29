import { IRoom } from '@interfaces/room'
import { instanceLocal } from './instance'

const getAllRoom = async (): Promise<IRoom[]> => {
  const res = await instanceLocal('/rooms')
  return res.data
}

const changeStatusRoom = async (roomId: number, status: boolean) => {
  try {
    const res = await instanceLocal.patch(`/rooms/${roomId}`, { status })
    return res.data
  } catch (error) {
    return error
  }
}

export { getAllRoom, changeStatusRoom }
