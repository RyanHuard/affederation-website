import React from "react";
import DataTable from "react-data-table-component";

import "./Table.css";

const affStyles = {
  table: {
    style: {
      overflow: "auto",
    },
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
      fontSize: "15px",
    },
  },
  header: {
    style: {
      backgroundColor: "white",
      fontSize: "18px",
      minHeight: "50px",
      borderBottom: "1px solid orange",
      
    },
  },
};

const Table = (props) => {
  return (
    <div className="overflow-x-auto ">
      <DataTable
        className="border-b"
        striped={true}
        customStyles={affStyles}
        responsive="true"
        {...props}
      />
    </div>
  );
};

export default Table;
