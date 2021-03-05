import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { css } from "@emotion/react"

const Header = () => {
  return (
    <AppBar
      css={css`
        grid-column: 1/13;
        grid-row: 1;
      `}
      position="static"
    >
      <Toolbar>
        <Typography variant="h4" component="h1">
          Expense Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
