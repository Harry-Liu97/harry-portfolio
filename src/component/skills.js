import React, { useState, useEffect } from "react"
import { Box, Grid, Typography, Link } from "@mui/material"
import 'animate.css/animate.min.css'
import './animation-style.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useInView } from 'react-intersection-observer'
import skillPhoto from '../assets/skills.webp'

const classes = {
    root: {
        width: '90%',
        minHeight: '100px',
        margin: '100px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    photoBox: {
        width: '80%',
        borderRadius: '50px'
    },
    icons: {
        textDecoration: 'none',
        margin: '20px 20px',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
            transform: 'scale(1.3)',
        }
    }
}

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress 
                variant="determinate" 
                {...props} 
                size={200}  
                sx={{ 
                    color: props.progressColor,
                    '& circle': {
                        stroke: '#AA367C',
                        strokeLinecap: 'round', // Makes the ends of the stroke rounded
                    },
                }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{ color: 'text.secondary', fontSize: '1.5rem' }}
                >   
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    )
}

const CardItem = ( {number} ) => {
    const targetValue = number
    const [progress, setProgress] = useState(0)
    const { ref, inView } = useInView({ threshold: 0.1 })

    useEffect(() => {
        if (inView) {
            const increment = () => {
                setProgress((prevProgress) => {
                    if (prevProgress < targetValue) {
                        return Math.min(prevProgress + 5, targetValue)
                    }
                    return prevProgress
                })
            }
            const timer = setInterval(increment, 90) 
            return () => {
                clearInterval(timer) 
            }
        } else {
            setProgress(0)
        }
    }, [inView, targetValue])

    return (
        <Box sx={{ textAlign: 'center' }} ref={ref}>
            <CircularProgressWithLabel value={progress} progressColor={'#D73332'} />
            <Typography sx={{ fontSize: '1.3rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', marginTop: '10px' }}>
                    Overview
            </Typography>
        </Box>
    )
}

const Frontend = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
                <Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </Link>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </Link>
                <Link href="https://reactjs.org/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </Link> 
                <Link href="https://redux.js.org" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </Link> 
                <Link href="https://nextjs.org/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </Link>
                <Link href="https://www.w3.org/html/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </Link> 
                <Link href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </Link> 
                <Link href="https://sass-lang.com" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </Link> 
            </Box>
            <CardItem number='90' />
        </Box>
    )
}

const Backend = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
                <Link href="https://nodejs.org" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </Link> 
                <Link href="https://spring.io/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </Link>
                <Link href="https://www.python.org" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </Link>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </Link>
                <Link href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </Link> 
                <Link href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer" sx={classes.icons}  > <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </Link> 
            </Box>
            <CardItem number='80' />
        </Box>
    )
}

const AIML = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
                <Link href="https://pandas.pydata.org/" target="_blank" rel="noreferrer" sx={classes.icons}> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> </Link> 
                <Link href="https://pytorch.org/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width="40" height="40"/> </Link> 
                <Link href="https://scikit-learn.org/" target="_blank" rel="noreferrer" sx={classes.icons}> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </Link>
                <Link href="https://www.tensorflow.org" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </Link> 
                <Link href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width="40" height="40"/> </Link>

            </Box>
            <CardItem number='80' />
        </Box>
    )
}

const Database = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
                <Link href="https://www.postgresql.org" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </Link> 
                <Link href="https://www.mysql.com/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </Link> 
            </Box>
            <CardItem number='85' />
        </Box>
    )
}

const Other = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
                <Link href="https://aws.amazon.com" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </Link> 
                <Link href="https://git-scm.com/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </Link> 
                <Link href="https://postman.com" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </Link> 
                <Link href="https://www.mathworks.com/" target="_blank" rel="noreferrer" sx={classes.icons} > <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40"/> </Link>
            </Box>
            <CardItem number='90' />
        </Box>
    )
}

const Skills = () => { 

    const [ref, inView] = useInView({ threshold: 0.1 })
    const [value, setValue] = React.useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container sx={{ ...classes.root, opacity: inView ? '1' : '0'  }} ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""}>
            <Grid item xs={12} md={5} sx={classes.leftContainer}>
                <Box
                    component='img'
                    sx={classes.photoBox}
                    src={skillPhoto}
                >

                </Box>
            </Grid>
            <Grid item xs={12} md={7} sx={classes.rightContainer}>
                <Typography 
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}
                >
                    Skills
                </Typography>
                <Box 
                    sx={{
                        border: '2px solid #D3D3D3',
                        borderRadius: '30px',
                        padding: '10px',
                        marginTop: '20px',
                        backgroundColor: '#D3D3D3', 
                    }}
                >
                    <TabContext value={value}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <TabList onChange={handleChange} aria-label="lab API tabs example" ref={ref} className={inView ? "animate__animated animate__fadeIn" : ""}>
                            <Tab label="Frontend" value="1" />
                            <Tab label="Backend" value="2" />
                            <Tab label="AI / ML" value="3" />
                            <Tab label="Database" value="4" />
                            <Tab label="Other" value="5" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Frontend /></TabPanel>
                        <TabPanel value="2"><Backend /></TabPanel>
                        <TabPanel value="3"><AIML /></TabPanel>
                        <TabPanel value="4"><Database /></TabPanel>
                        <TabPanel value="5"><Other /></TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    )
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
    progressColor: PropTypes.string.isRequired
}

export default Skills
