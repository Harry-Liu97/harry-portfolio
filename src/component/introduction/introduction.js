import React, { useEffect, useState } from "react"
import theme from "../../styles/theme"
import 'animate.css/animate.min.css'
import '../animation-style.css'
import { Box, Grid, Typography, Button } from "@mui/material"
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import photoCartoon from '../../assets/photo-cartoon.jpg'
import photo from '../../assets/photo.jpg'

const classes = {
    root: {
        margin: '0 auto',
        width: '90%',
        paddingTop: '150px',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftContainer: {
        padding: '50px',
        display: {
            xs: 'flex',
            sm: 'flex',
            md: 'block'
        },
        flexDirection: {
            xs: 'column',
            sm: 'column',
        },
    },
    rightContainer: {
        padding: '50px',
        display: 'flex',
        justifyContent: {
            xs:'center',
            sm: 'center', 
            md: 'right'
        },
        alignItems: 'center'
    },
    textGreeting: {
        fontSize: {
            md: '3.2rem',
            sm: '3.2rem',
            xs: '2.7rem'
        },
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #4974D8, #D54F93)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
        minWidth: '200px', 
    },
    textTitle: {
        minHeight: {
            xs: '70px',
            sm: '90px',
            md: '90px'
        },
        fontSize: {
            md: '2.8rem',
            sm: '2.8rem',
            xs: '1.6rem'
        },
        fontWeight: '550',
        position: 'relative',
    },
    textContent: {
        width: '90%',
        fontFamily: theme.typography.fontFamily
    },
    buttonResume: {
        width: {
            xs: '70%',
            sm: '50%'
        },
        color: '#000000',
        marginTop: '30px',
        border: '3px solid #A9A9A9',
        borderRadius: '12px',
        cursor: 'pointer',
        padding: '10px 20px'
    },
    photoBox: {
        width: {
            xs:'100%',
            sm: '70%', 
            md: '80%'
        },
        height: {
            xs:'100%',
            sm: '70%', 
            md: '80%'
        },
        borderRadius: '50%',
        objectFit: 'cover',
        transition: '0.3s ease',
        cursor: 'pointer',
        overflow: 'hidden',
    }
}

const TypeWriter = ({ messages }) => {
    const [displayText, setDisplayText] = useState('')
    const [curIndex, setCurIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const curMessage = messages[curIndex]
        let index = isDeleting ? curMessage.length : 0

        const typingInterval = setInterval(() => {
            if (isDeleting) {

                const nextText = curMessage.substring(0, index - 1)
                setDisplayText(nextText)
                index -= 1

                if (index < 0) {
                    clearInterval(typingInterval)
                    setTimeout(() => {
                        setCurIndex((prevIndex) => (prevIndex + 1) % messages.length)
                        setIsDeleting(false) 
                    }, 1000)
                }
            } else {

                const nextText = curMessage.substring(0, index + 1)
                setDisplayText(nextText)
                index += 1

                if (index === curMessage.length) {
                    setTimeout(() => {
                        clearInterval(typingInterval)
                        setIsDeleting(true)
                    }, 1000)
                }
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [curIndex, isDeleting, messages])
    
    return(
        <Typography sx={classes.textTitle} className="animate__animated animate__slideInLeft">{displayText}</Typography>
    ) 
}

const Introduction = () => {
    const messages = ['Full Stack Engineer', 'Software Engineer']
    const [currentPhoto, setCurrentPhoto] = useState(photoCartoon)


    const handleMouseEnter = () => {
        setCurrentPhoto(photo)
    }

    const handleMouseLeave = () => {
        setCurrentPhoto(photoCartoon)
    }

    return (
        <Grid container sx={classes.root}>
            <Grid item xs={12} sm={12} md={6} sx={classes.leftContainer}>
                <Typography sx={classes.textGreeting} className="animate__animated animate__jackInTheBox">
                    Hello, I'm a
                </Typography>
                <TypeWriter messages={messages} />
                <Typography sx={classes.textContent} className="animate__animated animate__slideInLeft">
                    As a full stack engineer, passionate about building efficient and user-friendly applications, 
                    the goal is to create technical solutions that are both usable and high-performing through continuous learning and practice.
                </Typography>
                <Button 
                    variant="outlined" 
                    endIcon={<OpenInNewIcon/>} 
                    href='/TianyuCV.pdf'  
                    target="_blank"
                    rel="noopener"
                    sx={classes.buttonResume} 
                    className="animate__animated animate__slideInLeft"
                > 
                    Resume
                </Button>
            </Grid >

            <Grid item xs={12} sm={12} md={6} sx={classes.rightContainer}>
                <Box 
                    component='img'
                    src={currentPhoto} 
                    alt='photo' 
                    sx={classes.photoBox}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='animate__animated animate__slideInRight'
                />
            </Grid>
        </Grid>
    )
}

export default Introduction