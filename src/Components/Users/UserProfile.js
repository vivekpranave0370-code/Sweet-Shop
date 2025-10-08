import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserProfile.css";
import { SquarePen } from "lucide-react";
import axios from "axios";

function UserProfile() {
  const [profile, setprofile] = useState({
    Username: "",
    Email: "",
    number: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setprofile(res.data);
      });
  }, []);

  const handleSubmit = (event) => {
    const token=localStorage.getItem("token");
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;

    let number = event.target.number.value;
    alert(`${username},${email},${number}`);
  
  axios
  .put("http://localhost:3000/user/profile",{username,email,number},{
    headers: {Authorization:`Bearer ${token}`},
    
  })
  .then(()=>{
    setprofile({Username:username,Email:email,number})
  })
};
  return (
    <div className="border">
      <form className="text">
        <p className="name">User Name:{profile?.Username}</p>
        <p className="mail">Mail Id:{profile?.Email}</p>
        <p className="number"> Phone number:{profile?.number}</p>
      </form>

      <buton
        className="edit"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <SquarePen />
        Edit
      </buton>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <label>
                  {" "}
                  User Name: <input type="text" name="username" />
                </label>
                <label className="second-box">
                  {" "}
                  Mail id: <input type="text" name="email" />
                </label>
                <br />
                <label className="third-box">
                  {" "}
                  Number:
                  <input type="number" name="number" />
                </label>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button class="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
