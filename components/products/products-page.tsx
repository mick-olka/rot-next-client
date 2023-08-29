import Link from 'next/link'

import s from './Products.module.scss'

import { SquareCard } from '../'

import { useGetProductsList } from '@/hooks'
import { MainLayout } from '@/layouts'

export const ProductsPage = () => {
  const { data } = useGetProductsList()
  return (
    <MainLayout description='Products Page' title='Products'>
      <div className={s.grid}>
        {data.docs.map((p) => (
          <SquareCard key={p._id}>
            <p>
              <Link href={`/products/${p._id}`}>{p.name.ua}</Link>
            </p>
          </SquareCard>
        ))}
      </div>
    </MainLayout>
  )
}
