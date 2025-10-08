import React, { useEffect } from "react";
import "../../Assets/Styles/UserRegister.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function UserRegister() {
  useEffect(() => {});
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;
    let number = event.target.number.value;
    let password = event.target.password.value;
    let confirmpassword = event.target.confirmpassword.value;
    console.log();
    axios
      .post("http://localhost:3000/user/userregister", {
        username,
        email,
        number,
        password,
        confirmpassword,
      })
      .then((result) => {
        alert(result.data.message);
        navigate("/userhomepage")
      })
      .catch((error) => {
        alert("error");
      });
  };
  return (
    <div class="UserRegister-background">
      <form class="UserRegister-innerborder" onSubmit={handleSubmit}>
        <h3 class="User-head">REGISTER</h3>

        <div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              name="username"
              placeholder="name@example.com"

            />

            <label for="floatingInput" class="UserRegister-mail">
              User Name
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"

            />

            <label for="floatingInput" class="UserRegister-mail">
              mail id
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              name="number"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />

            <label for="floatingInput" class="UserRegister-mail">
              Phone number
            </label>
          </div>

          <div class="form-floating">
            <input
              type="password"
              name="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword" class="UserRegister-mail">
              {" "}
              Password
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="confirmpassword"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword" class="UserRegister-mail">
              {" "}
              Confirm Password
            </label>
          </div>
        </div>
        <div>
          <button class="btn btn-danger UserReg-btn">Register</button>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;
