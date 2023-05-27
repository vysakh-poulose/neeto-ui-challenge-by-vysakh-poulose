import React from "react";

import { Plus, Search, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import { BLOCKS } from "./constants";

const Menubar = ({ showMenu }) => {
  const { t } = useTranslation();

  return (
    <NeetoMenuBar showMenu={showMenu} title={t("contacts.menubar.title")}>
      {BLOCKS.map(({ label, count, isActive }) => (
        <NeetoMenuBar.Block
          active={isActive}
          count={count}
          key={label}
          label={label}
        />
      ))}
      <NeetoMenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
        ]}
      >
        <Typography style="h5" textTransform="uppercase" weight="bold">
          {t("contacts.menubar.sections.segments")}
        </Typography>
      </NeetoMenuBar.SubTitle>
      <NeetoMenuBar.Search collapse />
      <NeetoMenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
          {
            icon: Plus,
          },
          {
            icon: Settings,
          },
        ]}
      >
        <Typography style="h5" textTransform="uppercase" weight="bold">
          {t("contacts.menubar.sections.tags")}
        </Typography>
      </NeetoMenuBar.SubTitle>
    </NeetoMenuBar>
  );
};

export default Menubar;
