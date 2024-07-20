import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-family: Poppins;
  font-size: 14px;

  color: #fafafa;
  text-decoration: underline;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
