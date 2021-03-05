import { Paper, Typography } from "@material-ui/core"
import { css } from "@emotion/react"

const ExpenseChild = (props) => {
  return (
    <Paper
      square
      css={css`
        padding: 0 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        border-right: 5px solid ${props.title === "Expense" ? "red" : "green"};
      `}
    >
      <Typography
        css={css`
          align-self: flex-start;
        `}
        variant="h6"
      >
        {props.title}
      </Typography>
      <Typography variant="h2">{props.amount}$</Typography>
    </Paper>
  )
}

export default ExpenseChild
