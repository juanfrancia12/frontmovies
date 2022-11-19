import Header from "@components/templates/layout/components/Header";
import Banner from "@organisms/banner";
import { useLocation } from "react-router-dom";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const LOCATIONS = ["/"];

const AppMovieLayout = ({ children }: Props) => {
  const location = useLocation();

  const LOCATION_HAST = location.hash;
  const LOCATION_PATHNAME = location.pathname;
  const LOCATION_SEARCH = location.search;

  const isViewBanner = LOCATIONS.includes(location.pathname);

  return (
    <div className="w-full min-h-screen relative flex flex-col">
      <Header />
      <main className="flex-grow text-white bg-[#252525]">{children}</main>
      {/* {isViewBanner && <Banner />}
      <main
        className={`flex-grow text-white bg-[#252525] ${
          !isViewBanner && ""
        }pt-20`}
      >
        {children}
      </main> */}
    </div>
  );
};

export default AppMovieLayout;
