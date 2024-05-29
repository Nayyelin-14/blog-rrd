import React from "react";
import PostForm from "../components/PostForm";

const Createpost = () => {
  return (
    <>
      <PostForm
        header={"Create your new post"}
        click={"Create"}
        methodfordeleteORedit={"post"}
      />
    </>
  );
};

export default Createpost;
