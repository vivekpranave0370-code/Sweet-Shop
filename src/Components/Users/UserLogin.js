import React from 'react'
import'../../Assets/Styles/UserLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function UserLogin() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log();
    axios
      .post("http://localhost:3000/user/userlogin", {
        email,
        password,
      })
      .then((result) => {
        alert(result.data.message);
        localStorage.setItem("token",result.data.token)
        navigate("/userhomepage")
      })
      .catch((error) => {
        alert("error");
      });
  };
  
  return (
    <div class="UserLoginBackground">
        <div class="UserLogin-Innerborder">
            <h2 class="UserLogin-Head">LOGIN</h2>
            <form onSubmit={handleSubmit}>
            <div class="form-floating mb-3">
  <input type="email" class="form-control UserLogin-Number "  name="email"id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput" class="UserLogin-Input">Email</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control  "  id="floatingPassword" name="password"placeholder="Password"></input>
  <label for="floatingPassword" class="UserLogin-Input">Password</label>
</div>
<button class="btn btn-primary UserLogin-Loginbtn">LOGIN</button>

            </form>
            <div>



            </div>
            <div >
            <Link to='/userregister'><button class="UserLogin-Regbtn">Register</button>
            </Link>
            <Link to='/forgetpassword'><button class="Forget-btn">ForgetPassword</button>
            </Link>

            </div>
            </div>
           
    </div>
  )
}

export default UserLogin