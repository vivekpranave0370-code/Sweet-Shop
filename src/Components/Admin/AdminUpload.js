import React from 'react'
import'../../Assets/Styles/AdminUpload.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminUpload() {
  const navigate=useNavigate()
  const handlesubmit=(event)=>{
    event.preventDefault();
   
    let formdata=new FormData(event.target)
    axios
    .post("http://localhost:3000/sweet/upload",formdata
    
  )
  .then((result) => {
    alert(result.data.message);
    navigate("/adminhome")
  })
  .catch((error) => {
    alert("error");
  });
  }
  return (
    <div>
      <form className='Uploadborder' onSubmit={handlesubmit}>
        <input  className='Upload-file'name='sweetimage' type="file"></input><br/>
       <label className='Upload-description'>Description :<input name='description' type='text'/></label><br/>
      <label className='Upload-price'>Price: <input name="price" type='number'/><br/></label>
     <label className='Upload-title'>Title: <input name='title' type='text'/></label><br/>
     <button className='Upload-Sbt'>Submit</button>
      </form>
    </div>
  )
}

export default AdminUpload