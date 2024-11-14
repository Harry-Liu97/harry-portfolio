import React from "react"
import { Box, Typography} from "@mui/material"
import '../../component/font-style.css'

const classes = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        minHeight: '200px',
        backgroundColor: '#D3D3D3',
    },
    myName: {
        fontFamily: 'Chokokutai, sans-serif',
        fontSize: '2.1rem',
        textAlign: 'center',
        marginBottom: '10px'
    },
    textContent: {
        width: '90%',
        fontFamily: 'monospace',
        textAlign: 'center'
    }
}

const Footer = () => {
    return (
        <Box sx={classes.root}>
            <Typography sx={classes.myName}>
                Harry
            </Typography>
            <Typography sx={classes.textContent}>
                Design & Code
            </Typography>
            <Typography sx={classes.textContent}>
                Created with ❤️ | Full Stack Engineer
            </Typography>
        </Box>
    )
}

export default Footer