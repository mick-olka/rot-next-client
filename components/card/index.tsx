import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

import s from './card.module.scss'

export const SquareCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className={s.card_pane} variant='outlined' sx={{ height: '100%', padding: 0 }}>
      <CardActionArea sx={{ height: '100%', padding: 0 }}>
        <CardContent sx={{ height: '100%', padding: 0 }}>{children}</CardContent>
      </CardActionArea>
    </Card>
  )
}
