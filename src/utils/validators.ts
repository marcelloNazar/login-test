import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const CredentialsResolver = yupResolver(
  Yup.object({
    email: Yup.string()
      .required("Email is required")
      .min(6, "Email needs to be at least 6 characters.")
      .max(50, "Email cannot exceed 50 characters."),
    password: Yup.string()
      .required("Password is required")
      .min(10, "Password must be 10+ characters.")
      .matches(
        /^(?=.*[A-Za-z])[A-Za-z\d@$!%*#?&]+$/,
        "Requires at least one letter."
      )
      .matches(/^(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, "Needs at least one number.")
      .matches(
        /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
        "Must have a special character."
      ),
  })
);
