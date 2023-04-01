import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#9F01C9' // Purple
        },
        secondary: {
            main: '#EF6304' // Orange
        },
        neutral: {
            main: '#787774', // Grey
            dark: '##4a4a48' // Dark Grey
        }
    },

    typography: {
        fontFamily: `'Montserrat', sans-serif`,
        fontWeightMedium: '500',
        fontWeightBold: '600'
    }
})

theme.typography.h1 = {
    fontSize: { xs: '30px', sm: '40px', md: '50px' },
    fontWeight: '500',
    fontFamily: `'Montserrat', sans-serif`,
    color: theme.palette.neutral.dark,
}

theme.typography.h2 = {
    fontSize: { xs: '12px', sm: '18px' },
    fontWeight: '500',
    fontFamily: `'Montserrat', sans-serif`,
    color: theme.palette.neutral.dark,
}

theme.typography.p = {
    fontSize: { xs: '12px', sm: '15px' },
    fontFamily: `'Montserrat', sans-serif`,
    color: theme.palette.neutral.dark,
}

theme.typography.main = {
    fontFamily: `'Montserrat', sans-serif`,
    color: theme.palette.neutral.dark,
    fontSize: '25px',
    fontWeight: 600
}