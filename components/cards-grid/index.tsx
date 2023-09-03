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
    <div className={s.grid}>
      {items.map((item) => (
        <SquareCard key={item._id}>{renderItem(item)}</SquareCard>
      ))}
    </div>
  )
}
