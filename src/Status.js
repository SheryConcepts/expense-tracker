import { Paper, Typography } from "@material-ui/core"
import ExpenseChild from "./Expense-Child"
import { css } from "@emotion/react"
import { useContext } from "react"
import { Context } from "./GlobalState.js"

const Status = (props) => {
  // const { BALANCE } = useContext(Context)

  return (
    <div
      css={css`
        grid-column: 5/12;
        grid-row: 2;
        @media (max-width: 800px) {
          grid-column: 2/12;
          grid-row: 2;
        }
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-gap: 1%;
      `}
    >
      <Paper
        color="primary"
        square
        css={css`
          grid-column: 1/6;
          grid-row: 1/3;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: space-evenly;
        `}
      >
        <Typography variant="h6">Balance</Typography>
        <Typography variant="h1">100$</Typography>
      </Paper>
      <div
        css={css`
          grid-column: 6/13;
          grid-row: 1;
        `}
      >
        <ExpenseChild title="Income" amount={29} />
      </div>
      <div
        css={css`
          grid-column: 6/13;
          grid-row: 2;
          border-right: 1% solid red;
        `}
      >
        <ExpenseChild title="Expense" amount={78} />
      </div>
    </div>
  )
}

export default Status
