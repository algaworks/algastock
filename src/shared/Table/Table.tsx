import React from 'react'
import './Table.scss'

import tableMockData from './Table.mockdata'

const headers = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'actions', value: 'Actions' },
  { key: 'stock', value: 'Available Stock', right: true }
]

const Table = () => {

  return <table className="AppTable">
    <thead>
      <tr>
        {
          headers.map(header => {
            return <th
              key={header.key}
              className={header.right ? 'right' : ''}
            >{ header.value }</th>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        tableMockData.map((item, index) => {
          return <tr>
            <td>{ item.name }</td>
            <td>${ item.price }</td>
            <td className="right">{ item.stock }</td>
          </tr>
        })
      }
    </tbody>
  </table>
}

export default Table
