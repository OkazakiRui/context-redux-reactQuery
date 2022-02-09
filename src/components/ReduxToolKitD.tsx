import { VFC } from 'react'
import { useAppSelector } from 'app/hooks'
import { selectMode } from 'slices/counterSlice'

export const ReduxToolKitD: VFC = () => {
  const mode = useAppSelector(selectMode)
  console.log('reduxToolKitDがレンダリングされた')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">reduxToolKitD</p>
      <p className="text-blue-500">{mode ? 'mode on' : 'mode off'}</p>
    </div>
  )
}
