import { Pagination } from '@mui/material'

import { ProductsList } from './products-list'
import s from './products.module.scss'

import { useGetProductsList, useGetTextByName, usePaginator } from '@/hooks'
import { MainLayout } from '@/layouts'
import { E_Locales, TextBlocks } from '@/models'

export const ProductsPage = ({ locale }: { locale: E_Locales }) => {
  const { page, onPageChange } = usePaginator()
  const { data } = useGetProductsList(Number(page))
  const text = useGetTextByName(TextBlocks.main_page_text)
  const handlePageChange = (e: unknown, p: number) => {
    onPageChange(p)
  }
  return (
    <MainLayout description='Products Page' title='Products'>
      {text && <h2 className={s.text}>{text}</h2>}
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
