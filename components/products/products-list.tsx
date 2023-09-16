import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import s from './products.module.scss'

import { CardsGrid } from '../cards-grid'

import { useGetTextByName } from '@/hooks'
import { E_Locales, I_Product, I_ProductPopulated } from '@/models'
import { E_ApiPaths, lineCut } from '@/utils'

const path = E_ApiPaths.products

export const ProductsList = ({
  list,
  locale,
}: {
  list: I_Product[] | I_ProductPopulated[]
  locale: E_Locales
}) => {
  const dollar = useGetTextByName('dollar')
  const d = dollar ? Number(dollar) : 1
  const nom = locale === E_Locales.ua ? '₴' : '$'
  return (
    <CardsGrid
      items={list}
      renderItem={(p) => (
        <Link className={s.card_link} href={`${path}${p._id}`}>
          <Box sx={{ height: '100%', width: '100%' }}>
            <Box sx={{ position: 'relative', height: '70%' }}>
              <Image
                src={'http://localhost:4000/api/upload/' + p.thumbnail}
                alt={p.url_name}
                fill
                style={{ objectFit: 'contain' }}
                sizes={'260 130'}
                placeholder='empty'
                priority
                // height={130}
                // width={260}
              />
            </Box>
            <Box
              sx={{
                height: '30%',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}
            >
              <Typography
                textAlign='center'
                textTransform='uppercase'
                color='#888'
                fontWeight='400'
                fontFamily='inherit'
                textOverflow='ellipsis'
                overflow='hidden'
              >
                {lineCut(p.name[locale], 80)}
              </Typography>
              <Typography color='#888' textAlign='right' marginRight='5px'>
                {'['} {nom} {p.price * d} {']'}
              </Typography>
            </Box>
          </Box>
        </Link>
      )}
    />
  )
}
