import { useStateContext } from 'context/StateProvider'
import { VFC } from 'react'

export const ContextB: VFC = () => {
  const { setDark } = useStateContext()
  const changeDarkStateToFalse = () => setDark(false)
  console.log('contextBがレンダリングされた')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold mb-3">ContextB</p>
      <button
        className="py-2 px-3 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
        onClick={changeDarkStateToFalse}
      >
        dark mode off
      </button>
    </div>
  )
}
