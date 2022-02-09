import { VFC } from 'react'
import { Link } from 'react-router-dom'

export const Home: VFC = () => {
  return (
    <div className="w-9/12 space-y-4">
      <h2 className="font-bold text-2xl">各レンダリング回数</h2>
      <div className="space-y-2">
        <h3 className="font-bold text-xl">ClassicalFetch</h3>
        <h4 className="font-bold text-l">
          <Link to="/fetch-a">
            コンポーネントA 4回 [更新するたび fetch される]
          </Link>
        </h4>
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
        <h4 className="font-bold text-l">
          <Link to="/fetch-a">コンポーネントB 1回</Link>
        </h4>
        <ol className="list-decimal px-8">
          <li>レンダリングされた時に context から data を参照している</li>
        </ol>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-xl">ReactQuery</h3>
        <h4 className="font-bold text-l">
          <Link to="/fetch-a">
            コンポーネントA 2回 [初回 fetch → データは cache で保つ。staletime
            の期限が切れると再 fetch]
          </Link>
        </h4>
        <ol className="list-decimal px-8">
          <li>レンダリングされた時</li>
          <li>fetch の処理が終わった時</li>
        </ol>
        <h4 className="font-bold text-l">
          <Link to="/fetch-a">コンポーネントB 1回</Link>
        </h4>
        <ol className="list-decimal px-8">
          <li>レンダリングされた時に cache から data を参照している</li>
        </ol>
      </div>
    </div>
  )
}
