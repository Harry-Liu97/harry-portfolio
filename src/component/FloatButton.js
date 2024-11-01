import * as React from 'react'
import { Box, Button } from "@mui/material"
import 'animate.css/animate.min.css'
import './animation-style.css'

const classes = {
    root: {
        width: '100%',
        height: '100%',
        position: 'fixed', 
        bottom: 0,         
        Right: 0,
    },
    buttonStyle: {
        width: 80,
        height: 80,
        position: 'absolute', 
        bottom: 40, 
        right: 40,
        borderRadius: '50%',
        backgroundColor: '#3f51b5',
        color: '#fff',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        '&:hover': {
            backgroundColor: '#303f9f',
        },
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)', 
    }
}




const FloatButton = () => {
    return(
        <Box sx={classes.root}>
            <Button sx={classes.buttonStyle} className='animate__animated animate__pulse'>
                Hire Me
            </Button>
        </Box>
    )
}

export default FloatButton