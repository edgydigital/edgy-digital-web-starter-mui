import {ThemeOptions} from '@mui/material/styles/createTheme'

export const baseline: NonNullable<ThemeOptions['components']> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        position: 'relative',
        margin: 0
      }
    }
  }
}
