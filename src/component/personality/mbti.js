import React, { useState, useEffect } from "react"
import theme from "../../styles/theme"
import { Box, Grid, Typography } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress'
import { useInView } from 'react-intersection-observer'
import 'animate.css/animate.min.css'
import '../animation-style.css'
import PropTypes from 'prop-types'
import enfp from '../../assets/enfp.svg'

const classes = {
    root: {
        width: '90%',
        minHeight: '100px',
        margin: '100px auto',
        paddingTop: '80px',
    },
    leftContainer: {
        margin: '20px 0',
        padding: '30px',
        backgroundColor: theme.palette.primary.dark, 
        borderRadius: '20px'
    },
    rightContainer: {
        margin: '20px 0',
        background: `url(${enfp}), linear-gradient(to bottom, #061404, #09590B)`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: '20px',
    },
    titleLeft: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        margin: '30px 0 10px 0'
    },
    titleRight: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#ffffff'
    },
    contentRight: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#ffffff',
    }
}

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }} >
                <Typography sx={{ color: `${props.color}` }}> {props.name}</Typography>
                <Typography variant="body2" sx={{ color: `${props.color}` }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    )
    }

const Personality = () => {
    const {ref: leftRef, inView: leftView} = useInView({ threshold: 0.1 })
    const {ref: rightRef, inView: rightView} = useInView({ threshold: 0.1 })
    const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0])
    const targetValues = [57, 64, 68, 60, 53]
    const progressGradients = ['#4198B4', '#E4AE3A', '#32A474', '#886199', '#F25E62']
    const tags = ['Extraverted', 'Intuitive', 'Feeling', 'Prospecting', 'Turbulent']

    useEffect(() => {
        if (rightView) {
            const timer = setInterval(() => {
                setProgressValues((prevProgressValues) =>
                    prevProgressValues.map((value, index) => {
                        if (value < targetValues[index]) {
                            return value + 3
                        }
                        return value
                    })
                )
            }, 100)
            return () => {
                clearInterval(timer);
            }
        } else {
            setProgressValues([0, 0, 0, 0, 0])
        }
    }, [rightView])

    return(
        <Grid container sx={classes.root} justifyContent='space-around'>
            <Grid item xs={12} sm={9} md={6} sx={classes.leftContainer} >
                <Box sx={{ opacity: leftView ? '1' : '0' }} ref={leftRef} className={leftView ? "animate__animated animate__zoomIn" : ""}>
                    <Typography sx={classes.titleLeft}>ENFP-T</Typography>
                    
                    <Typography>
                        Also known as the "Campaigner" personality type, ENFP-Ts are enthusiastic, creative, and driven by possibilities. I thrive in environments that allow me to explore new ideas and connect with others.
                    </Typography>
        
                    <Typography sx={classes.titleLeft}>How it Affects My Work</Typography>

                    <Typography>
                        My ENFP-T personality makes me an idea generator and a team motivator. I enjoy brainstorming innovative solutions and collaborating with others to bring ideas to life. However, I sometimes struggle with staying focused on one task at a time, preferring to jump between multiple exciting projects.
                    </Typography>
            
                    <Typography sx={classes.titleLeft}>How It Influences My Decision-Making</Typography>

                    <Typography>
                        I tend to make decisions based on my values and intuition, looking for opportunities that align with my passions. I take risks when I feel inspired and believe in the potential for growth.
                    </Typography>

                    <Typography sx={classes.titleLeft}>How I Interact with Others</Typography>

                    <Typography>
                        As an ENFP-T, I am sociable and enjoy meaningful conversations. I connect easily with others, often making them feel heard and understood. However, I can sometimes overcommit to social engagements or group projects due to my desire to please others.
                    </Typography>
                </Box>

            </Grid>

            <Grid item xs={12} sm={9} md={5} sx={{ ...classes.rightContainer, height:{md: '750px', sm: '750px', xs:'700px'} }} >
                <Box sx={{ display: 'flex', margin: '20px', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Typography sx={classes.titleRight}>Personality</Typography>
                    <Typography sx={classes.contentRight}> ENFP-T </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    {progressValues.map((value, index) => (
                        <Box key={index} ref={rightRef}>
                            <LinearProgressWithLabel
                                value={value}
                                name={tags[index]}
                                color={progressGradients[index]}
                                sx={{
                                    height: '25px',
                                    margin: '20px',
                                    backgroundColor: '#3D5A3A',
                                    borderRadius: '15px',
                                    '& .MuiLinearProgress-bar': {
                                        background: progressGradients[index],
                                    }
                                }}
                            />
                        </Box>
                    ))}
                </Box>

            </Grid>
        </Grid>
    )
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Personality
