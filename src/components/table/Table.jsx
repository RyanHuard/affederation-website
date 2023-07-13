import React from 'react'
import DataTable from 'react-data-table-component'

import "./Table.css";

const affStyles = {
    table: {
        style: {
            overflow: "auto"
        }
    },
    headRow: {
        style: {
            fontSize: "14px",
            fontWeight: "semibold",
            color: "black",
            backgroundColor: "white",
            minHeight: "40px",
            
        },
    },
    rows: {
        style: {
            fontSize:  "15px",
        }
    },
    header: {
        style: {
            backgroundColor: "white",
            fontSize: "18px",
            minHeight: "50px",
            borderBottom: "1px solid orange"
        }
    }

}

const Table = ({ data, columns, title }) => {
  return (
    <DataTable striped data={data} columns={columns} customStyles={affStyles} className="border-b" title={title}/>
  )
}

export default Table