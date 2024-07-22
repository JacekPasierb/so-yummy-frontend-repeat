import styled from "styled-components";

import bgMob from "/src/images/authbackMobile.png";
import bgDesk from "/src/images/authbackDesktop.png";
import bgTab from "/src/images/authbackTablet.png";
import imgMob from '/src/images/authimgMobile1x.png';
import imgMob2 from '/src/images/authimgMobile2x.png';
import imgTab from '/src/images/authimgTablet1x.png';
import imgTab2 from '/src/images/authimgTablet2x.png';
import imgDesk from '/src/images/authimgDesktop1x.png';
import imgDesk2 from '/src/images/authimgDesktop2x.png';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 115px;
  }
`;

export const BackgroundImage = styled.div`
  width: 285px;
  height: 250px;
  z-index: 1;
  top: 87px;
  margin: 0 auto;
  position: absolute;
  align-self: flex-end;
  background-size: cover;
  background-image: url(${imgMob});

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${imgMob2});
  }

  @media screen and (min-width:768px) {
    width: 409px;
    height: 359px;
    top: 96px;
    background-image: url(${imgTab});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgTab2});
    }
  }

  @media screen and (min-width: 1399px) {
    width: 532px;
    height: 468px;
    position: relative;
    top: 0px;
    margin: 0;
    align-self: center;
    background-image: url(${imgDesk});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgDesk2});
    }
  }
`;


export const Background = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 60%;
  align-self: flex-end;
  background-size: cover;
  background-image: url(${bgMob});
  background-repeat: no-repeat;

  @media screen and (min-width: 786px) {
    background-image: url(${bgTab});
  }

  @media screen and (min-width: 1399px) {
    background-image: url(${bgDesk});
    height: 45%;
  }
`;
