import React from "react"
import { Paper, TextField, Button, Grid } from "@material-ui/core"
import { css } from "@emotion/react"

const Input = (props) => {
  return (
    <Paper variant="elevation" square elevation={3}>
      <Grid container direction="column" alignItems="center">
        <form>
          <Grid item xs={5}>
            <TextField
              size="small"
              multiline={true}
              label="Title"
              id="title"
              variant="outlined"
            />
          </Grid>
          <TextField
            size="small"
            label="Amount"
            id="amount"
            variant="outlined"
          />
          <Button variant="contained" size="small">
            Submit
          </Button>
        </form>
      </Grid>
    </Paper>
  )
}

export default Input
