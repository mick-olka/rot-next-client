import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

import { SquareCard } from '../Card/Card'
import { labs } from '../NavPane/data'

import { useGetProductsList } from '@/hooks'
import { I_ProductsListRes } from '@/models'
import { SGridPane } from '@/styles'

export const HomePage = ({ data }: { data: I_ProductsListRes }) => {
  // const { data } = useGetProductsList()

  return (
    <S.Pane>
      <h1>HomePage</h1>
      <SGridPane>
        <ProductsList products_data={data} />
      </SGridPane>
    </S.Pane>
  )
}

const ProductsList = ({ products_data }: { products_data: I_ProductsListRes | undefined }) => {
  if (products_data)
    return (
      <Box>
        {products_data.docs.map((p) => (
          <p key={p._id}>{p.name.ua}</p>
        ))}
      </Box>
    )
  return <Box>No Products</Box>
}
