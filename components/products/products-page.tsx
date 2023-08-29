import Link from 'next/link'

import { useGetProductsList } from '@/hooks'
import { MainLayout } from '@/layouts'

export const ProductsPage = () => {
  const { data } = useGetProductsList()

  return (
    <MainLayout description='Products Page' title='Products'>
      {data.docs.map((p) => (
        <p key={p._id}>
          <Link href={`/products/${p._id}`}>{p.name.ua}</Link>
        </p>
      ))}
    </MainLayout>
  )
}
