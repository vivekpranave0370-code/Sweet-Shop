import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import("../../Assets/Styles/payment.css");

function Payment() {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/successfull", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  
  if (!data) {
    return <p> loading</p>;
  }
  return (
    <div>
      <div>
        <div class="payment-container">
          <div class="row">
            <div class="col-12 ">
              <div class="message-box">
                <div class="success-container">
                  <img
                    src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/31301640_2114242505489348_3921532491046846464_n.png?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=pfOalMq8BzUAX-k-rhY&_nc_ht=scontent-lcy1-1.xx&oh=3af014dd12fa6e3d1816a3425a80e516&oe=609BE04A"
                    alt=""
                  />

                  <div>
                    <hr />
                  </div>

                  <h1 class="monserrat-font">Thank you for your order</h1>

                  <div class="confirm-green-box">
                    <br />
                    <h5>ORDER CONFIRMATION</h5>
                    <p>Your order has been sucessful!</p>
                    <p>
                      {data.address},{data.country}
                    </p>

                    <p>
                      {" "}
                      {data.state},{data.city},{data.zipcode}
                    </p>
                    {data.products?.map((product) => {
                      return (
                        <div>
                          <p>
                            {product.productid.description},
                            {product.productid.title}
                          </p>
                          <p>{product.productid.price * product.count}</p>
                        </div>
                      );
                    })}
                  </div>

                <Link to={"/userhomepage"}>  <button className="shop-btn">Back to shop</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
