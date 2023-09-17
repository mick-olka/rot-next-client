import { Box, SxProps } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import { photo_url } from '@/utils'

export const Photo = ({ src, sx }: { src: string; sx?: SxProps }) => {
  return (
    <Box
      sx={{
        width: '140px',
        height: '100px',
        bgcolor: '#fff',
        position: 'relative',
        border: '10px solid #fff',
        ...sx,
      }}
    >
      <Image src={photo_url + src} alt={'R'} fill objectFit='contain' priority />
    </Box>
  )
}
