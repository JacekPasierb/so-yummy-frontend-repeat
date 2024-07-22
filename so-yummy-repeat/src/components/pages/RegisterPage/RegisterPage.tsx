import AuthForm from "../../AuthForm/AuthForm";
import css from "./RegisterPage.module.css";

import React, { FC } from "react";



const RegisterPage: FC = () => {
  return (
    <main className={css.background}>
      <div className={css.flex}>
        <AuthForm />
      </div>
    </main>
  );
};

export default RegisterPage;