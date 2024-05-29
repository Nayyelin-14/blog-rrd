import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Editpage = () => {
  const oldpostdata = useRouteLoaderData("post-details");
  //   console.log(oldpostdata);
  return (
    <div>
      <PostForm
        header={"Edit your post"}
        click={"Update"}
        olddata={oldpostdata}
        methodfordeleteORedit={"patch"}
      />
    </div>
  );
};

export default Editpage;
