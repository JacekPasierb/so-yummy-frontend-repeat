import css from "./AuthForm.module.css";

import React, { FC, Suspense, lazy } from "react";
import { Link, useLocation } from "react-router-dom";
import RegisterForm from "../Form/RegisterForm";
import SigninForm from "../Form/SigninForm";



const AuthForm: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {pathname === "/register" && (
        <>
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <RegisterForm />
          <Link className={css.linkForm} to="/signin">
            Sign in
          </Link>
        </>
      )}
      {pathname === "/signin" && (
        <>
          <Suspense fallback={<div>Loading...</div>}></Suspense> <SigninForm />
          <Link className={css.linkForm} to="/register">
            Registration
          </Link>
        </>
      )}
    </>
  );
};

export default AuthForm;
