import React from "react";
import { json, useLoaderData } from "react-router-dom";
import PostItems from "../components/PostItems";

const Posts = () => {
  const datas = useLoaderData();

  return (
    <section className="pp">
      {datas.map((data) => {
        return <PostItems datas={data} key={data.id} />;
      })}
    </section>
  );
};

export default Posts;
export const loader = async () => {
  const response = await fetch("http://localhost:8000/posts");

  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  } else {
    const postData = await response.json();
    // console.log(postData.posts);
    return postData.posts;
  }
};
