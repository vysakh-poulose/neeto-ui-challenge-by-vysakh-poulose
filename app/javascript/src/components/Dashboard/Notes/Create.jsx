import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ showPane, setShowPane, fetchNotes }) => {
  const { t } = useTranslation();
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("notes.pane.title")}
        </Typography>
      </Pane.Header>
      <Form refetch={fetchNotes} onClose={onClose} />
    </Pane>
  );
};
export default Create;
