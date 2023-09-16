import { Grid } from '@mui/material'
import { ReactNode } from 'react'

import s from './cards-grid.module.scss'

import { SquareCard } from '../card'

export const CardsGrid = <T extends { _id: string }>({
  items,
  renderItem,
}: {
  items: T[]
  renderItem: (item: T) => ReactNode
}) => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {items.map((item) => (
        <Grid item xl={3} lg={4} md={5} sm={6} xs={6} key={item._id}>
          <SquareCard>{renderItem(item)}</SquareCard>
        </Grid>
      ))}
    </Grid>
    // <div className={s.grid}>

    // </div>
  )
}
