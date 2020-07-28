import React from 'react'
import './Table.scss'
import Products from './Table.mockdata'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

declare interface TableHeader {
  key: string
  value: string
  right?: boolean
}

type IndexedHeaders = {
  [key: string]: TableHeader
}

type OrganizedItem = {
  [key: string]: any
}

function organizeData (data: any[], headers: TableHeader[]):
  [OrganizedItem[], IndexedHeaders] {
  const indexedHeaders: IndexedHeaders = {}

  headers.forEach(header => {
    indexedHeaders[header.key] = {
      ...header
    }
  })

  const headerKeysInOrder = Object.keys(indexedHeaders)

  const organizedData = data.map(item => {
    const organizedItem: OrganizedItem = {}

    headerKeysInOrder.forEach(key => {
      organizedItem[key] = item[key]
    })

    organizedItem.$original = item

    return organizedItem
  })

  return [organizedData, indexedHeaders]
}

const Table = () => {
  const [organizedData, indexedHeaders] = organizeData(Products, headers)
  return <table className="AppTable">
    <thead>
      <tr>
        {
          headers.map(header =>
            <th
              className={header.right ? 'right' : ''}
              key={header.key}
            >
              {header.value}
            </th>
          )
        }
      </tr>
    </thead>
    <tbody>
      {
        organizedData.map((row, i) => {
          return <tr key={i}>
            {
              Object
                .keys(row)
                .map((item, i) =>
                  item !== '$original'
                    ? <td
                        key={row.$original.id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        { row[item] }
                      </td>
                    : null
                )
            }
          </tr>
        })
      }
    </tbody>
  </table>
}

export default Table
