import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

import { formatCreationDate } from "./utils";

import { AVATAR_URL } from "../constants";

const { Menu, MenuItem } = Dropdown;

const Card = ({
  title,
  description,
  created_at: createdAt,
  setIsDeleteOpen,
}) => {
  const { t } = useTranslation();

  const { fullDate, relativeDate } = formatCreationDate(createdAt);

  return (
    <div className="neeto-ui-shadow-s border p-4">
      <div className="flex items-center justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical} position="bottom-end">
          <Menu>
            <MenuItem.Button>{t("common.edit")}</MenuItem.Button>
            <MenuItem.Button onClick={() => setIsDeleteOpen(prev => !prev)}>
              {t("common.delete")}
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {description}
      </Typography>
      <div className="mt-3 flex justify-between border-t-2 pt-4">
        <Tag label="Getting Started" style="secondary" />
        <div className="flex items-center space-x-2">
          <Clock size={12} />
          <Tooltip content={fullDate} position="bottom-end">
            <Typography style="body3">
              {t("notes.card.createdAt", { relativeDate })}
            </Typography>
          </Tooltip>
          <Avatar size="small" user={{ imageUrl: AVATAR_URL }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
