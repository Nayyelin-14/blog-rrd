import React from "react";
import { ArrowLeftIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
const Details = (props) => {
  const deletesubmit = useSubmit();
  const deletepost = () => {
    const confirmstatus = window.confirm("Are u sure to delete this post");
    if (confirmstatus) {
      deletesubmit(null, { method: "DELETE" });
    }
  };

  const isToken = useRouteLoaderData("root");
  return (
    <>
      <section className="postitems">
        <div className="arrowtitle">
          <h3>Post title -{props.datadetailpost.title}</h3>
          <Link to={"/"}>
            <ArrowLeftIcon className="arrow" />
          </Link>
        </div>
        <p>Post Id - {props.datadetailpost.id}</p>
        <p className="CP">
          <ClockIcon className="clockicon" />
          Post Date - {props.datadetailpost.date}
        </p>
        <img src={props.datadetailpost.image} alt="" className="images" />
        <h3>Post Description</h3>
        <p className="desc">{props.datadetailpost.description}</p>

        {isToken && (
          <div>
            <Link to={`post-edit`}>
              <button className="btn btn1">Edit</button>
            </Link>
            <button className="btn btn1" onClick={deletepost}>
              Delete
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Details;
