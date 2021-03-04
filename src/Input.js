import React from "react"
import { Paper, TextField, Button, Grid } from "@material-ui/core"
import { css } from "@emotion/react"

const Input = (props) => {
  return (
    <Paper
      variant="elevation"
      square
      elevation={3}
      css={css`
        grid-column: 5/9;
        grid-row: 3;
      `}
    >
      <form>
        <TextField
          size="small"
          multiline={true}
          label="Title"
          id="title"
          variant="outlined"
        />
        <TextField size="small" label="Amount" id="amount" variant="outlined" />
        <Button variant="contained" size="small">
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default Input
