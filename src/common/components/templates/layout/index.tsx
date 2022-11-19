import Footer from "./components/Footer";
import Header from "./components/Header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
