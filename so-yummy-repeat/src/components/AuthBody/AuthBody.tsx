import { FC, ReactNode } from "react";
import { Background, BackgroundImage, Wrapper } from "./AuthBody.styled";

interface IAuthBodyProps {
  children: ReactNode;
}

const AuthBody: FC<IAuthBodyProps> = ({ children }) => {
  return (
    <Wrapper>
      <Background>
        {children}
       
      </Background>
    </Wrapper>
  );
};

export default AuthBody;
