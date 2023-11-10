import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/">Home</Link> {/* Link to Home Page */}
        <Link to="/map">Map</Link> {/* Link to Map Page */}
        <Link to="/character">Character</Link> {/* Link to Character Page */}
      </nav>
      {/* Other content of your HomePage */}
    </div>
  );
};

export default HomePage;
