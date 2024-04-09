'use client'
import {Box, Button} from '@mui/material'
import Logo from '../common/components/Logo'
import CloseIcon from '@/common/components/CloseIcon'
import {useTranslation} from 'react-i18next'
import {ResourceType} from '@/lib/i18n'

export default function Home() {
  const {t} = useTranslation(ResourceType.COMMON)

  function handleClick() {
    window.open('https://edgy.digital/', '_ blank')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '6rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <h2>{t('created')}</h2>
      <Logo />
      <Button onClick={handleClick} variant="contained" color="error">
        {t('website_button')}
      </Button>
      <CloseIcon color="error" />
    </Box>
  )
}
