import React from "react"
import '../component/font-style.css'
import { Box, Typography, Link } from "@mui/material"
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import instagramIcon from '../assets/ins.svg'

const classes = {
    root: {
        width: '100%',
        minHeight: '80px',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-around'
    },
    textGroup: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
        margin: '0 20px',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    myName: {
        width: '20%',
        fontFamily: 'Chokokutai, sans-serif',
        fontSize: '2.7rem',
        textAlign: 'center'
    },
    iconGroup: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        margin: '0 10px',
        width: '36px', 
        height: '36px',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    }
}

const NavBar = () => {
    return (
        <Box sx={classes.root}>
            <Box sx={classes.textGroup}>
                <Typography sx={classes.text}>About</Typography>
                <Typography sx={classes.text}>Projects</Typography>
                <Typography sx={classes.text}>Contact</Typography>

            </Box>

            <Typography sx={classes.myName}> Harry </Typography>

            <Box sx={classes.iconGroup}>
                <Link href='https://github.com/Harry-Liu97' target="_blank" rel="noopener noreferrer">
                    <Box 
                        component='img'
                        src={githubIcon} 
                        alt='github' 
                        sx={classes.icon} 
                    />
                </Link>

                <Link href='https://www.linkedin.com/in/tianyu-liu-77b493134' target="_blank" rel="noopener noreferrer">
                    <Box 
                        component='img'
                        src={linkedinIcon} 
                        alt='linkedin' 
                        sx={classes.icon} 
                    />
                </Link>

                <Link href='https://www.instagram.com/harry_tianyu' target="_blank" rel="noopener noreferrer">
                    <Box
                        component='img'
                        src={instagramIcon} 
                        alt='instagram' 
                        sx={classes.icon} 
                    />
                </Link>
            </Box>
        </Box>
    )
}

export default NavBar