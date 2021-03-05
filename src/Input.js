import React from "react"
import { Paper, TextField, Button, Grid } from "@material-ui/core"
import { css } from "@emotion/react"

const Input = (props) => {
  return (
    <Paper
      css={css`
        grid-column: 2/5;
        grid-row: 2;
      `}
    >
      <form
        css={css`
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: space-around;
        `}
      >
        <TextField
          size="small"
          multiline={true}
          label="Title"
          id="title"
          variant="outlined"
          css={css`
            margin: 0.5rem;
          `}
        />
        <TextField
          size="small"
          label="Amount"
          id="amount"
          variant="outlined"
          css={css`
            margin: 0.5 rem;
          `}
        />
        <Button variant="contained" size="small">
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default Input
