import React from "react"
import { Box } from "@mui/material"
import NavBar from "./component/navBar"
import FloatButton from "./component/FloatButton"
import Introduction from './component/introduction'
import About from "./component/about"
import PersonalGrowthTimeline from "./component/timeline"

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
      <FloatButton />
      <Introduction />
      <About />
      <PersonalGrowthTimeline />
    </Box>
  )
}

export default App
