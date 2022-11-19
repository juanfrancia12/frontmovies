import NavBar from "@organisms/navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 text-white bg-black/40">
      <div className="container mx-auto 2xl:px-40 px-2 py-4 h-20 flex justify-between items-center">
        <Link to="/">
          <span className="text-2xl font-bold tracking-widest text-white">
            FrontMovies
          </span>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
