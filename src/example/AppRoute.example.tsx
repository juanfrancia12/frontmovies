import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom";

const AppExample = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />}>
            <Route index element={<div>index del home index</div>} />
            <Route
              path="view-dashboard-home"
              element={<div>view dashboard home</div>}
            />
            <Route
              path="list-users-home"
              element={<div>list users home</div>}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
        <Route path="layout" element={<LayoutPage />} />
      </Routes>
    </Router>
  );
};

const LayoutPage = () => {
  return (
    <>
      <aside className="h-screen w-1/5 inline-grid bg-blue-200 sticky top-0 overflow-auto">
        SIDEBAR
      </aside>
      <div className="w-4/5 inline-grid bg-green-200">
        <header className="h-20 bg-red-200 sticky top-0">HEADER</header>
        <main className="bg-red-300">MAIN</main>
      </div>
    </>
  );
};

const Layout = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "1rem",
  });

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <NavLink to="/layout" style={style}>
          Layout
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0", backgroundColor: "#cccccc" }}>
        <Outlet />
      </main>
    </>
  );
};

const HomeIndex = () => {
  return <div className="">HOMEEEE INDEXXXXXXXXXX</div>;
};

const Home = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "1rem",
  });
  return (
    <>
      <h2>Home</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="view-dashboard-home" style={style}>
          Ver dashboard - Home
        </NavLink>
        <NavLink to="list-users-home" style={style}>
          Ver lista de usuarios - Home
        </NavLink>
      </nav>
      <main style={{ padding: "1rem 0", backgroundColor: "#f3f3f3" }}>
        <Outlet />
      </main>
    </>
  );
};

const About = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "1rem",
  });
  return (
    <>
      <h2>Reportes</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="list-professor-report" style={style}>
          Ver profesores - Reportes
        </NavLink>
        <NavLink to="data-analisis-report" style={style}>
          Ver analisis de datos - Reportes
        </NavLink>
      </nav>
    </>
  );
};

export default AppExample;
