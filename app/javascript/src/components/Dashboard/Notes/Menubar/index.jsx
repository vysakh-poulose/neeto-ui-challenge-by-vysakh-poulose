import React from "react";

import { Plus, Search, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import { PEOPLE, SEGMENTS, TAGS } from "./constants";

const MenuBar = ({ showMenu }) => {
  const { t } = useTranslation();

  return (
    <NeetoMenuBar showMenu={showMenu} title={t("notes.menubar.title")}>
      {PEOPLE.map(({ label, count, isActive }) => (
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
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          {t("notes.menubar.sections.segments")}
        </Typography>
      </NeetoMenuBar.SubTitle>
      {SEGMENTS.map(({ label, count }) => (
        <NeetoMenuBar.Block count={count} key={label} label={label} />
      ))}
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
          {t("notes.menubar.sections.tags")}
        </Typography>
      </NeetoMenuBar.SubTitle>
      {TAGS.map(({ label, count }) => (
        <NeetoMenuBar.Block count={count} key={label} label={label} />
      ))}
    </NeetoMenuBar>
  );
};

export default MenuBar;
