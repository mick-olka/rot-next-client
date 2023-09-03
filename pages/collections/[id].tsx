import { SWRConfig } from 'swr'

import { CollectionPage } from '@/components'
import { getCollectionById, getProductsList } from '@/hooks'
import { E_Locales, I_Product } from '@/models'
import { E_ApiPaths } from '@/utils'

export async function getStaticPaths() {
  const products = await getProductsList()
  const paths = products.docs.map((p) => ({ params: { id: p._id } }))
  return {
    paths,
    fallback: 'blocking', // false or "blocking"
  }
}

const path = E_ApiPaths.collections

export async function getStaticProps({
  params,
  locale,
}: {
  params: { id: string }
  locale: E_Locales
}) {
  const collections = await getCollectionById(params.id)
  if (!collections) return { notFound: true }
  else
    return {
      props: {
        id: params.id,
        fallback: {
          [path + params.id]: collections,
        },
        locale,
      },
      revalidate: 60,
    }
}

export default function Page({
  fallback,
  id,
  locale,
}: {
  fallback: { [path]: I_Product }
  id: string
  locale: E_Locales
}) {
  return (
    <SWRConfig value={{ fallback }}>
      <CollectionPage id={id} locale={locale} />
    </SWRConfig>
  )
}
