import React from "react"
import theme from "./styles/theme"
import { Box } from "@mui/material"
import NavBar from "./component/navBar/navBar"
import FloatButton from "./component/floatbutton/FloatButton"
import Introduction from './component/introduction/introduction'
import About from "./component//about/about"
import Personality from "./component/personality/mbti"
import TimeGit from "./component/timeline&git/timeGitContainer"
import Skills from "./component/skill/skills"
import Projects from "./component/project/projects"
import Contact from './component/contact/contact'
import Footer from "./component/footer/footer"

const classes = {
  root: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main
  }
}

function App() {
  return (
    <Box sx={classes.root}>
      <NavBar />
      <FloatButton />
      <Introduction />
      <About />
      <Personality />
      <TimeGit />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </Box>
  )
}

export default App
