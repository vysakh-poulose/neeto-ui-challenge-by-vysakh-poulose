import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Header from "./Header";
import Menubar from "./Menubar";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <Menubar showMenu={showMenu} />
      <Container>
        <Header setShowMenu={setShowMenu} />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
