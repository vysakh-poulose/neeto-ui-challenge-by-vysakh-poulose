import { t } from "i18next";
import * as yup from "yup";

export const TAGS = [
  { label: "Getting Started", value: "gettingStarted" },
  { label: "Onboarding", value: "onboarding" },
  { label: "User Flow", value: "userFlow" },
  { label: "UX", value: "ux" },
  { label: "Bugs", value: "bugs" },
  { label: "V2", value: "v2" },
];

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required(t("notes.form.errors.required", { field: "Title" })),
  description: yup
    .string()
    .trim()
    .required(t("notes.form.errors.required", { field: "Description" })),
  assignedContact: yup
    .object()
    .required(t("notes.form.errors.required", { field: "Assigned Contact" })),
  tags: yup
    .object()
    .required(t("notes.form.errors.required", { field: "Tags" })),
});
