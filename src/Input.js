import React, { useContext, useState } from "react"
import { Paper, TextField, Button, Grid } from "@material-ui/core"
import { css } from "@emotion/react"
import { Context } from "./GlobalState.js"
import { nanoid as id } from "nanoid"

const Input = (props) => {
  const [title, setTitle] = useState()
  const [amount, setAmount] = useState(0)

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const { ADD } = useContext(Context)

  const handleSubmit = () => {
    ADD(title, Number(amount), id())
  }

  return (
    <Paper
      css={css`
        grid-column: 2/5;
        grid-row: 2;
        @media (max-width: 800px) {
          grid-column: 2/12;
          grid-row: 3;
        } ;
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
          onChange={onChangeTitle}
        />
        <TextField
          helperText="Enter a valid number"
          size="small"
          label="Amount"
          id="amount"
          variant="outlined"
          type="number"
          css={css`
            margin: 0.5rem;
          `}
          onChange={onChangeAmount}
        />
        <Button
          css={css`
            margin: 0.5rem;
          `}
          variant="contained"
          size="small"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default Input
