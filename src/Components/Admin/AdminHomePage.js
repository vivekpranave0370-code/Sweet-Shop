import React, { useState, useEffect } from "react";
import "../../Assets/Styles/AdminHomePage.css";
import axios from "axios";
import { Trash } from "lucide-react";

function AdminHomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/sweet/sweet").then((res) => {
      setData(res.data);
    });
  }, []);
  const submit = (id) => {
    axios.delete("http://localhost:3000/admin/productdelete/"+id).then(() => {
      window.location.reload()
    });
  };

  return (
    <div>
      <table className="table table-bordered">
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>

        {data.map((item) => {
          return (
            <tr>
              <td>
                <img
                  src={"http://localhost:3000/uploads/" + item.sweetimage}
                  width={100}
                  height={100}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={()=>submit(item._id)}>
                  <Trash />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AdminHomePage;
