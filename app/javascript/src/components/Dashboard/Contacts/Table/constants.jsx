import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";
import { t } from "i18next";

import Profile from "./Profile";

const CONTACTS_RANGE = Array.from({ length: 11 }, (_, index) => index + 1);

export const CONTACTS = CONTACTS_RANGE.map(contact => ({
  id: contact,
  name: contact % 2 === 0 ? "Ronald Richards" : "Jacob Jones",
  email: "albert@borer.com",
  createdAt: "Feb, 5, 2021",
}));

export const COLUMN_HEADERS = ({ setIsDeleteOpen }) => [
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
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li>{t("common.edit")}</li>
        <li onClick={() => setIsDeleteOpen(prev => !prev)}>
          {t("common.delete")}
        </li>
      </Dropdown>
    ),
  },
];
