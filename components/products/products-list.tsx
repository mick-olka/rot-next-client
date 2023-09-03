import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import s from './products.module.scss'

import { CardsGrid } from '../cards-grid'

import { E_Locales, I_Product, I_ProductPopulated } from '@/models'
import { E_ApiPaths } from '@/utils'

const path = E_ApiPaths.products

export const ProductsList = ({
  list,
  locale,
}: {
  list: I_Product[] | I_ProductPopulated[]
  locale: E_Locales
}) => {
  return (
    <CardsGrid
      items={list}
      renderItem={(p) => (
        <Link className={s.card_link} href={`${path}${p._id}`}>
          <Box>{p.name[locale]}</Box>
        </Link>
      )}
    />
  )
}
