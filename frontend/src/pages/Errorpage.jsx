import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import React from "react";

const Errorpage = () => {
  return (
    <div className="errorpage">
      <ExclamationCircleIcon className="icon" />{" "}
      <div>U have got something error</div>
      <Link to={"/"}>
        <button className="btn btn1">Go back to home</button>
      </Link>
    </div>
  );
};

export default Errorpage;
