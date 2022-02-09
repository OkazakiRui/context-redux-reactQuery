import { VFC } from 'react'
import { useAppDispatch } from 'app/hooks'
import { increment } from 'slices/counterSlice'

export const ReduxToolKitB: VFC = () => {
  const dispatch = useAppDispatch()
  console.log('reduxToolKitBがレンダリングされた')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">reduxToolKitB</p>

      <button
        className="py-2 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
