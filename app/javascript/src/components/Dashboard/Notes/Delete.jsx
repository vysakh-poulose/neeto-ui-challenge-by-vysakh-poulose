import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const Delete = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      Toastr.success(t("notes.alert.delete.toasterMessage"));
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={isDeleting}
      message={t("notes.alert.delete.message")}
      size="large"
      title={t("notes.alert.delete.title")}
      onClose={() => setIsOpen(false)}
      onSubmit={handleDelete}
    />
  );
};

export default Delete;
