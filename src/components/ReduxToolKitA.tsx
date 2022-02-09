import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { increment, selectCount } from 'slices/counterSlice'

export const ReduxToolKitA: VFC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  console.log('reduxToolKitAがレンダリングされた')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">reduxToolKitA</p>
      {count}
      <button
        className="py-2 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
