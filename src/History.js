import { Paper } from "@material-ui/core"
import { useContext } from "react"
import { Context } from "./GlobalState"
import HistoryItem from "./HistoryItem"
import { css } from "@emotion/react"

const History = () => {
  const { items } = useContext(Context)
  return (
    <Paper
      css={css`
        grid-column: 5/9;
        grid-row: 4;
      `}
    >
      {items.map((item) => (
        <HistoryItem key={item.id} title={item.title} amount={item.amount} />
      ))}
    </Paper>
  )
}

export default History
