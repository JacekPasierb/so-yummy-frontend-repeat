import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <picture>
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
      </picture>

      <div>
        <p>Welcome to the app!</p>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
      </div>

      <ul>
        <li>
          <Link to="/login" className="button">
            Logowanie
          </Link>
        </li>
        <li>
          <Link to="/register" className="button">
            Rejestracja
          </Link>
        </li>
      </ul>
    </>
  );
};

export default WelcomePage;
