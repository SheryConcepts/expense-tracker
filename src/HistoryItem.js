import { css } from "@emotion/react"
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core"

const HistoryItem = ({ title, amount }) => {
  return (
    <Paper
      elevation={3}
      css={css`
        background-color: black;
      `}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2">{amount}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text">remove</Button>
        </CardActions>
      </Card>
    </Paper>
  )
}

export default HistoryItem
