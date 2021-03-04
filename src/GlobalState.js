import { createContext } from "react"
import { nanoid } from "nanoid"

const initialState = [
  {
    title: "bought Red Dead Redemption 2",
    amount: 100,
    id: nanoid(),
  },

  {
    title: "bought Red Dead Redemption 2",
    amount: 100,
    id: nanoid(),
  },
]

export const Context = createContext()

const GlobalState = (props) => {
  const value = {
    items: initialState,
  }
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default GlobalState
