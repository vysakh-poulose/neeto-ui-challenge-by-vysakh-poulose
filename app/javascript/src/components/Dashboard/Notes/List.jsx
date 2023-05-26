import React, { useState } from "react";

import Card from "./Card";
import Delete from "./Delete";

const List = ({ notes }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <Delete isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
      <div className="w-full space-y-4">
        {notes.map(note => (
          <Card key={note.id} {...note} setIsDeleteOpen={setIsDeleteOpen} />
        ))}
      </div>
    </>
  );
};
export default List;
