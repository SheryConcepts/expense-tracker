import { Paper, Typography } from "@material-ui/core"
import ExpenseChild from "./Expense-Child"
import { css } from "@emotion/react"
import { useContext } from "react"
import { Context } from "./GlobalState.js"

const Status = (props) => {
  const { items } = useContext(Context)

  const balance = () => {
    const balance = items
      .map((item) => item.amount)
      .reduce((acc, val) => acc + val, 0)
    return balance
  }
  const BALANCE = balance()

  const Income = () => {
    let Income = items
      .filter((item) => item.amount >= 0)
      .map((item) => item.amount)
      .reduce((acc, val) => acc + val, 0)
    return Income
  }
  const INCOME = Income()

  const Expense = () => {
    let Expense = items
      .filter((item) => item.amount < 0)
      .map((item) => item.amount)
      .reduce((acc, val) => acc + val, 0)
    return Expense * -1
  }
  const EXPENSE = Expense()

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
        <Typography variant="h1">{BALANCE}$</Typography>
      </Paper>
      <div
        css={css`
          grid-column: 6/13;
          grid-row: 1;
        `}
      >
        <ExpenseChild title="Income" amount={INCOME} />
      </div>
      <div
        css={css`
          grid-column: 6/13;
          grid-row: 2;
          border-right: 1% solid red;
        `}
      >
        <ExpenseChild title="Expense" amount={EXPENSE} />
      </div>
    </div>
  )
}

export default Status
