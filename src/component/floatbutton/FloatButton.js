import * as React from 'react'
import { Box } from "@mui/material"
import 'animate.css/animate.min.css'
import '../animation-style.css'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ChatIcon from '@mui/icons-material/Chat'
import EmailIcon from '@mui/icons-material/Email'


const classes = {
    root: {
        width: '100%',
        height: '100%',
        position: 'fixed', 
        bottom: 0,         
        Right: 0,
        zIndex:10,
        pointerEvents: 'none'
    },
    buttonStyle: {
        position: 'absolute', 
        bottom: 40, 
        right: 40,
        pointerEvents: 'auto'
    }
}

const actions = [
    { icon: <EmailIcon />, name: 'Email', link: '#contact' },
    { icon: <ChatIcon />, name: 'Chat' },
]


const FloatButton = () => {
    return(
        <Box sx={classes.root}>
        
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                    ...classes.buttonStyle,
                    '& .MuiSpeedDial-fab': {
                        width: 70,
                        height: 70, 
                    }
                }}
                icon={<SpeedDialIcon />}
                className='animate__animated animate__pulse'
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => {
                            if (action.name === 'Email') {
                                window.location.href = `${action.link}`;
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}

export default FloatButton