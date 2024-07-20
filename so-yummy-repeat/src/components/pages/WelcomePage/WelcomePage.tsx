import {
  BoxLink,
  Description,
  LinkLogin,
  LinkRegister,
  Logo,
  MainContainer,
  Title,
  WelcomeContainer,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <MainContainer>
        <Logo>
          <source
            srcSet="
      /src/images/logoWelcomeMobile1x.png 1x,
      /src/images/logoWelcomeMobile2x.png 2x
    "
            media="(max-width: 375px)"
          />

          <source
            srcSet="
      /src/images/logoWelcomeTablet1x.png 1x,
      /src/images/logoWelcomeTablet2x.png 2x
    "
            media="(max-width: 768px)"
          />

          <source
            srcSet="
      /src/images/logoWelcomeDesktop1x.png 1x,
      /src/images/logoWelcomeDesktop2x.png 2x
    "
            media="(min-width: 769px)"
          />
          <img src="/src/images/logoWelcomeDesktop1x.png" alt="logo" />
        </Logo>

        <div>
          <Title>Welcome to the app!</Title>
          <Description>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Description>
        </div>

        <BoxLink>
          <LinkRegister to="/register" className="button">
            Registration
          </LinkRegister>

          <LinkLogin to="/login" className="button">
            Sign in
          </LinkLogin>
        </BoxLink>
      </MainContainer>
    </WelcomeContainer>
  );
};

export default WelcomePage;
