import React from "react";
import DataTable from "react-data-table-component";

import "./Table.css";
import { Spinner } from "@chakra-ui/react";

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
        progressComponent={<Spinner size="xl" my="24" />}
        defaultSortFieldId={2}
        defaultSortAsc={false}
        {...props}
      />
    </div>
  );
};

export default Table;
