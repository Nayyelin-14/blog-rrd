import React from "react";
import { json, useLoaderData } from "react-router-dom";
import PostItems from "../components/PostItems";

const Posts = () => {
  const datas = useLoaderData();
  // console.log(datas);
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
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts`);

  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  } else {
    const postData = await response.json();
    // console.log(postData.posts);
    return postData.posts;
  }
};
