import { css } from "@emotion/react"
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core"
import { useContext } from "react"
import { Context } from "./GlobalState.js"

const HistoryItem = ({ id, title, amount }) => {
  const { REMOVE } = useContext(Context)

  const handleRemove = () => {
    REMOVE(id)
  }

  return (
    <Card
      css={css`
        flex: 1 300px;
      `}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{amount}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          css={css`
            color: red;
          `}
          onClick={handleRemove}
        >
          remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default HistoryItem
