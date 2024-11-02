import React, { useEffect, useState } from "react"
import { Grid, Box, Typography, Button, Link, Card, CardContent, CardActions, CardMedia, Tab } from "@mui/material"
import 'animate.css/animate.min.css'
import './animation-style.css'
import { projects_All, projects_Web, projects_Other} from "./projectList"
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useInView } from 'react-intersection-observer'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import githubIcon from '../assets/github.svg'

const classes = {
    root: {
        width: '90%',
        minHeight: '1200px',
        margin: '0 auto',
    },
    cardItem: {
        margin: '30px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif'
    },
    buttonLink: {
        color: '#000000',
        border: '3px solid #A9A9A9',
        borderRadius: '12px',
        cursor: 'pointer',
        padding: '5px 10px'
    },
    icon: {
        width: '48px', 
        height: '48px',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    }
}

const CardItem = ({imageURL, title, des, proURL}) => {
    return (
        <Card 
            sx={{ 
                width: 330, 
                height: 410,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '10px', 
                padding: 1,
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)'
                }
            }}
        >
            <CardMedia
                sx={{ 
                    height: 210,
                    objectFit: 'contain'
                }}
                component="img"
                image={imageURL}
                title={title}
            />

            <CardContent sx={{ padding: '8px' }}>
                <Typography sx={classes.textTitle}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {des}
                </Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
                <Button 
                    variant="outlined" 
                    endIcon={<OpenInNewIcon/>} 
                    href={proURL}  
                    target="_blank"
                    rel="noopener"
                    sx={classes.buttonLink} 
                    className=""
                > 
                    Visit
                </Button>

                <Link href={proURL} target="_blank" rel="noopener noreferrer">
                    <Box 
                        component='img'
                        src={githubIcon} 
                        alt='github' 
                        sx={classes.icon} 
                    />
                </Link>
            </CardActions>
        </Card>
    )
}

const All = () => {
    const [ref, inView] = useInView({ threshold: 0.01 })
    const [visibleCards, setVisibleCards] = useState([true, false, false, false, false, false])

    useEffect(() => {
        if (inView) {
    
            const timeoutIds = visibleCards.map((isVisible, index) => {
                if (!isVisible) {
                    const timeoutId = setTimeout(() => {
                        setVisibleCards(prev => {
                            const newVisible = [...prev]
                            newVisible[index] = true
                            return newVisible
                        });
                    }, index * 150)
                    return timeoutId
                }
                return null
            }).filter(id => id !== null)
    
            return () => {
                timeoutIds.forEach(clearTimeout)
            }
        } else {
            setVisibleCards([true, false, false, false, false, false])
        }
    }, [inView, visibleCards])

    return (
        <Grid container ref={ref} justifyContent="flex-start">
            {visibleCards.map((isVisible, index) => (
                <Grid item xs={12} sm={6} md={4} sx={classes.cardItem} key={index}>
                    {isVisible && (
                        <Box className="animate__animated animate__fadeIn" >
                            <CardItem 
                                imageURL={projects_All[index].imageURL} 
                                title={projects_All[index].title} 
                                des={projects_All[index].des} 
                                proURL={projects_All[index].proURL} 
                            />
                        </Box>
                    )}
                </Grid>
            ))}
        </Grid>
    )
}

const Web = () => {
    const [ref, inView] = useInView({ threshold: 0.01 })
    const [visibleCards, setVisibleCards] = useState([true, false, false, false, false])

    useEffect(() => {
        if (inView) {
    
            const timeoutIds = visibleCards.map((isVisible, index) => {
                if (!isVisible) {
                    const timeoutId = setTimeout(() => {
                        setVisibleCards(prev => {
                            const newVisible = [...prev]
                            newVisible[index] = true
                            return newVisible
                        });
                    }, index * 150)
                    return timeoutId
                }
                return null
            }).filter(id => id !== null)
    
            return () => {
                timeoutIds.forEach(clearTimeout)
            }
        } else {
            setVisibleCards([true, false, false, false, false])
        }
    }, [inView, visibleCards])

    return (
        <Grid container ref={ref} justifyContent="flex-start">
            {visibleCards.map((isVisible, index) => (
                <Grid item xs={12} sm={6} md={4} sx={classes.cardItem} key={index}>
                    {isVisible && (
                        <Box className="animate__animated animate__fadeIn" >
                            <CardItem 
                                imageURL={projects_Web[index].imageURL} 
                                title={projects_Web[index].title} 
                                des={projects_Web[index].des} 
                                proURL={projects_Web[index].proURL} 
                            />
                        </Box>
                    )}
                </Grid>
            ))}
        </Grid>
    )
}

const Other = () => {
    const [ref, inView] = useInView({ threshold: 0.01 })

    return (
        <Grid container ref={ref} justifyContent="flex-start">
            <Grid item xs={12} sm={6} md={4} sx={classes.cardItem}>
                <Box className={inView ? "animate__animated animate__fadeIn" : ""} >
                    <CardItem 
                        imageURL={projects_Other[0].imageURL} 
                        title={projects_Other[0].title} 
                        des={projects_Other[0].des} 
                        proURL={projects_Other[0].proURL} 
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

const Projects = () => {
    const [ref, inView] = useInView({ threshold: 0.1 })
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={classes.root}>
            <Typography 
                sx={{ 
                    marginBottom: '20px',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    opacity: inView ? '1' : 0 
                }}
                ref={ref} 
                className={inView ? "animate__animated animate__fadeIn" : ""}
            >
                Projects
            </Typography>
            <TabContext value={value}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <TabList onChange={handleChange} aria-label="lab API tabs example" ref={ref} className={inView ? "animate__animated animate__fadeIn" : ""} sx={{ opacity: inView ? '1' : 0 }}>
                            <Tab label="All" value="1" />
                            <Tab label="Web" value="2" />
                            <Tab label="Other" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><All /></TabPanel>
                        <TabPanel value="2"><Web /></TabPanel>
                        <TabPanel value="3"><Other /></TabPanel>
                    </TabContext>
        </Box>
    )
}

export default Projects
