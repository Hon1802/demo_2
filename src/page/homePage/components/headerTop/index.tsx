import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderContext: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100%',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          fontFamily: 'fantasy',
          fontSize: '5em',
          color: '#161616'
        }}
      >
        SAKOS VIET NAM
      </Typography>
      <Typography
        sx={{
          fontFamily: 'fantasy',
          fontSize: '3em',
          color: '#161616'
        }}
      >
        Wherever you go
      </Typography>
    </Box>
  )
}

export default HeaderContext
