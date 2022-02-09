import axios from 'axios'
import { useQuery } from 'react-query'
import { Task } from 'types/types.'

export const getTasks = async () => {
  const { data } = await axios.get<Task[]>('http://localhost:8000/api/tasks/')
  return data
}

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
