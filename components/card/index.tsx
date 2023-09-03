import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

import s from './card.module.scss'

export const SquareCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className={s.card_pane} variant='outlined'>
      <CardActionArea className={s.action_area}>
        <CardContent className={s.content}>{children}</CardContent>
      </CardActionArea>
    </Card>
  )
}
