import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
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
          <NavLink to={"/create-post"}>Create Post</NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;
