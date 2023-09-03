import { SWRConfig } from 'swr'

import { ProductsPage } from '../components/products'

import { getProductsList } from '@/hooks'
import { E_Locales, I_ProductsListRes } from '@/models'
import { E_ApiPaths } from '@/utils/constants'

export async function getStaticProps({ locale }: { locale: E_Locales }) {
  const data: I_ProductsListRes = await getProductsList()
  return {
    props: { fallback: { [E_ApiPaths.products]: data }, locale },
    revalidate: 60,
  }
}

export default function Page({
  fallback,
  locale,
}: {
  fallback: { [E_ApiPaths.products]: I_ProductsListRes }
  locale: E_Locales
}) {
  return (
    <SWRConfig value={{ fallback }}>
      <ProductsPage locale={locale} />
    </SWRConfig>
  )
}
