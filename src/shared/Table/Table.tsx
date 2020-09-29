import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}
declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean

  itemsPerPage?: number
  
  onDelete?: (item : any) => void
  onDetail?: (item : any) => void
  onEdit?: (item : any) => void
}

const Table: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
  const page = 2
  
  return <>
    <table className="AppTable">
      <thead>
        <tr>
          {
            props.headers.map(header =>
              <th
                className={header.right ? 'right' : ''}
                key={header.key}
              >
                {header.value}
              </th>
            )
          }
          {
            props.enableActions
              && <th className="right">
                Actions
              </th>
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
                          key={row.$original._id + i}
                          className={indexedHeaders[item].right ? 'right' : ''}
                        >
                          { row[item] }
                        </td>
                      : null
                  )
              }

              {
                props.enableActions
                  && <td className="actions right">
                    {
                      props.onEdit &&
                        <Button
                          onClick={() => props.onEdit && props.onEdit(row.$original)}
                        >
                          Edit
                        </Button>
                    }
                    {
                      props.onDetail &&
                        <Button
                          onClick={() => props.onDetail && props.onDetail(row.$original)}
                        >
                          Detail
                        </Button>
                    }
                    {
                      props.onDelete &&
                        <Button
                          onClick={() => props.onDelete && props.onDelete(row.$original)}
                        >
                          Delete
                        </Button>
                    }
                  </td>
              }
            </tr>
          })
        }
      </tbody>
    </table>
    <div className="Table__pagination">
      {
        Array(5)
          .fill('')
          .map((_, i) => {
            return <NavLink
              activeClassName="selected"
              to={`/products?page=${i + 1}`}
              isActive={() => page === i + 1}
            >
              { i + 1 }
            </NavLink>
          })
      }
    </div>
  </>
}

export default Table
