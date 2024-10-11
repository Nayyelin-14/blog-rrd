import { redirect } from "react-router-dom";

export const getExpDuration = () => {
  const expDate = localStorage.getItem("expDate");
  const expDateMilisec = new Date(expDate);

  const currenntTimeInMili = new Date();

  const duration = expDateMilisec - currenntTimeInMili;

  return duration;
};

export const token = () => {
  const takingtoken = localStorage.getItem("token");
  if (!takingtoken) {
    return null;
  }
  const duration = getExpDuration();
  if (duration < 0) {
    return "TOKEN EXPIRED";
  }

  return takingtoken;
};

export const checkTokenLoader = () => {
  return token();
};

export const checkTokenforRouteLoader = () => {
  const getToken = token();

  if (!getToken) {
    return redirect("/login-page?mode=login");
  }
  return getToken;
};
