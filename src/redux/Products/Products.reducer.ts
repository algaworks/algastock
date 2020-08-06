import Products, { Product } from "../../shared/Table/Table.mockdata"

export interface Action<T = any> {
  type: string
  payload?: T
}

export default function (state = Products, action: Action): Product[] {
  switch (action.type) {
    case 'INSERT_NEW_PRODUCT':
      return [...state, {
        ...action.payload,
        _id: String(state.length + 1)
      }]
    default:
      return state
  }
}
