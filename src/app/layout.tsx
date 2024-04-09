'use client'

import './globals.css'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {mainTheme} from '@/theme/mainTheme'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <body>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
