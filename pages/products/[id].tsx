import { SWRConfig } from 'swr'

import { ProductPage } from '@/components'
import { getProductById, getProductsList, getTextById } from '@/hooks'
import { E_Locales, I_Product, TextBlocks } from '@/models'
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

export async function getStaticProps({
  params,
  locale,
}: {
  params: { id: string }
  locale: E_Locales
}) {
  const product = await getProductById(params.id)
  const t = await getTextById(TextBlocks.order)
  const d = await getTextById(TextBlocks.dollar)
  const order = t ? t.text[locale] : ''
  const dollar = d ? d.text[locale] : 1
  if (!product) return { notFound: true }
  else
    return {
      props: {
        id: params.id,
        fallback: {
          [path + params.id]: product,
        },
        locale,
        text: { order, dollar },
      },
      revalidate: 60,
    }
}

export default function Page({
  fallback,
  id,
  locale,
  text,
}: {
  locale: E_Locales
  fallback: { [path]: I_Product }
  id: string
  text: { order: string; dollar: string }
}) {
  return (
    <SWRConfig value={{ fallback }}>
      <ProductPage id={id} locale={locale} text={text} />
    </SWRConfig>
  )
}
