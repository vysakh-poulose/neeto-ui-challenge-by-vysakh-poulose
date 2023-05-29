import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .required(t("common.errors.required", { field: "First Name" })),
  lastName: yup
    .string()
    .trim()
    .required(t("common.errors.required", { field: "Last Name" })),
  email: yup
    .string()
    .email(t("common.errors.invalidEmail"))
    .required(t("common.errors.required", { field: "Email" })),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required(t("common.errors.required", { field: "Role" })),
});

export const ROLES = [{ label: "Owner", value: "owner" }];
