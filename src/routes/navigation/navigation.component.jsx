import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <h1>I am the navigation bar</h1>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
