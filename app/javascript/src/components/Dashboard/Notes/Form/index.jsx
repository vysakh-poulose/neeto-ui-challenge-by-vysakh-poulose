import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import { INITIAL_FORM_VALUES, TAGS, VALIDATION_SCHEMA } from "./constants";

const Form = ({ onClose, refetch }) => {
  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
    } catch (err) {
      logger.error(err);
    } finally {
      onClose();
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
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("notes.form.title")}
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("notes.form.description")}
              name="description"
              rows={1}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("notes.form.assignedContact")}
              name="assignedContact"
              options={TAGS}
              placeholder={t("notes.form.placeholders.assignedContact")}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("notes.form.tags")}
              name="tags"
              options={TAGS}
              placeholder={t("notes.form.placeholders.tags")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={t("notes.form.submit")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("notes.form.cancel")}
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
