import React, { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { getExpDuration } from "../util/GetToken";
import Loader from "../components/Loader";

const Main = () => {
  const loadingpage = useNavigation();

  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "TOKEN EXPIRED") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const duration = getExpDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);

  return (
    <section className="main">
      <Navbar />
      {loadingpage.state === "loading" ? <Loader /> : <Outlet />}
    </section>
  );
};

export default Main;
