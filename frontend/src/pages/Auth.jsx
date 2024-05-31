import React from "react";
import Authform from "../components/Authform";
import { json } from "react-router-dom";
import { redirect } from "react-router-dom";
import { token } from "../util/GetToken";

const Auth = () => {
  return (
    <>
      <Authform />
    </>
  );
};

export default Auth;
export const action = async ({ request, params }) => {
  const searchparamsfromURL = new URL(request.url).searchParams;
  const modefromURL = searchparamsfromURL.get("mode") || "login"; //==http://localhost:3000/login-page?mode=login so tr ko u chin tr

  //request.url ==http://localhost:3000/login-page
  //request.url).searchParams ==http://localhost:3000/login-page?mode=
  if (modefromURL !== "login" && modefromURL !== "signup") {
    throw new Error("");
  }
  const authdatafromroute = await request.formData();
  const authdata = {
    email: authdatafromroute.get("email"),
    password: authdatafromroute.get("password"),
  };

  const response = await fetch(
    `${process.env.REACT_APP_DOMAIN}/${modefromURL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //       Authorization: "Bearer " + tokentaking,
      },
      body: JSON.stringify(authdata),
    }
  );

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Cannot get Datas", status: 500 });
  }

  const resdata = await response.json();
  const token = resdata.token;
  localStorage.setItem("token", token);

  const expDate = new Date(); //milisec nk ya
  expDate.setHours(expDate.getHours() + 1);
  localStorage.setItem("expDate", expDate.toISOString());

  return redirect("/");
};
// import React from "react";
// import Authform from "../components/Authform";
// import { redirect } from "react-router-dom";

// const Auth = () => {
//   return <Authform />;
// };

// export default Auth;
// export const action = async ({ request }) => {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get("mode") || "login";

//   if (mode !== "login" && mode !== "signup") {
//     throw new Error("");
//   }

//   const data = await request.formData();
//   const authData = {
//     email: data.get("email"),
//     password: data.get("password"),
//   };

//   const response = await fetch(`http://localhost:8000/${mode}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // " Authorization": "Bearer " + token,
//     },
//     body: JSON.stringify(authData),
//   });

//   if (response.status === 422 || response.status === 401) {
//     return response;
//   }

//   if (!response.ok) {
//     throw new Error("");
//   }

//   const resData = await response.json();
//   const token = resData.token;

//   localStorage.setItem("token", token);
//   //   const expDate = new Date(); //js ka supp dk current time ko milisec  nk ya
//   //   expDate.setHours(expDate.getHours() + 1); //hours pyn change
//   //   localStorage.setItem("exp", expDate.toISOString());
//   // console.log(token);
//   return redirect("/");
// };
