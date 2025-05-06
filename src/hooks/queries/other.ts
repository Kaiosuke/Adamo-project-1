import { useQuery } from '@tanstack/react-query'

interface IQueryData<T> {
  key: string
  getData: () => Promise<T>
}

const useQueryData = <T>({ key, getData }: IQueryData<T>) => {
  return useQuery({
    queryKey: [`${key}`],
    queryFn: () => getData()
  })
}

export { useQueryData }
