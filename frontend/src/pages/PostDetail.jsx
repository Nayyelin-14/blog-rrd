import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import Details from "../components/Details";
import { token } from "../util/GetToken";

const PostDetail = () => {
  const datadetailpost = useRouteLoaderData("post-details");
  return (
    <>
      <Details datadetailpost={datadetailpost} />
    </>
  );
};

export default PostDetail;
export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8000/posts/${params.id}`);
  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  } else {
    const DetailData = await response.json();
    // console.log(DetailData.post);
    return DetailData.post;
  }
};

export const action = async ({ request, params }) => {
  const tokentaking = token();
  //post-details/:id so pee yay loh t khr htl pr lr p id ka
  const response = await fetch(`http://localhost:8000/posts/${params.id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokentaking,
    },
  });
  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  } else {
    return redirect("/");
  }
};
