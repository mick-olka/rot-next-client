import { ProductsList } from '../products'

import { useGetCollectionById } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales } from '@/models'

export const CollectionPage = ({ id, locale }: { id: string; locale: E_Locales }) => {
  const { data } = useGetCollectionById(id)
  return (
    <MainLayout title={data.name.ua} description='Some Product'>
      <div>Collection: {data.name.ua}</div>
      <ProductsList list={data.items} locale={locale} />
    </MainLayout>
  )
}
