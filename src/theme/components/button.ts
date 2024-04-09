import {ThemeOptions} from '@mui/material/styles/createTheme'

export const button: ThemeOptions['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true
    }
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontSize: '1.4rem',
        fontWeight: 600,
        height: '3.6rem',
        padding: '0rem 1.6rem',
        lineHeight: 1.2
      },
      sizeSmall: {
        height: '3rem',
        padding: '0.8rem 1.6rem'
      },
      sizeMedium: {
        height: '3.6rem',
        padding: '1.2rem 1.6rem'
      },
      sizeLarge: {
        height: '4.2rem',
        padding: '0rem 2.2rem'
      }
    }
  }
}
