import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const Delete = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      Toastr.success(t("alert.delete.toasterMessage", { entity: "Contact" }));
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
      message={t("alert.delete.message")}
      size="large"
      title={t("alert.delete.title", { entity: "Contact" })}
      onClose={() => setIsOpen(false)}
      onSubmit={handleDelete}
    />
  );
};

export default Delete;
