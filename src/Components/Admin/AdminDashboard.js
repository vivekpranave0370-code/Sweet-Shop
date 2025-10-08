import React, { useEffect, useState } from "react";
import "../../Assets/Styles/AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import axios from "axios";
import { Trash } from "lucide-react";

function AdminDashboard() {
  const navigate=useNavigate()
  const [data, setdata] = useState();
  const [count, setcount] = useState();
  const [name, setname] = useState([]);
  const [order,setorder]=useState();
  const [sale,setsale]=useState();
  const handledelete=(id)=>{
    axios.delete("http://localhost:3000/admin/admintrash/"+id).then(()=>{window.location.reload()})

  }
  useEffect(() => {
    axios.get("http://localhost:3000/user/totalusers").then((res) => {
      setdata(res.data);
    });
    axios.get("http://localhost:3000/sweet/totalsweets").then((res) => {
      setcount(res.data);
    });

    axios.get("http://localhost:3000/admin/username").then((res) => {
      setname(res.data);
    });

    axios.get("http://localhost:3000/admin/totalorder").then((res)=>{
      setorder(res.data);
    })
    axios.get("http://localhost:3000/admin/totalsales").then((res)=>{
      setsale(res.data);
    })

    
  }, []);
  const onSubmit= ()=>{
    const token=localStorage.removeItem("token")
    navigate("/adminlogin")
  }

  return (
    <div>
      <div className="admin-layout">
        <h1>ADMIN PANNEL</h1>
      </div>
      <div className="d-flex h-100">
        <div className="dashboard-settings">
          <h2>DASHBOARD</h2>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
            {" "}
            <h5 className="admin-homepage">AdminHomePage</h5>
          </Link>

          <Link to="/uploadpage" style={{ textDecoration: "none" }}>
            {" "}
            <h5 className="adminupload">AdminUpload</h5>
          </Link>
          <Link to="/admingraph" style={{ textDecoration: "none" }}>
            {" "}
            <h5 className="admingraph">AdminGraph</h5>
          </Link>
          <div className="logout-btn">
            <button type="button"  onClick={onSubmit} class="btn btn-danger">
              LOG OUT
            </button>
          </div>
        </div>

        <div>
          <div class=" text-center three-boxes">
            <div class="row align-items-start ">
              <div className="col-3 order-box">
                <span class="text">
                  <h3>{order}</h3>
                  <p className="order">Total Orders</p>
                </span>
              </div>
              <div class="col-3 order-box-2">
                <span class="text">
                  <h3>{data}</h3>
                  <p>Total Users</p>
                </span>
              </div>
              <div class="col-3 order-box-3">
                <span class="text">
                  <h3>{count}</h3>
                  <p>Total Sweets</p>
                </span>
              </div>
              <div class="col-3 order-box-4 ">
                <span class="text">
                  <h3>${sale}</h3>
                  <p>Total Sales</p>
                </span>
              </div>
            </div>

            <div className="product-details flex-column">
              <h3 className="text-start m-4  heading-user" > USER DETAILS</h3>
              <table className="table table-borderless">
                <thead className="User-subhead">
                  <th>UserName</th>
                  <th className="Detail-date">Date Ordered</th>
                  <th>Delete</th>
                </thead>
                {name.map((item) => {
                  return (
                    <tr>
               
                      <td>{item.userid?.Username}</td>

                      <td>{item.createdAt}</td>
                      <td ><button   onClick={()=>handledelete(item._id)}><Trash className="admin-trash"/></button></td>
                    </tr>
                  );
                })}
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
