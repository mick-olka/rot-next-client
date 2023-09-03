import { SWRConfig } from 'swr'

import { ProductPage } from '@/components'
import { getProductById, getProductsList } from '@/hooks'
import { I_Product } from '@/models'
import { E_ApiPaths } from '@/utils'

export async function getStaticPaths() {
  const products = await getProductsList()
  const paths = products.docs.map((p) => ({ params: { id: p._id } }))
  return {
    paths,
    fallback: 'blocking', // false or "blocking"
  }
}

const path = E_ApiPaths.products

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  if (!product) return { notFound: true }
  else
    return {
      props: {
        id: params.id,
        fallback: {
          [path + params.id]: product,
        },
      },
      revalidate: 60,
    }
}

export default function Page({ fallback, id }: { fallback: { [path]: I_Product }; id: string }) {
  return (
    <SWRConfig value={{ fallback }}>
      <ProductPage id={id} />
    </SWRConfig>
  )
}
