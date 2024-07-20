import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomeContainer = styled.div`
  box-sizing: border-box;
  background-image: url("/src/images/bgWelcomeMobile1x.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;

  @media screen and (min-resolution: 192dppx) {
    background-image: url("/src/images/bgWelcomeMobile2x.png");
  }
  @media screen and (min-width: 768px) {
    background-image: url("/src/images/bgWelcomeTablet1x.png");

    @media screen and (min-resolution: 192dppx) {
      background-image: url("/src/images/bgWelcomeTablet2x.png");
    }
    @media screen and (min-width: 1399px) {
      background-image: url("/src/images/bgWelcomeDesktop1x.png");
      @media screen and (min-resolution: 192dppx) {
        background-image: url("/src/images/bgWelcomeDesktop2x.png");
      }
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 0 auto;
`;

export const Logo = styled.picture`
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }
`;

export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-size: 24px;
  font-weight: 550;
  line-height: 24px;
  letter-spacing: -2%;
  color: #fafafa;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const Description = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const BoxLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 44px;
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-top: 40px;
  }
`;

export const LinkRegister = styled(Link)`
  color: #fafafa;
  background-color: #8baa36;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid #fafafa;
    color: #fafafa;
  }
`;

export const LinkLogin = styled(Link)`
  color: #fafafa;
  background-color: transparent;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: 1px solid #fafafa;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }

  &:hover {
    background-color: #8baa36;
    border: 1px solid #8baa36;
    color: #fafafa;
  }
`;
