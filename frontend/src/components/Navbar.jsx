import React from "react";
import { NavLink, Link, useRouteLoaderData } from "react-router-dom";
const Navbar = () => {
  const isToken = useRouteLoaderData("root");

  return (
    <>
      <section className="navbar">
        <Link to={"/"}>
          <h1>Blog.io</h1>
        </Link>
        <div className="link">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Posts
          </NavLink>
          {isToken && <NavLink to={"/create-post"}>Create Post</NavLink>}
          {!isToken && <NavLink to={"/login-page?mode=login"}>Login</NavLink>}
          {isToken && <NavLink to={"/logout"}>Logout</NavLink>}
        </div>
      </section>
    </>
  );
};

export default Navbar;
