import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c5b5b",
    },
    secondary: {
      main: "#a3a2a2",
    },
  },
})

theme = responsiveFontSizes(theme)

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
