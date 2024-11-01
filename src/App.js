import React from "react"
import { Box } from "@mui/material"
import NavBar from "./component/navBar"
import Introduction from './component/introduction'

const classes = {
  root: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#D3D3D3'
  }
}

function App() {
  return (
    <Box sx={classes.root}>
      <NavBar />
      <Introduction />
    </Box>
  )
}

export default App
