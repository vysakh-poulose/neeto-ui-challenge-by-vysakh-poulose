import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ isCreateOpen, setIsCreateOpen }) => {
  const { t } = useTranslation();

  const onClose = () => setIsCreateOpen(false);

  return (
    <Pane isOpen={isCreateOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("pane.title", { entity: "Contact" })}
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};
export default Create;
