import React, { useEffect, useState } from 'react'
import"../../Assets/Styles/Adminitem.css"
import axios from 'axios'

function AdminItemdetails() {
 const [data,setData]=useState([]);
 const [detail,setdetail]=useState();

    useEffect(()=>{
        axios
        .get("http://localhost:3000/admin/itemdetails") .then((res)=>{

   setData(res.data)

        })},[])

  const handleSubmit=((e)=>{
    e.preventDefault()
    axios
    .get("http://localhost:3000/admin/displaydetails/68ca6001ce3253808af26be1")
    .then((res)=>{
  setdetail(res.data)
    })
  })
  return (
    <div>
  <h2 className='admin-detail'>ADMIN-USER DETAILS</h2>
<div>
    <div className='text-center item-box mx-auto'>
  <div class="row align-items-start">
    <div class="col">
      Order Id
    </div>
    <div class="col">
      UserName
    </div>
    <div class="col">
      ViewMore
    </div>
  </div>
   {data.map((item)=>{
    return(

  <div class="row align-items-start">
    <div class="col">
      {item._id}
    </div>
    <div class="col">
      {item.userid.Username}
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary"  onClick={handleSubmit}data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 ViewMore
</button>

</div>
  </div>
  
    );
   })}
   
   <div class="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {detail&&
      <div class="modal-body">
      User id:{detail.userid},Price:{detail.price},<br/>Address:{detail.address},Country:{detail.country},<br/>ZipCode:{detail.zipcode},City:{detail.city},Paid:{detail.paid?"true":"false"}
      {detail.products.map((prdt)=>((<div> Product id:{prdt.productid._id},<br/>ProductCount:{prdt.count}, Product Tittle:{prdt.productid.title} , <br/>Product Description:{prdt.productid.description},Product Price:{prdt.productid.price}</div>)))
      }
      </div>
   }
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-secondary"  className="ok-btn"data-bs-dismiss="modal">Ok</button>
      </div>
    </div>
  </div>
</div>

   </div>
   </div>
   </div>
  )}



export default AdminItemdetails