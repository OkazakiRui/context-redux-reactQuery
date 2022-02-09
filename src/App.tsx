import { ClassicalFetchA } from 'components/ClassicalFetchA'
import { ClassicalFetchB } from 'components/ClassicalFetchB'
import { Home } from 'components/Home'
import { ReactQueryA } from 'components/ReactQueryA'
import { ReactQueryB } from 'components/ReactQueryB'
import { StateProvider } from 'context/StateProvider'
import { VFC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry → default : fetchに失敗した場合は3回までfetchする
      retry: false,
      // refetchOnWindowFocus → default : windowがfocusされるとfetchされる
      refetchOnWindowFocus: false,
    },
  },
})

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/fetch-a">
                <ClassicalFetchA />
              </Route>
              <Route exact path="/fetch-b">
                <ClassicalFetchB />
              </Route>
              <Route exact path="/query-a">
                <ReactQueryA />
              </Route>
              <Route exact path="/query-b">
                <ReactQueryB />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
