import React from "react";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Form } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Authform = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const islogin = searchparams.get("mode") === "login";

  const data = useActionData(); // route ka ny response pyn lr dk data
  const navigation = useNavigation(); //router ka ny br loke ny ll thi
  const issubmitting = navigation.state === "submitting";
  return (
    <section className="formsesction">
      <div className="card">
        <h3>{islogin ? "Login to your account" : "Create a new account"}</h3>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.errors && <p>{data.message}</p>}
        <Form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
            />
          </div>
          <button className="btn">
            {issubmitting ? "Submitting" : islogin ? "Login" : "Register"}
          </button>
          {islogin ? (
            <>
              <p>
                Don't have an account?
                <Link className="createNew" to={"/login-page?mode=signup"}>
                  Create new account
                </Link>
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Already have an account?
                <Link className="createNew" to={"/login-page?mode=login"}>
                  Login here
                </Link>
              </p>
            </>
          )}
        </Form>
      </div>
    </section>
  );
};

export default Authform;
