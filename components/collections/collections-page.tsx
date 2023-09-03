import Link from 'next/link'

import s from './collections.module.scss'

import { SquareCard } from '..'

import { useGetCollectionsList } from '@/hooks'
import { MainLayout } from '@/layouts'

export const CollectionsPage = () => {
  const { data } = useGetCollectionsList()
  return (
    <MainLayout description='Collections' title='Categories'>
      <div className={s.grid}>
        {data.map((p) => (
          <SquareCard key={p._id}>
            <p>
              <Link href={`/collections/${p._id}`}>{p.name.ua}</Link>
            </p>
          </SquareCard>
        ))}
      </div>
    </MainLayout>
  )
}
