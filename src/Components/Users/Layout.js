import React, { useEffect, useState } from 'react'
import { Link,Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import "../../Assets/Styles/Layout.css"
import axios from 'axios'

function Layout() {
  const navigate=useNavigate()
  const location = useLocation()
  const [count ,setcount]=useState(0)
  

  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token==null || token==undefined){
      setcount(0)

    }
    else{


    axios
   .get(`http://localhost:3000/user/cartcount`,{
    headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}

   })  .then((res)=>{
    setcount(res.data.count)

  })
  document.addEventListener("cartev",()=>{
    axios
    .get(`http://localhost:3000/user/cartcount`,{
     headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
 
    })  .then((res)=>{
     setcount(res.data.count)
 
   })
  })
}
})

  const handleSubmit=(e)=>{
    
    
    e.preventDefault()
    sessionStorage.setItem("search",e.target.search.value)
    console.log(e.target.search.value);
    
    let ev = new Event("search")
    document.dispatchEvent(ev)
    if(location.pathname!="/sweetsearch") navigate("/sweetsearch")

  }
  const onSubmit= ()=>{
    const token=localStorage.removeItem("token")
    navigate("/userlogin")
  }
  
  return (
 

 


    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid ">
        {/* <img src={logo}></img> */}

        <Link to="/userhomepage" style={{textDecoration:"none"}}  ><a class="navbar-brand UserHomePage-Navbar" href="#">
        <bold >HOME</bold> </a> 
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item ">
              <a
                class="nav-link active UserHomePage-Home"
                aria-current="page"
                href="#"
              >
                SWEETS
              </a>
            </li> */}
            <li class="nav-item">
              <a
                class="nav-link UserHomePage-Link "
                href="#"
              >
                <Link to="/about" style={{textDecoration:"none"}} className="UserHomePage-Aboutus">ABOUT US</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link  UserHomePage-Profile">
                
              <Link to="profile" style={{textDecoration:"none"}} className="UserHomePage-Aboutus">  <bold>PROFILE</bold></Link>   
              </a>
            </li>
          </ul>

         <Link to="/usercart" style={{textDecoration:"none"}}  className="shoppingcart"> <a><ShoppingCart />{count}</a></Link>
          <form class="d-flex UserHomePage-Search" onSubmit={handleSubmit}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              name="search"
              aria-label="Search"
            ></input>
            <input
              className="btn btn-outline-success UserHomePage-Searchbtn"
              type='submit'
              value="submit"
            >
            </input>
            <button type="button" className="btn btn-danger log-btn" onClick={onSubmit}>LOG OUT</button>

          </form>
        </div>
      </div>
    </nav>
    <Outlet/>
  </div>  )
}

export default Layout