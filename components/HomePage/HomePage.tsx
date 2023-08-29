import { Box } from '@mui/material'
import React from 'react'

import s from './HomePage.module.scss'

import { I_ProductsListRes } from '@/models'

export const HomePage = ({ data }: { data: I_ProductsListRes }) => {
  // const { data } = useGetProductsList()

  return (
    <div className={s.Pane}>
      <h1>HomePage</h1>
      <div className={s.Grid}>
        <ProductsList products_data={data} />
      </div>
    </div>
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
