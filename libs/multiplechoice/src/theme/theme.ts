import { createTheme } from '@material-ui/core'

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5'
        },
        secondary: {
            main: '#f50057'
        }
    },
    shape: {
        borderRadius: 14
    }
})

