import React from 'react'
import '../../Assets/Styles/AdminLogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
  const navigate=useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault();
    let email=event.target.email.value;
    let password=event.target.password.value;
    


  
  axios
  .post("http://localhost:3000/admin/login",{
    email,
    password
  })
  .then((result) => {
    alert(result.data.message);
    localStorage.setItem("token",result.data.token)
    navigate("/admindashboard")
  })
  .catch((error) => {
    alert("error");
  });
}
  return (
    <div class="AdminLogin-backimg">
    <div class=" Admin-head">
      <h5 class="log">ADMIN LOGIN </h5>
      <div>
        <form class="input" onSubmit={handleSubmit}>
          <p>EMAIL ID: <input type="text" placeholder='email id'name="email" class="mail"></input></p>
          <p>PASSWORD: <input type="password" placeholder='password' name="password"></input></p>
          <button class="sign-btn">Sign In</button>

          
        </form>
      </div>
      
    </div>
    </div>
  )
}

export default AdminLogin