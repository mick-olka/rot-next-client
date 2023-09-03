import { ProductsList } from './products-list'
import s from './products.module.scss'

import { useGetProductsList } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales } from '@/models'

export const ProductsPage = ({ locale }: { locale: E_Locales }) => {
  const { data } = useGetProductsList()
  return (
    <MainLayout description='Products Page' title='Products'>
      <ProductsList list={data.docs} locale={locale} />
    </MainLayout>
  )
}
