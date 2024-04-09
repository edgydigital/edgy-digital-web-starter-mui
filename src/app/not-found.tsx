'use client'

import {Box, Button} from '@mui/material'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const onButtonClick = () => {
    router.back()
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
      <div>
        <Image src="/404.svg" alt="404 image" width={298} height={220} priority />
      </div>
      <h1>This page does not exist!</h1>
      <Button variant="contained" onClick={onButtonClick}>
        Hlavní stránka
      </Button>
    </Box>
  )
}
