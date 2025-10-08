import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserHomePage.css";

import banner1 from "../../Assets/Images/banner.jpeg";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
function UserHomePage() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3000/sweet/sweet")
    .then((res)=>{
        setData(res.data)

    })

  },[])
 

 const handleSubmit=(productid)=>{
  axios
  .post("http://localhost:3000/user/usercart/"+productid,null,{
    headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
  })
  .then((result) => {
    alert(result.data.message);
    // localStorage.setItem("token",result.data.token)
    navigate("/usercart")
  })
  .catch((error) => {
    alert("error");
  });


 }
  return (
    <div className="UserHomePage-background">
      <div>
        <img src={banner1} className="banner"></img>
      </div>
      <div className="quotes-backgroundcolor">
        <marquee className="quotes-1">
          <p>No Preservation</p>
          <p className="quotes-2"> Hand- Made With Love</p>
        </marquee>
      </div>
      <div className="main-container d-flex flex-wrap">
      {data.map((item) => (
                   <div class="col-3 card-background-colour">
                   <div class="card card-border ">
                     <img src={"http://localhost:3000/uploads/"+item.sweetimage} className="card-img"></img>
 
                     <div class="card-body">
                       <h5 class="card-title">{item.title}</h5>
                       <p class="card-text">{item.description}</p>
                       <p>{item.price}</p>
                       <button onClick={()=>handleSubmit(item._id)}>
                        
                      <label>Add to cart</label> <ShoppingCart />
                       </button>
                     </div>
                   </div>
                 </div>
                ))}
        
      </div>
    </div>
  );
}

export default UserHomePage;
