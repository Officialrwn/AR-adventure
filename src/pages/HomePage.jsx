import { useView } from "../contexts/ViewContext";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";

const HomePage = () => {
  const { loggedIn } = useView();

  return <div>{!loggedIn ? <MapPage /> : <LoginPage />}</div>;
};

export default HomePage;
