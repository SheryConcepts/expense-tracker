import { Paper, Typography } from "@material-ui/core"
import ExpenseChild from "./Expense-Child"
import { css } from "@emotion/react"

const Status = (props) => {
  return (
    <div
      css={css`
        grid-column: 5/12;
        grid-row: 2;
      `}
    >
      <Paper color="primary" square>
        <Typography variant="h6">Balance</Typography>
        <Typography variant="h3">23$</Typography>
      </Paper>
      <ExpenseChild title="Income" amount={29} />
      <ExpenseChild title="Expense" amount={78} />
    </div>
  )
}

export default Status
