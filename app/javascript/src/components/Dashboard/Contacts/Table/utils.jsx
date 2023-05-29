import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";
import { t } from "i18next";

import Profile from "./Profile";

const { Menu, MenuItem } = Dropdown;

const renderOptions = ({ setIsDeleteOpen }) => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button>{t("common.edit")}</MenuItem.Button>
      <MenuItem.Button onClick={() => setIsDeleteOpen(prev => !prev)}>
        {t("common.delete")}
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);

export const buildColumns = ({ setIsDeleteOpen }) => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (_, { name }) => <Profile name={name} />,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "20%",
  },
  {
    render: () => renderOptions({ setIsDeleteOpen }),
  },
];
