import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Create from "./Create";
import Delete from "./Delete";
import Header from "./Header";
import Menubar from "./Menubar";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <Delete isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
      <Menubar showMenu={showMenu} />
      <Container>
        <Header setIsCreateOpen={setIsCreateOpen} setShowMenu={setShowMenu} />
        <Table setIsDeleteOpen={setIsDeleteOpen} />
        <Create isCreateOpen={isCreateOpen} setIsCreateOpen={setIsCreateOpen} />
      </Container>
    </>
  );
};

export default Contacts;
