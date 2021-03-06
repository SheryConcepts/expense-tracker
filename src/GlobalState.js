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

const calculateBalance = () => {
  let balance
  if (balance === undefined) {
    balance = 0
  }
  for (let i of initialState) {
    balance = balance + i.amount
  }
}
calculateBalance()

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

  const calculateBalance = () => {
    let balance
    if (balance === undefined) {
      balance = 0
    }
    for (let i of state) {
      balance = balance + i.amount
    }
  }
  calculateBalance()
  const value = {
    items: state,
    ADD,
    REMOVE,
    // BALANCE: calculateBalance(),
  }
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default GlobalState
