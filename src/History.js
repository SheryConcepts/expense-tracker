import { Paper, Typography } from "@material-ui/core"
import { useContext } from "react"
import { Context } from "./GlobalState"
import HistoryItem from "./HistoryItem"
import { css } from "@emotion/react"

const History = () => {
  const { items } = useContext(Context)
  return (
    <div
      css={css`
        grid-column: 2/12;
        grid-row: 4;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      `}
    >
      <Typography
        css={css`
          margin: 10px 0;
        `}
        variant="h3"
      >
        History
      </Typography>
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {items.map((item) => (
          <HistoryItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  )
}

export default History
