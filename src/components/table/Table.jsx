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
    denseStyle: {
      fontSize: "14px"
   }
  },
  rows: {
    style: {
      fontSize: "15px",
    },
    denseStyle: {
      fontSize: "14px"
  }
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
    <div className="overflow-x-auto drop-shadow">
      <DataTable
        striped={true}
        customStyles={affStyles}
        responsive="true"
        progressComponent={<Spinner size="xl" my="24" />}
        defaultSortAsc={false}
        {...props}
      />
    </div>
  );
};

export default Table;
