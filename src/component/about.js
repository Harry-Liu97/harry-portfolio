import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import photo from '../assets/aboutImage.jpg'
import 'animate.css/animate.min.css'
import './animation-style.css'

const classes = {
    root: {
        width: '90%',
        minHeight: '100px',
        margin: '0 auto',
        marginTop: '150px',
        marginBottom: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftContainer: {
        textAlign: 'center'
    },
    photoBox: {
        width: '80%',
        padding: '20px',
        objectFit: 'cover',
        borderRadius: '50px'
    },
    midContainer: {
        textAlign: 'center'
    },
    textTitle: {
        padding: '20px 0',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    textContent: {
        padding: '10px 0',
        fontFamily: 'Georgia, serif'

    },
    rightContainer: {
        textAlign: 'right',
        paddingRight: '60px'
    },
    expYear: {
        fontSize: '3rem',
        fontWeight: 600
    },
    expDes: {
        fontFamily: 'Georgia, serif'
    },
    expBox: {
        margin: '20px 0'
    }

}

const About = () => {
    return (
        <Grid container spacing={0} sx={classes.root}>
            <Grid item xs={12} sm={12} md={4} sx={classes.leftContainer} className="animate__animated animate__slideInLeft">
                <Box
                    component='img'
                    sx={classes.photoBox}
                    src={photo}
                >

                </Box>
            </Grid>


            <Grid item xs={12} sm={12} md={4} sx={classes.midContainer} className="animate__animated animate__fadeIn">
                <Typography sx={classes.textTitle}> About Me </Typography>
                <Typography sx={classes.textContent}>I am a proactive and innovative Full Stack Developer with a strong passion for creating visually appealing and user-friendly digital experiences. 
                    With expertise in both front-end and back-end web application development, I specialize in utilizing modern technologies such as TypeScript, JavaScript (React, Next.js), 
                    Node.js, PostgreSQL, and MySQL.
                </Typography>
                <Typography sx={classes.textContent}>
                Whether I'm developing a dynamic website, a mobile application, or any other digital product, I am committed to tackling complex challenges and improving user experiences. 
                I believe that the fusion of functionality and aesthetics is essential for successful product development. I look forward to the opportunity to collaborate with you on your projects.
                </Typography>

            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={classes.rightContainer} className="animate__animated animate__slideInRight">

                <Box sx={classes.expBox}>
                    <Typography sx={classes.expYear} >
                        2+ 
                    </Typography>
                    <Typography sx={classes.expDes}>
                        Years of Experience
                    </Typography>
                </Box>

                <Box sx={classes.expBox}>    
                    <Typography sx={classes.expYear} >
                        2+ 
                    </Typography>
                    <Typography sx={classes.expDes}>
                        Awards Received
                    </Typography>
                </Box>

                <Box sx={classes.expBox}>
                    <Typography sx={classes.expYear} >
                        6+ 
                    </Typography>
                    <Typography sx={classes.expDes}>
                        Projects Completed
                    </Typography>
                </Box>

                
            </Grid>

        </Grid>
    )
}

export default About