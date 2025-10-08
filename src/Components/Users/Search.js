import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Search.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
function Search() {
  const [data, setData] = useState([]);
  const [refresh,setrefresh]=useState(0)

  
  useEffect(() => {
    const searchfn = ()=>{
        setrefresh(re=>re+1)
        
    }
    document.addEventListener("search",searchfn)
    axios.get("http://localhost:3000/sweet/sweet").then((res) => {
      setData(res.data);
    });
   return ()=>{
    document.removeEventListener("search",searchfn)
   }
  }, []);
useEffect(()=>{
    if (sessionStorage.getItem("search")&&sessionStorage.getItem("search").trim().length>0) {
        axios
          .get(
            "http://localhost:3000/sweet/sweetsearch?search=" +
              sessionStorage.getItem("search")
          )
          .then((res) => {
              setData(res.data)
          })
          .catch((error) => {
            alert("error");
          });
      } else {
        axios.get("http://localhost:3000/sweet/sweet").then((res) => {
            setData(res.data);
          });
      }
},[refresh])

  return (
    <div className="d-flex flex-wrap container mx-auto gap-5">
      {data.map((item) => (
        <div className="card card-borders">
          <img
            src={"http://localhost:3000/uploads/" + item.sweetimage}
            className="card-img"
          ></img>

          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
            <p> {item.price}</p>
            <a href="#" class="btn btn-primary">
              buy
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
