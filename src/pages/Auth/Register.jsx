import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { auth } from "../../App";

const Register = () => {
  const navigate = useNavigate();
  const { setstate } = useContext(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setstate((p) => p + 1);
    localStorage.setItem("_auth", "token");
    navigate("/");
  };

  return (
    <div className="mainWrap">
      <div className="formContainer">
        <div className="formWrapper mt-32 text-center">
          <span className="font-bold text-4xl p-4">Join</span>
          <form onSubmit={handleSubmit}>
            <div className="nameRegister flex-col lg:flex-row gap-3">
              <div className="left">
                <label form="Fname">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  id="Fname"
                  required
                />
              </div>
              <div className="right">
                <label form="Lname">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  id="Lname"
                  required
                />
              </div>
            </div>
            <label form="email">Email address</label>
            <input type="email" placeholder="Email" id="email" required />
            <label form="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              minLength="8"
              required
            />
            <label form="confirmpassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmpassword"
              minLength="8"
              required
            />
            <label form="phonenumber">Phone Number</label>

            <button
              type={"submit"}
              className={"text-white bg-gray-800 w-48 md:w-52 lg:w-80"}
            >
              Register
            </button>
          </form>

          <p className="wrapparagraph">Already a member?</p>
          <p>
            <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
