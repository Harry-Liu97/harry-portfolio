import React from "react"
import { Grid } from "@mui/material"
import PersonalGrowthTimeline from "./timeline"
import GitDisplay from "./gitSection"

const classes = {
    root: {
        width: '100%',
        minHeight: '100px'
    }
}

const TimeGit = () => {
    return (
        <Grid container sx={classes.root} justifyContent='center'>
            <Grid item xs={11} sm={11} md={10} lg={5}>
                <PersonalGrowthTimeline />
            </Grid>
            <Grid item xs={11} sm={11} md={10} lg={6}>
                <GitDisplay/>
            </Grid>
        </Grid>
        
    )
}

export default TimeGit