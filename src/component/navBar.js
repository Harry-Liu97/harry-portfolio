import React, {useState} from "react"
import '../component/font-style.css'
import 'animate.css/animate.min.css'
import './animation-style.css'
import { Box, Typography, Link, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import instagramIcon from '../assets/ins.svg'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const classes = {
    root: {
        width: '100%',
        minHeight: '80px',
        border: '2px solid #ccc',
        display: 'flex',
        justifyContent: {
            xs: 'space-around'
        },
        position: 'fixed', 
        top: 0,         
        left: 0,           
        backgroundColor: '#D3D3D3',
        zIndex: 10,
    },
    textGroup: {
        width:  {
            xs: '0',
            sm: '40%',
            md: '40%',
        },
        display: {
            xs: 'none',
            sm: 'flex',
            md : 'flex',
        },
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
        fontSize: '1.2rem',
        fontFamily: 'Georgia, serif',
    },
    myName: {
        width:  {
            xs: '80%',
            sm: '20%',
            md: '20%',
        },
        fontFamily: 'Chokokutai, sans-serif',
        fontSize: '2.7rem',
        textAlign: 'center'
    },
    iconGroup: {
        width:  {
            xs: '0',
            sm: '40%',
            md: '40%',
        },
        display: {
            xs: 'none',
            sm: 'flex',
            md : 'flex',
        },
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
    },
    hamburger: {
        width:  {
            xs: '20%',
            sm: '0',
            md: '0',
        },
        display: {
            xs: 'flex',
            sm: 'none',
            md : 'none',
        },
    }
}

const NavBar = () => {
    const [state, setState] = useState({
        left: false,
    })
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setState({ ...state, [anchor]: open })
    }
    
    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{ textAlign: 'right', margin: '20px' }}>
                <IconButton onClick={toggleDrawer('left', false)}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <List>
                {['About', 'Projects', 'Contact'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ marginLeft: '30px' }}>
                            <Link href={`#${text.toLowerCase()}`} underline="none" color="#000000">
                                <ListItemText primary={text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

                <Typography sx={{ margin: '20px 0 20px 20px', fontSize: '1.2rem', fontFamily:  'Georgia, serif'}}>
                    Let's Connect
                </Typography>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>    

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

                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Box sx={classes.root} className='animate__animated animate__slideInDown'>
            <Box sx={classes.textGroup}>
                <Link href="#about" underline="none" color="#000000">
                    <Typography sx={classes.text}>About</Typography>
                </Link>
                <Link href="#projects" underline="none" color="#000000">
                    <Typography sx={classes.text}>Projects</Typography>
                </Link>
                <Link href="#" underline="none" color="#000000">
                    <Typography sx={classes.text}>Contact</Typography>
                </Link>
            </Box>

            <Link href="#" underline="none" color="#000000">
                <Typography sx={classes.myName}> Harry </Typography>
            </Link>

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

            <Box sx={classes.hamburger}>
                <IconButton onClick={toggleDrawer('left', true)}><MenuIcon /></IconButton>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </Box>
        </Box>
    )
}

export default NavBar