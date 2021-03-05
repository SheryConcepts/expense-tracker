import React from "react"
import { css } from "@emotion/react"
import Header from "./Header.js"
import Status from "./Status.js"
import Input from "./Input.js"
import History from "./History.js"
import GlobalState from "./GlobalState.js"
import { CssBaseline } from "@material-ui/core"
import Theme from "./Theme.js"

const App = () => {
  return (
    <GlobalState>
      <Theme>
        <CssBaseline />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            grid-gap: 8px;
          `}
        >
          <Header />
          <Status />
          <Input />
          <History />
        </div>
      </Theme>
    </GlobalState>
  )
}

export default App
