import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1">
          Expense Tracker App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
