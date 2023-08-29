import { useGetProductById } from '@/hooks'

export const ProductPage = ({ id }: { id: string }) => {
  const { data } = useGetProductById(id)
  return <div>Product: {data.name.ua}</div>
}
