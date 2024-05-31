import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Form, Link, json, redirect, useActionData } from "react-router-dom";
import uuid from "react-uuid";
import { token } from "../util/GetToken";

const PostForm = ({ header, click, olddata, methodfordeleteORedit }) => {
  const datas = useActionData();
  // console.log(methodfordeleteORedit);
  return (
    <section className="formsesction">
      <div className="card">
        <div className="arrowtitle">
          <h3>{header}</h3>
          <Link to={"/"}>
            <ArrowLeftIcon className="arrow" />
          </Link>
        </div>
        {datas && datas.errors && (
          <ul>
            {Object.values(datas.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        <Form method={methodfordeleteORedit}>
          <div>
            <label htmlFor="form-title"> Title</label>
            <input
              type="text"
              id="form-title"
              name="title"
              defaultValue={olddata ? olddata.title : ""}
            />
          </div>
          <div>
            <label htmlFor="form-image"> Image</label>
            <input
              type="url"
              id="form-image"
              name="image"
              defaultValue={olddata ? olddata.image : ""}
            />
          </div>

          <div>
            <label htmlFor="form-date"> Date</label>
            <input
              type="date"
              id="form-date"
              name="date"
              defaultValue={olddata ? olddata.date : ""}
            />
          </div>
          <div>
            <label htmlFor="form-description"> Description</label>
            <textarea
              name="description"
              id="form-description"
              defaultValue={olddata ? olddata.description : ""}
            ></textarea>
          </div>
          <button className="btn">{click}</button>
        </Form>
      </div>
    </section>
  );
};

export default PostForm;

export const action = async ({ request, params }) => {
  const tokentaking = token();

  const post = await request.formData();
  const methodcomingfromform = request.method;

  const postData = {
    id: uuid(),
    title: post.get("title"),
    date: post.get("date"),
    description: post.get("description"),
    image: post.get("image"),
  };
  // console.log(postData);

  let url = `${process.env.domain}/posts`;
  if (request.method === "PATCH") {
    const id = params.id;
    url = `${process.env.REACT_APP_DOMAIN}/posts/${id}`;
  }
  const response = await fetch(url, {
    method: methodcomingfromform,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokentaking,
    },
    body: JSON.stringify(postData),
  });
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  } else {
    return redirect("/");
  }
};
