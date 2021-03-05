import { Paper, Typography } from "@material-ui/core"

const ExpenseChild = (props) => {
  return (
    <Paper square>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="h3">
        {props.title === "Income" ? props.amount : `-${props.amount}`}
      </Typography>
    </Paper>
  )
}

export default ExpenseChild
