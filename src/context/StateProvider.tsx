import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  VFC,
} from 'react'
import { Task } from 'types/types.'

type StateContextType = {
  tasks: Task[] | null
  dark: boolean
  setTasks: Dispatch<SetStateAction<Task[] | null>>
  setDark: Dispatch<SetStateAction<boolean>>
}

const StateContext = createContext({} as StateContextType)

type Props = {
  children: ReactNode
}
export const StateProvider: VFC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): StateContextType => useContext(StateContext)
