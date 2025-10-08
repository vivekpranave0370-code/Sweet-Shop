import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Assets/Styles/usercart.css";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const [data, setdata] = useState([]);
  const [price, setprice] = useState(0);
  const [value, setvalue] = useState(0);
  const [pay,setpay]=useState();
  const [detail,setdetail]=useState();
  const Navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/usercart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setdata(res.data);
      });
      const cartev = new Event("cartev")
      document.dispatchEvent(cartev)
    axios
      .get("http://localhost:3000/user/getprice", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setprice(res.data.price);
      });
  }, [value]);
  function Deleteone(id) {
    axios
      .delete(`http://localhost:3000/user/usercart/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        setvalue(value + 1);
      });
  }
  function Updateone(productid) {
    axios
      .post("http://localhost:3000/user/usercart/" + productid, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        setvalue(value + 1);
      });
  }
  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3000/user/cartdelete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        setvalue(value + 1);
      });
  };
  const Submit = (event) => {
    event.preventDefault();
    let address = event.target.address.value;
    let zipcode = event.target.zipcode.value;
    let state = event.target.state.value;
    let city = event.target.city.value;
    let country=event.target.country.value;
    axios.post(
      "http://localhost:3000/user/checkout/",
      {
        address,
        zipcode,
        state,
        city,
        country
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((res)=>{
      const info = {
        address:res.data.neworder.address,
        country:res.data.neworder.country,
        zipcode:res.data.neworder.zipcode,
        state:res.data.neworder.state,
        price:res.data.neworder.price,
        txnid:res.data.neworder._id
      }
     
    payment(info)
    setdetail(res.data)
  
    })
    .catch((error) => {
      alert("error");
    });
  };

  const payment=(info)=>{
    
    axios.post(
      "http://localhost:3000/user/test",info
    )
    .then((res)=>{
setpay(res.data)
setTimeout(()=>{
  document.forms['payment_post'].submit();
},1500)
    })

  }

  const [count, setcount] = useState([]);
  useEffect(() => {
    setcount(data.map((item) => item.count));
  }, [data, value]);
  return (
    <>
    <form onSubmit={Submit} className="d-flex">

      <div>
        {data.length==0 &&(<div><h4>Cart Is Empty</h4></div>)}
        {data.map((item, idx) => {
          return (
            <div className="cart-container">
              <hr />
              <div class="cart-item py-2">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="d-flex justify-content-start mb-3">
                      <img
                        class="cart-image d-block img-fluid"
                        width={250}
                        height={250}
                        src={
                          "http://localhost:3000/uploads/" +
                          item.productid.sweetimage
                        }
                      />

                      <div class="mx-3">
                        <div className="d-flex gap-5">
                          <div>
                            <h5>{item.productid.title}</h5>
                            <p>{item.productid.description}</p>
                            <h5>{item.productid.price}</h5>
                          </div>
                          <div className="buttons">
                            <button
                            type="button"
                              onClick={(e) => {
                                e.preventDefault()
                                count[idx]--;
                                setcount([...count]);
                                Deleteone(item.productid._id);
                              }}
                            >
                              {" "}
                              -
                            </button>
                            <input type="number" value={count[idx]} />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault()
                                count[idx]++;
                                setcount([...count]);
                                Updateone(item.productid._id);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="d-flex align-items-baseline">
                          <small class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2 ">
                            In Stock
                          </small>
                          <div className="delete">
                            <button type="button"
                              className="delete-btn"
                              onClick={() => handleSubmit(item.productid._id)}
                            >
                              DELETE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div class="container">
          <h1>Shipping</h1>
          <p>Please enter your shipping details.</p>
          <hr />
          <div class="form">
            <label class="field">
              <span class="field__label" for="address">
                Address
              </span>
              <input class="field__input" type="text" id="address" />
            </label>
            <label class="field">
              <span class="field__label" for="country">
                Country
              </span>
              <select class="field__input" id="country">
                <option value="india">India</option>
                <option value="unitedstates">United States</option>
              </select>
            </label>
            <div class="fields fields--3">
              <label class="field">
                <span class="field__label" for="zipcode">
                  Zip code
                </span>
                <input class="field__input" type="text" id="zipcode" />
              </label>
              <label class="field">
                <span class="field__label" for="city">
                  City
                </span>
                <input class="field__input" type="text" id="city" />
              </label>
              <label class="field">
                <span class="field__label" for="state">
                  State
                </span>
                <select class="field__input" id="state">
                  <option value="kerala">kerala</option>
                </select>
              </label>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="price-details">
        <div class="col-12 col-sm-12 col-md-8 col-lg-4">
          <div class="bg-light rounded-3 p-4 sticky-top">
            <h6 class="mb-4">Order Summary</h6>
            <div class="d-flex justify-content-between align-items-center">
              <div>Subtotal</div>
              <div>
                <strong>Rs. {price}</strong>
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>Delivery Charge</div>
              <div>
                <strong>Rs. </strong>
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>Total</div>
              <div>
                <strong>Rs.</strong>
              </div>
            </div>
            <button class="btn btn-primary w-100 mt-4">Checkout</button>
          </div>
        </div>
      </div>
      
    </form>
    {pay && <div dangerouslySetInnerHTML={{__html:pay}}>

    </div>}
    </>
    
  );
}

export default UserCart;
