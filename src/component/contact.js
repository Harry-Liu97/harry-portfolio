import React from "react"
import { Box, Typography, Button, TextField, Alert } from "@mui/material"
import { useForm, ValidationError } from '@formspree/react'
import { useInView } from 'react-intersection-observer'
import 'animate.css/animate.min.css'
import './animation-style.css'

const classes = {
    root: {
        width: '90%',
        minHeight: '100px',
        margin: '0 auto',
        borderRadius: '30px',
        paddingTop: '80px',
        backgroundColor: '#D3D3D3', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    },
    contactBox: {
        width: '85%',
        minHeight: '200px',
        margin: '0 auto',
        textAlign: 'center',
        borderRadius: '30px',
        padding: '10px',
        marginTop: '20px',
        backgroundColor: '#ffffff', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
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
    successBox: {
        margin: '0 auto',
        padding: '50px 0 200px 0'
    },
    content: {
        textAlign: 'center', 
        fontSize: '2rem', 
    },
}

const Contact = () => {
    const {ref, inView} = useInView({ threshold: 0.1 })
    const [state, handleSubmit] = useForm(process.env.REACT_APP_ENDPOINT)
    if (state.succeeded) {
        return(
            <Box sx={classes.successBox}>  
                <Typography sx={classes.content}  ref={ref} className="animate__animated animate__bounce">
                    Thanks for reaching out! Can't wait to chat! 🌟
                </Typography>
            </Box>
        )  
    }
    return (

        <Box sx={classes.root} id='contact'>
            <Typography sx={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                Get In Touch 
            </Typography>

            <Box sx={{ ...classes.contactBox, opacity: inView ? '1' : '0' }} ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""}>
                <Typography sx={{ marginTop:'20px', fontSize: '1.2rem' }}>
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
            </Box>
        </Box>
        
    )
}

export default Contact