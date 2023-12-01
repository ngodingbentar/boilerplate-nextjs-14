import axios from "axios"
import { useQuery } from "react-query"

export const useMain = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const userRes = await axios.get('/api/todos/1')
      return userRes.data
    },
  })
}