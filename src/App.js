import React from "react"
import { Box } from "@mui/material"
import NavBar from "./component/navBar"

const classes = {
  root: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#B0B3B8'
  }
}

function App() {
  return (
    <Box sx={classes.root}>
      <NavBar />
    </Box>
  )
}

export default App
