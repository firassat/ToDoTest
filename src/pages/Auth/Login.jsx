import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { auth } from "../../App";

const Login = () => {
  const { setstate } = useContext(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setstate((p) => p + 1);
    localStorage.setItem("_auth", "token");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="formContainer">
        <div className="formWrapper mt-32">
          <span className="logo">{/* <img src={Logo} alt="" /> */}</span>
          <span className="title text-gray-800">Welcome Back</span>
          <form onSubmit={handleSubmit}>
            <label form="email">Email address</label>
            <input
              type="email"
              style={
                error === "email is not valid"
                  ? { border: "2px solid red" }
                  : {}
              }
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label form="password">Password</label>
            <input
              type="password"
              style={
                error === "incorrect password"
                  ? { border: "2px solid red" }
                  : {}
              }
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="errormessage" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <button
              type={"submit"}
              className={"text-white bg-gray-800 w-48 md:w-52 lg:w-80"}
            >
              Sign in
            </button>
          </form>
          <p className="wrapparagraph">Not a member?</p>
          <p>
            <Link to={"/register"}>register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
