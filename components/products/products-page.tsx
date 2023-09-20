import { Pagination } from '@mui/material'

import { ProductsList } from './products-list'

import { useGetProductsList, usePaginator } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales } from '@/models'

export const ProductsPage = ({ locale }: { locale: E_Locales }) => {
  const { page, onPageChange } = usePaginator()
  const { data } = useGetProductsList(Number(page))
  const handlePageChange = (e: unknown, p: number) => {
    onPageChange(p)
  }
  return (
    <MainLayout description='Products Page' title='Products'>
      <ProductsList list={data.docs} locale={locale} />
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        size='large'
        sx={{ margin: '1rem auto', width: 'fit-content' }}
      />
    </MainLayout>
  )
}
