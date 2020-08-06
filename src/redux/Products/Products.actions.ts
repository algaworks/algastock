import { Action } from "./Products.reducer"
import { ProductCreator } from "../../components/Products/ProductForm"

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload
  }
}