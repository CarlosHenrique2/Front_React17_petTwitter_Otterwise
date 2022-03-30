import { Link, Outlet } from "react-router-dom";

import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Bem vindo</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;
