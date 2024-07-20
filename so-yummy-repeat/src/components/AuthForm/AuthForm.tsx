import { useLocation } from "react-router-dom";
import { StyledLink } from "./AuthForm.styled";

const AuthForm = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname === "/register" && (
        <>
          <StyledLink to="/login">Sign in</StyledLink>
        </>
      )}
      {pathname === "/login" && (
        <>
          <StyledLink to="/register">Registration</StyledLink>
        </>
      )}
    </>
  );
};

export default AuthForm;
