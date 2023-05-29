import React from "react";

import { Table as NeetoTable, Pagination } from "neetoui";

import { COLUMN_HEADERS, CONTACTS } from "./constants";

const Table = ({ setIsDeleteOpen }) => (
  <>
    <div className="w-full">
      <NeetoTable
        className="odd:bg-gray-100"
        columnData={COLUMN_HEADERS({ setIsDeleteOpen })}
        rowData={CONTACTS}
      />
    </div>
    <div className="self-end">
      <Pagination count={20} pageNo={3} pageSize={2} />
    </div>
  </>
);

export default Table;
