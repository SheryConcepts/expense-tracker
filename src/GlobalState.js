import { createContext, useReducer } from "react"
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
  {
    title: "bought Red Dead Redemption 2",
    amount: 100,
    id: nanoid(),
  },
]

export const Context = createContext()

const Reducer = (state, action) => {
  if (action.type === "ADD") {
    return [action.payload, ...state]
  }

  if (action.type === "REMOVE") {
    return state.filter((item) => item.id !== action.payload.id)
  }

  return state
}

const GlobalState = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const ADD = (title, amount, id) => {
    dispatch({
      type: "ADD",
      payload: {
        title,
        amount,
        id,
      },
    })
  }

  const REMOVE = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    })
  }

  const balance = () => {
    const balance = state
      .map((item) => item.amount)
      .reduce((acc, val) => acc + val)
    return balance
  }

  const value = {
    items: state,
    ADD,
    REMOVE,
    BALANCE: balance(),
  }
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default GlobalState
