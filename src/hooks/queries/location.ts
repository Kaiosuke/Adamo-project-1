/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'

interface IQueryLocation<T> {
  value: string
  key: string
  getLocation: ({ data }: { data: string }) => Promise<T>
}

const useQueryLocation = <T>({ value, getLocation, key }: IQueryLocation<T>) => {
  return useQuery({
    queryKey: [key, { value }],
    queryFn: () => getLocation({ data: value }),
    enabled: !!value
  })
}

export { useQueryLocation }
