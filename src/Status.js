import { Paper, Typography } from "@material-ui/core"
import ExpenseChild from "./Expense-Child"

const Status = (props) => {
  return (
    <div>
      <Paper elevation={3}>
        <Typography variant="h6">Balance</Typography>
        <Typography variant="h3">23$</Typography>
      </Paper>
      <ExpenseChild title="Income" amount={29} />
      <ExpenseChild title="Expense" amount={78} />
    </div>
  )
}

export default Status
