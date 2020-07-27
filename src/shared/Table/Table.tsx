import React from 'react'
import './Table.scss'
import Products from './Table.mockdata'

const headers = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'actions', value: 'Actions' },
  { key: 'stock', value: 'Available Stock' },
]

const Table = () => {
  return <table className="AppTable">
    <thead>
      <tr>
        {
          headers.map(header => <th key={header.key}>{header.value}</th>)
        }
      </tr>
    </thead>
    <tbody>
      {
        Products.map(product => <tr>
          <td>{ product.name }</td>
          <td>${product.price}</td>
          <td className="right">{product.stock}</td>
        </tr>)
      }
    </tbody>
  </table>
}

export default Table
