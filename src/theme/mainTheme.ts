import {createTheme, ThemeOptions} from '@mui/material/styles'
import {palette} from './palette'
import {baseline} from './components/baseline'
import merge from 'lodash.merge'
import {typography} from './typography'
import {button} from './components/button'

const components: NonNullable<ThemeOptions['components']> = merge({}, baseline, button)

export const mainTheme = createTheme({
  components,
  typography: typography,
  palette: palette
})
