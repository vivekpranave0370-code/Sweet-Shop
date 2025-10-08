import axios from 'axios'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ("../../Assets/Styles/ResetPassword.css")

function ResetPassword() {
 const navigate=useNavigate()
  const [searchParams] = useSearchParams()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newpassword = e.target.newpassword.value
    const confirmpassword = e.target.confirmpassword.value
    const token=searchParams.get("token")
  axios.post("http://localhost:3000/user/newpassword",{newpassword,confirmpassword,token})
.then((res)=>{
alert(res.data.message)
navigate("/userlogin")
})
}
  return (
    <div>
      <div class="horizontal-form-box ">
          <div class="horizontal-info-container text-center">
            <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" />
            <p class="horizontal-heading">Reset your password</p>
            <p class="horizontal-subtitle">Your password needs to be at least 8 characters.</p>
          </div>
          <form class="horizontal-form" onSubmit={handleSubmit}>
            <div class="o3-form-group">
              <label for="new_password">New password</label>
              <input type="password" class="o3-form-control o3-input-lg" name="newpassword" id="new_password"/>
            </div>
            <div class="o3-form-group">
              <label for="confirm_password">Confirm new password</label>
              <input type="password" class="o3-form-control o3-input-lg" name="confirmpassword" id="confirm_password"/>
            </div>
            <button class="o3-btn o3-btn-primary o3-btn-block">Set new password</button>
          </form>
        </div>
    




    </div>
  )
}

export default ResetPassword