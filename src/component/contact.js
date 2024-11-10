import React from "react"
import { Box, Grid, Typography, Button, TextField, Link } from "@mui/material"
import { useForm, ValidationError } from '@formspree/react'
import { useInView } from 'react-intersection-observer'
import 'animate.css/animate.min.css'
import './animation-style.css'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import instagramIcon from '../assets/ins.svg'
import photoCrayon from '../assets/photo-crayon.jpg'

const classes = {
    root: {
        width: '90%',
        minHeight: '100px',
        paddingTop: '80px',
        margin: '0 auto',
    },
    rightContainer: {
        margin: '20px 0',
        textAlign: 'center',
        borderRadius: '30px',
        padding: '10px',
        backgroundColor: '#ffffff', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',  
    },
    photoBox: {
        width: '300px',
        borderRadius: '30px',
    },
    leftContainer: {
        margin: '20px 0',
        textAlign: 'center',
        borderRadius: '30px',
        backgroundColor: '#D3D3D3', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    },
    inputBox: {
        margin: '30px 0'
    },
    buttonSubmit: {
        width: '150px',
        color: '#000000',
        marginTop: '20px',
        border: '3px solid #A9A9A9',
        borderRadius: '12px',
        cursor: 'pointer',
        padding: '10px 20px'
    },
    icon: {
        margin: '10px 10px',
        width: '36px', 
        height: '36px',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
    content: {
        marginTop: '30px',
        padding: '0 30px',
        textAlign: 'center', 
        fontSize: '2rem', 
    },
}

const Contact = () => {
    const {ref, inView} = useInView({ threshold: 0.1 })
    const [state, handleSubmit] = useForm(process.env.REACT_APP_ENDPOINT)

    return (

        <Grid container sx={classes.root} id='contact' justifyContent='space-around'>

            <Grid item xs={12} sm={8} md={6} sx={classes.leftContainer} >
                <Typography sx={{ width: '60%', margin:'20px auto', fontSize: '1.5rem', fontFamily: 'monospace' }}>
                    GET IN TOUCH
                </Typography>
                <Box
                    component='img'
                    src={photoCrayon}
                    sx={classes.photoBox}
                />
                <Typography sx={{ width: '60%', margin:'10px auto', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    Let's Chat!
                </Typography>
                <Typography sx={{ width: '60%', margin:'0 auto', fontSize: '1rem', fontFamily: 'monospace' }}>
                    I'm available for part time, contract or full time positions
                </Typography>

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

            </Grid>

            <Grid item xs={12} sm={8} md={5} sx={{ ...classes.rightContainer, opacity: inView ? '1' : '0' }} ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""}>

                {state.succeeded ? (
                    <Typography sx={classes.content}  ref={ref} className="animate__animated animate__bounce">
                        Thanks for reaching out! Can't wait to chat! 🌟
                    </Typography>
                ) : (
                    <>
                        <Typography sx={{ width: '60%', margin:'20px auto', fontSize: '1.2rem' }}>
                            Want to chat? I'm all ears and ready to connect! 👇
                        </Typography>
                        <form onSubmit={handleSubmit}>

                            <Box sx={classes.inputBox}> 
                                <label htmlFor="name"></label>
                                <TextField id="name" label="Name" variant="outlined" name="name" sx={{ width: 250 }} required />
                                <ValidationError 
                                    prefix="Name" 
                                    field="name"
                                    errors={state.errors}
                                />
                            </Box>

                            <Box sx={classes.inputBox}>
                                <label htmlFor="email"></label>
                                <TextField id="email" label="Email" variant="outlined" name="email" type="email" sx={{ width: 250 }} required />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </Box>


                            <Box sx={classes.inputBox}>
                                <label htmlFor="subject"></label>
                                <TextField id="subject" label="Subject" variant="outlined" name="subject" sx={{ width: 250 }}  required />
                                <ValidationError 
                                    prefix="Subject" 
                                    field="subject"
                                    errors={state.errors}
                                />
                            </Box>

                            <Box sx={classes.inputBox}>
                                <label htmlFor="message"></label>
                                <TextField id="message" label="Message" variant="outlined" name="message" sx={{ width: 250 }} required multiline />

                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </Box>

                            <Button type="submit" disabled={state.submitting} sx={classes.buttonSubmit}>
                                Submit
                            </Button>
                        </form>
                </>

                )}

            </Grid>
        </Grid>
        
    )
}

export default Contact