import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#E5E5E5',
            dark: '#D3D3D3'
        }
    },
    typography: {
        fontFamily: 'Georgia, serif'
    }
})

export default theme