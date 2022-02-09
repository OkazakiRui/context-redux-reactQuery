import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useQueryTasks } from 'hooks/useQueryTasks'
import { VFC } from 'react'
import { useHistory } from 'react-router-dom'

export const ReactQueryA: VFC = () => {
  const history = useHistory()
  const toQueryBPage = () => history.push('/query-b')

  const { status, data } = useQueryTasks()
  console.log('reactQueryAがレンダリングされた')

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>error</div>

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={toQueryBPage}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">query B</p>
    </div>
  )
}
