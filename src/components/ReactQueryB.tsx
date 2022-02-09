import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useQueryClient } from 'react-query'
import { Task } from 'types/types.'

export const ReactQueryB: VFC = () => {
  const history = useHistory()
  const toQueryAPage = () => history.push('/query-a')

  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  console.log('reactQueryBがレンダリングされた')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={toQueryAPage}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">query A</p>
    </div>
  )
}
