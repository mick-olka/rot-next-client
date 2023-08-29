import { useGetProductById } from '@/hooks'
import { MainLayout } from '@/layouts'

export const ProductPage = ({ id }: { id: string }) => {
  const { data } = useGetProductById(id)
  return (
    <MainLayout title={data.name.ua} description='Some Product'>
      <div>Product: {data.name.ua}</div>
    </MainLayout>
  )
}
