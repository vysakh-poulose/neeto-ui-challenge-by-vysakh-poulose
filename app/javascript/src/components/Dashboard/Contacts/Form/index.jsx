import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { INITIAL_FORM_VALUES, ROLES, VALIDATION_SCHEMA } from "./constants";

const Form = ({ onClose }) => {
  const { t } = useTranslation();

  const handleSubmit = async () => {
    try {
      Toastr.success(t("toaster.success.create", { entity: "Contact" }));
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm noValidate className="w-full">
          <Pane.Body className="w-full space-y-6">
            <div className="flex w-full flex-grow-0 space-x-6">
              <Input
                required
                label={t("contacts.form.firstName")}
                name="firstName"
                placeholder={t("contacts.form.placeholders.firstName")}
              />
              <Input
                required
                label={t("contacts.form.lastName")}
                name="lastName"
                placeholder={t("contacts.form.placeholders.lastName")}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("contacts.form.email")}
              name="email"
              placeholder={t("contacts.form.placeholders.email")}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("contacts.form.role")}
              name="role"
              options={ROLES}
              placeholder={t("contacts.form.placeholders.role")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={t("button.submit")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("button.cancel")}
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
