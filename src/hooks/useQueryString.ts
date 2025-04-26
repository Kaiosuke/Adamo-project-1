import { useLocation } from 'react-router-dom'

const useQueryString = () => {
  const { search } = useLocation()
  return Object.fromEntries(new URLSearchParams(search))
}

export default useQueryString
