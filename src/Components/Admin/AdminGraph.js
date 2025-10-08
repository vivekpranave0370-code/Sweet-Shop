import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar,Cell } from "recharts";
import"../../Assets/Styles/AdminGraph.css"

function AdminGraph() {
  
    const [graph,setgraph]=useState([])
    useEffect(()=>{
  axios.get("http://localhost:3000/admin/barchart")
  .then((res)=>{
    setgraph(res.data.map((item)=>{item.color="red";return item}))
  const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  }]
},)

},[])
  return (
    <div>
      <div className="main-div">
        <BarChart width={730} height={250} data={graph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey="sold" >
            {graph.map((entry,idx)=>{
              return <Cell key={`C-${idx}`} fill={["red","blue","green"].at(idx%3)}/>
            })}
          </Bar>
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
    </div>
  );
}

export default AdminGraph;
