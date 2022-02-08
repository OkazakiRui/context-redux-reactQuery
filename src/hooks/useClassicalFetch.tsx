import { useEffect, useState } from 'react'
import { useStateContext } from 'context/StateProvider'
import axios from 'axios'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setIsLoading(true)
      try {
        const response = await axios('http://localhost:8000/api/tasks/')
        setTasks(response.data)
      } catch (error) {
        setError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setTasks])
  return { tasks, isLoading, error }
}
