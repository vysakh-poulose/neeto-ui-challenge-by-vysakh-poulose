import React from "react";

import { Table as NeetoTable, Pagination } from "neetoui";

import { CONTACTS } from "./constants";
import { buildColumns } from "./utils";

const Table = ({ setIsDeleteOpen }) => (
  <>
    <div className="w-full">
      <NeetoTable
        className="odd:bg-gray-100"
        columnData={buildColumns({ setIsDeleteOpen })}
        rowData={CONTACTS}
      />
    </div>
    <div className="self-end">
      <Pagination count={20} pageNo={3} pageSize={2} />
    </div>
  </>
);

export default Table;
