export interface I_Product {
  _id: string
  name: { ua: string }
}

export interface I_ProductsListRes {
  docs: I_Product[]
  count: number
}
