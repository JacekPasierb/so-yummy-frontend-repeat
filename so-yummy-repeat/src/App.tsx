import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";
import SigninPage from "./components/pages/SigninPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
