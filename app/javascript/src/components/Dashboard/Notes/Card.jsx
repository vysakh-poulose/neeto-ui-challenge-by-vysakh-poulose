import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

import { formatCreationDate } from "./utils";

const Card = ({
  title,
  description,
  created_at: createdAt,
  setIsDeleteOpen,
}) => {
  const { fullDate, relativeDate } = formatCreationDate(createdAt);
  const { t } = useTranslation();

  return (
    <div className="neeto-ui-shadow-s border p-4">
      <div className="flex items-center justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical} position="bottom-end">
          <li className="cursor-pointer">{t("common.edit")}</li>
          <li
            className="cursor-pointer"
            onClick={() => setIsDeleteOpen(prev => !prev)}
          >
            {t("common.delete")}
          </li>
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
          <Avatar
            size="small"
            user={{ imageUrl: "https://i.pravatar.cc/300" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
