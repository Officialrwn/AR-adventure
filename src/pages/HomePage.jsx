import { useView } from "../contexts/ViewContext";
import Confetti from "react-confetti";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";

const HomePage = () => {
  const { loggedIn, showConfetti } = useView();

  return (
    <div>
      {showConfetti && <Confetti />}
      {!loggedIn ? <MapPage /> : <LoginPage />}
    </div>
  );
};

export default HomePage;
