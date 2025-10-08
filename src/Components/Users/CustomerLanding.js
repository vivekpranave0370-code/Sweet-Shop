import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import banner1 from "../../Assets/Images/banner.jpeg";
import axios from "axios";
import { ShoppingCart } from "lucide-react";

function CustomerLanding() {
  const navigate=useNavigate()
 useEffect(()=>{
const token=localStorage.getItem("token")
  
if(token==null || token==undefined){
}
else{
  navigate("/userhomepage")
}



 },[]) 
 
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/sweet/sweet")
    .then((res)=>{
        setData(res.data)

    })

  },[])
  const handleSubmit=()=>{
    navigate("/userlogin")
  }
 

 

  return (
    <div>
  
  <div className="UserHomePage-background">
      <div>
        <img src={banner1} className="banner"></img>
      </div>
      <div className="quotes-backgroundcolor">
        <div className="quotes-1">
          <p>No Preservation</p>
          <p className="quotes-2"> Hand- Made With Love</p>
        </div>
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
                       <button onClick={handleSubmit}>
                        
                      <label>Add to cart</label> <ShoppingCart />
                       </button>
                     </div>
                   </div>
                 </div>
                ))}
        
      </div>
    </div>


    </div>
  )
}

export default CustomerLanding