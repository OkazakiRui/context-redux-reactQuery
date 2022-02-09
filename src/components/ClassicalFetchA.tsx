import { VFC } from 'react'
import { useClassicalFetch } from 'hooks/useClassicalFetch'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: VFC = () => {
  const history = useHistory()
  const toFetchBPage = () => history.push('/fetch-b')

  const { tasks, isLoading, error } = useClassicalFetch()
  console.log('classicalFetchAがレンダリングされた')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>error</div>

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={toFetchBPage}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
