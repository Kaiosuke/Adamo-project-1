import { IReviewHotel, IReviewTour, IReviewTourLackId } from '@interfaces/review'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { instanceLocal } from './instance'

const getReviewTourList = createAsyncThunk<
  IReviewTour[],
  { tourId: number; start?: number; limit?: number },
  { rejectValue: string }
>('review/tour', async ({ tourId, start = 0, limit = 3 }, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get(`reviewsTour?tourId=${tourId}&_start=${start}&_limit=${limit}`)

    localStorage.setItem('totalReviewTour', JSON.stringify(parseInt(res.headers['x-total-count'])))

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message)
    }
    return rejectWithValue('error')
  }
})

const getAllReviewTour = async (id: number | string): Promise<IReviewTour[]> => {
  const res = await instanceLocal.get(`reviewsTour?tourId=${id}`)
  return res.data
}

const addReviewTour = createAsyncThunk<IReviewTour, { data: IReviewTourLackId }, { rejectValue: string }>(
  'review/add',
  async ({ data }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.post('reviewsTour', data)
      return res.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message)
      }
      rejectWithValue('error')
    }
  }
)

const getReviewsTour = async ({ hotelId }: { hotelId: number | string }): Promise<IReviewHotel[]> => {
  const res = await instanceLocal.get(`reviewsHotel?hotelId=${hotelId}`)
  return res.data
}

const getReviewsHotel = async ({
  id,
  _page = 1,
  _limit = 1000
}: {
  id: number | string
  _page?: number | string
  _limit?: number | string
}): Promise<IReviewHotel[]> => {
  const res = await instanceLocal.get(`reviewsHotel?hotelId=${id}&_sort=id&_order=desc`, {
    params: {
      _page,
      _limit
    }
  })

  localStorage.setItem('totalReviewHotel', res.headers['x-total-count'])
  return res.data
}

const addReviewHotel = async ({ data }: { data: Omit<IReviewHotel, 'id'> }): Promise<IReviewHotel> => {
  const res = await instanceLocal.post('reviewsHotel', data)
  localStorage.setItem('totalReviewHotel', res.headers['x-total-count'])
  return res.data
}

const editReviewHotel = async ({
  id,
  data
}: {
  id: string
  data: { des: string; rate: number }
}): Promise<IReviewHotel> => {
  const res = await instanceLocal.patch(`reviewsHotel/${id}`, data)
  return res.data
}

const deleteReviewHotel = async ({ id }: { id: string }): Promise<IReviewHotel> => {
  const res = await instanceLocal.delete(`reviewsHotel/${id}`)
  localStorage.setItem('totalReviewHotel', res.headers['x-total-count'])
  return res.data
}

const editReviewTour = async ({
  id,
  data
}: {
  id: string
  data: { des: string; rate: number }
}): Promise<IReviewTour> => {
  const res = await instanceLocal.patch(`reviewsTour/${id}`, data)
  return res.data
}

const deleteReviewTour = async ({ id }: { id: string }): Promise<IReviewTour> => {
  const res = await instanceLocal.delete(`reviewsTour/${id}`)
  localStorage.setItem('totalReviewHotel', res.headers['x-total-count'])
  return res.data
}

export {
  getReviewsHotel,
  getReviewTourList,
  addReviewHotel,
  addReviewTour,
  getAllReviewTour,
  getReviewsTour,
  editReviewHotel,
  deleteReviewHotel,
  editReviewTour,
  deleteReviewTour
}
