import NavigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
      <Link to={`/`}>
        <h1 className="text-3xl font-bold">Online Library System</h1>
      </Link>
      <NavigationLinks />
    </header>
  );
};

export default Header;
