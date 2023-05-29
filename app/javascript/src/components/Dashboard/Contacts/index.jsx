import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Create from "./Create";
import Header from "./Header";
import Menubar from "./Menubar";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <>
      <Menubar showMenu={showMenu} />
      <Container>
        <Header setIsCreateOpen={setIsCreateOpen} setShowMenu={setShowMenu} />
        <Table />
        <Create isCreateOpen={isCreateOpen} setIsCreateOpen={setIsCreateOpen} />
      </Container>
    </>
  );
};

export default Contacts;
