import { createVuetify } from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const githubDarkTheme = {
  dark: true,
  colors: {
    background: '#0d1117',
    surface: '#161b22',
    'surface-variant': '#21262d',
    primary: '#2ea043',
    'primary-darken-1': '#238636',
    secondary: '#58a6ff',
    accent: '#bc8cff',
    error: '#f85149',
    info: '#388bfd',
    success: '#3fb950',
    warning: '#d29922',
    'on-background': '#c9d1d9',
    'on-surface': '#f0f6fc',
    'border-color': '#30363d',
    title: '#1F883D'
  },
}

const githubLightTheme = {
  dark: false,
  colors: {
    background: '#f6f8fa',
    surface: '#ffffff',
    'surface-variant': '#f3f4f6',
    primary: '#1f883d',
    'primary-darken-1': '#1a7f37',
    secondary: '#0969da',
    accent: '#8250df',
    error: '#cf222e',
    info: '#0969da',
    success: '#1a7f37',
    warning: '#9a6700',
    'on-background': '#24292f',
    'on-surface': '#000000',
    'border-color': '#d0d7de',
    title: '#1F883D'
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'githubLight',
    themes: {
      githubDark: githubDarkTheme,
      githubLight: githubLightTheme,
    },
  },
})
