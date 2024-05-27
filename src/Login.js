import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidations";
import axios from "axios";
import easygologo from "../src/images/easygologo.png";
import fluegas from "../src/images/fluegas.png";
import "./Login.css"; // Import CSS file

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = easygologo;
  }, []);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            alert("Login Successfull");
            navigate("/home");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>  
      <h1 style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 ,textAlign:'center' ,backgroundColor: "#FF6600", color:'white',borderColor: "#FF8C00" ,fontWeight:'bold' }}> Welcome to EASYGO Technologies</h1>
    <div style={{ marginTop: "30px" }}>
    </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)), url(${fluegas})`,
          backgroundSize: "1535px 720px",
          backgroundPosition: "center",
          height: "95vh",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="bg-white p-3 rounded d-flex flex-column align-items-center login-card">
            <div className="login-image mb-3">
              <img
                src={easygologo}
                alt="easygologo"
                style={{ width: "250px" }}
              />
            </div>

            <div style={{ marginTop: "25px" }}>
              <h2>
                <strong>Login</strong>
              </h2>
            </div>
            <form action="" onSubmit={handleSubmit} className="w-100">
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInput}
                  className="form-control rounded-0"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleInput}
                  className="form-control rounded-0"
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-darkorange w-100 rounded-0 custom-submit-btn"
                style={{ backgroundColor: "#FF6600", borderColor: "#FF8C00" , color:'white' , fontWeight:'bold'}}>
                Sign In
              </button>
              <p style={{ color: "red" }}>
                * You agree to our terms and policies.
              </p>
              <Link
                to="/register"
                className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                style={{fontWeight:'bold'}}>
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
