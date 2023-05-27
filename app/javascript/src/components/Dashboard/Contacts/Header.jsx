import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header as NeetoHeader } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

const Header = ({ setShowMenu }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoHeader
      menuBarToggle={() => setShowMenu(prev => !prev)}
      title={t("contacts.header.title")}
      actionBlock={
        <Button icon={Plus} label={t("contacts.header.add")} size="small" />
      }
      searchProps={{
        placeholder: t("common.searchPlaceholder"),
        value: searchTerm,
        onChange: e => setSearchTerm(e.target.value),
      }}
    />
  );
};

export default Header;
