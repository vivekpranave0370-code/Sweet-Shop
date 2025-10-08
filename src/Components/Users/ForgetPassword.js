import React from 'react'
import "../../Assets/Styles/Forgetpassword.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/user/resetpassword",{email:e.target.email.value}).then((res)=>{
            alert(res.data.message)
        })
        .catch(()=>{
            alert("error")
        })
    }
  return (
    <div>
<div class="form-gap">
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="card panel-default border-body">
              <div class="panel-body ">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form"  onSubmit={handleSubmit}>
    
                      <div class="form-group">
                        <div class="input-group">
                          <span><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" className="form-control "  type="email"/>
                        </div>
                      </div>
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                      </div>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
</div>

    </div>
  )
}

export default ForgetPassword