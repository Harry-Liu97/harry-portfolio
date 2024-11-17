import React from "react"
import { Box, Grid, Typography, Link } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility'
import BookIcon from '@mui/icons-material/Book'
import StarRateIcon from '@mui/icons-material/StarRate'
import { useInView } from 'react-intersection-observer'
import theme from "../../styles/theme"

const classes = {
    root: {
        width: '100%',
        minHeight: '100px',
        padding: {
            sm: '20px',
            xs: '0'
        },
        display: 'flex',
        textAlign: {
            sm: 'left',
            xs: 'center'
        },
        flexDirection: 'column',
        borderRadius: '30px',
        backgroundColor: theme.palette.primary.dark,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    },
    dataContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xs: 'column'
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto 30px'
    },
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%'
    },
    streak: {
        width: '300px',
    },
    title: {
        margin: '30px 0',
        fontSize: '2rem', 
        fontFamily: 'monospace', 
        fontWeight: 'bold'
    },
    font: {
        fontFamily: theme.typography.fontFamily
    },
    iconTitle: {
        fontFamily: theme.typography.fontFamily,
        fontSize: '1.2rem'
    },
    icon: {
        verticalAlign: 'middle',
        margin: '20px 10px 20px',
        color: '#5C5C5C'
    }
}

const GitDisplay = () => {
    const [ref, inView] = useInView({ threshold: 0.1 })
    return (
        <Box sx={classes.root}>
            <Typography sx={classes.title}>
                GitHub
            </Typography>

            <Box sx={{ ...classes.dataContainer,opacity: inView ?'1':'0' }} ref={ref} className={inView ? "animate__animated animate__fadeIn" : ""}>
                <Box
                    component='img'
                    sx={classes.avatar}
                    src="https://avatars.githubusercontent.com/u/153781724"
                />
                <Box>
                    <Typography sx={{ ...classes.font, fontSize: '1.2rem', fontWeight: 'bold' }}> Harry-Liu97 </Typography>
                    <Typography sx={classes.font}> Tianyu(Harry) Liu </Typography>
                </Box>
                <Box>
                    <Typography sx={classes.iconTitle}>Repositories:</Typography>
                    <Typography sx={classes.font}><BookIcon sx={classes.icon}/>9</Typography>
                </Box>
                <Box>
                    <Typography sx={classes.iconTitle}>Followers:</Typography>
                    <Typography sx={classes.font}><VisibilityIcon sx={classes.icon}/>4</Typography>
                </Box>
                <Box>
                    <Typography sx={classes.iconTitle}>Stars:</Typography>
                    <Typography sx={classes.font}><StarRateIcon sx={classes.icon}/>3</Typography>
                </Box>
            </Box>

            <Box
                component='img'
                sx={{ padding: '0 10px 10px', opacity: inView ?'1':'0' }}
                className={inView ? "animate__animated animate__fadeIn" : ""}
                src="https://ghchart.rshah.org/Harry-Liu97"
            />
        </Box>
    )
}

export default GitDisplay