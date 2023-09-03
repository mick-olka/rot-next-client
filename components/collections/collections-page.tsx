import Link from 'next/link'

import s from './collections.module.scss'

import { SquareCard } from '..'

import { useGetCollectionsList } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales } from '@/models'

export const CollectionsPage = ({ locale }: { locale: E_Locales }) => {
  const { data } = useGetCollectionsList()
  return (
    <MainLayout description='Collections' title='Categories'>
      <div className={s.grid}>
        {data.map((p) => (
          <SquareCard key={p._id}>
            <p>
              <Link href={`/collections/${p._id}`}>{p.name[locale]}</Link>
            </p>
          </SquareCard>
        ))}
      </div>
    </MainLayout>
  )
}
