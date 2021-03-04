import { Paper } from "@material-ui/core"
import { useContext } from "react"
import { Context } from "./GlobalState"
import HistoryItem from "./HistoryItem"

const History = () => {
  const { items } = useContext(Context)
  return (
    <Paper>
      {items.map((item) => (
        <HistoryItem key={item.id} title={item.title} amount={item.amount} />
      ))}
    </Paper>
  )
}

export default History
