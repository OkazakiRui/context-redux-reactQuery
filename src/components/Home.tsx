import { VFC } from 'react'
import { Link } from 'react-router-dom'

export const Home: VFC = () => {
  return (
    <div className="w-9/12">
      <h2 className="font-bold text-2xl">各レンダリング回数</h2>
      <h3 className="font-bold text-xl">
        <Link to="/fetch-a">ClassicalFetchA 4回</Link>
      </h3>
      <ol className="list-decimal px-8">
        <li>レンダリングされた時</li>
        <li>
          マウントされた時に useEffect で isLoading の state を変更している
        </li>
        <li>
          データを取得し、setTasks で state を変更していて、カスタムフックで
          state を参照しているから
        </li>
        <li>一連の処理が終わった際に isLoading の state を変更している</li>
      </ol>
      <h3 className="font-bold text-xl">
        <Link to="/fetch-b">ClassicalFetchB 1回</Link>
      </h3>
      <ol className="list-decimal px-8">
        <li>レンダリングされた時にcontextからdataを参照している</li>
      </ol>
    </div>
  )
}
