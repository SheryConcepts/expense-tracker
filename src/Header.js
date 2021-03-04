import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { css } from "@emotion/react"

const Header = () => {
  return (
    <AppBar
      css={css`
        grid-column: 5/9;
        grid-row: 1;
      `}
      position="static"
    >
      <Toolbar>
        <Typography variant="h5" component="h1">
          Expense Tracker App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
