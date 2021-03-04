import React from "react"
import { css } from "@emotion/react"
import Header from "./Header.js"
import Status from "./Status.js"
import Input from "./Input.js"
import History from "./History.js"
import GlobalState from "./GlobalState.js"

const App = () => {
  return (
    <GlobalState>
      <Header />
      <Status />
      <Input />
      <History />
    </GlobalState>
  )
}

export default App
