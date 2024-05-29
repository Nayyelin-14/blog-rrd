import React from "react";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";
const PostItems = (props) => {
  return (
    <>
      <section className="postitems">
        <Link className="title" to={`${props.datas.id}`}>
          <h3>Post title -{props.datas.title}</h3>
        </Link>
        <span> Post Id - {props.datas.id}</span>
        <p className="CP">
          {" "}
          <ClockIcon className="clockicon" />
          Post Date - {props.datas.date}
        </p>
        <img src={props.datas.image} alt="" className="images" />
      </section>
      <hr />
    </>
  );
};

export default PostItems;
