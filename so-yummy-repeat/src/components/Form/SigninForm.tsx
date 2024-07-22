import css from "./SigninForm.module.css";
import icons from "/src/images/sprite.svg";
import errorIcon from "/src/images/Errorlogo.png";
import successIcon from "/src/images/Successlogo.png";
import logo1x from "/src/images/LogoMobile1x.png";
import logo2x from "/src/images/LogoMobile2x.png";
import logoTablet1x from "/src/images/LogoTablet1x.png";
import logoTablet2x from "/src/images/LogoTablet2x.png";
import logoDesktop1x from "/src/images/LogoDesctop1x.png";
import logoDesktop2x from "/src/images/LogoDesctop2x.png";

import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";

import { useMediaQuery } from "@react-hook/media-query";

import { validate } from "./SigninFormValidations";

const SigninForm = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesctop = useMediaQuery("(min-width: 1200px)");
  const isRetina = window.devicePixelRatio > 1;
  let logoSrc: string;

  if (isDesctop) {
    logoSrc = isRetina ? logoDesktop2x : logoDesktop1x;
  } else if (isTablet) {
    logoSrc = isRetina ? logoTablet2x : logoTablet1x;
  } else {
    logoSrc = isRetina ? logo2x : logo1x;
  }

  const handleSubmit = () => {};
  const handleResendVerificationEmail = () => {};

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldTouched, setFieldValue }) => (
          <Form className={css.formRegister} autoComplete="off">
            <img src={logoSrc} className={css.imggg} />
            <h2 className={css.titleRegister}>Sign In</h2>
            <div className={css.boxInput}>
              <div
                className={`${css.inputWithIcon} ${
                  touched.email && errors.email ? css.errorInputWithIcon : ""
                }`}
              >
                <svg
                  className={`${css.inputIcon} ${
                    touched.email && errors.email ? css.errorInputIcon : ""
                  }`}
                >
                  <use href={icons + `#icon-mail-01`}></use>
                </svg>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={css.inputRegister}
                  onBlur={() => setFieldTouched("email", true)}
                  autoComplete="off"
                />
                {touched.email && errors.email && (
                  <img
                    src={errorIcon}
                    alt="Error Icon"
                    className={css.additionalErrorIcon}
                  />
                )}
                {touched.email && !errors.email && (
                  <img
                    src={successIcon}
                    alt="Success Icon"
                    className={css.additionalSuccessIcon}
                  />
                )}
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.inputError}
                />
              </div>

              <div
                className={`${css.inputWithIcon} ${
                  touched.password && errors.password
                    ? css.errorInputWithIcon
                    : ""
                }`}
              >
                <svg
                  className={`${css.inputIcon} ${
                    touched.password && errors.password
                      ? css.errorInputIcon
                      : ""
                  }`}
                >
                  <use href={icons + `#icon-lock-02`}></use>
                </svg>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={css.inputRegister}
                  onBlur={() => setFieldTouched("password", true)}
                />
                {touched.password && errors.password && (
                  <img
                    src={errorIcon}
                    alt="Error Icon"
                    className={css.additionalErrorIcon}
                  />
                )}
                {touched.password && !errors.password && (
                  <img
                    src={successIcon}
                    alt="Success Icon"
                    className={css.additionalSuccessIcon}
                  />
                )}
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.inputError}
                />
              </div>
            </div>

            <p className={css.txt}>
              Email nie dotarł ?
              <button
                type="button"
                className={css.resendButton}
                onClick={handleResendVerificationEmail}
              >
                Wyślij ponownie
              </button>
            </p>

            <button type="submit" className={css.btnRegister}>
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SigninForm;
