import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { json } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

  // useEffect(()=>{
  //     let apiURL="https://dummyjson.com/products";
  //    let apiData= axios.get(apiURL).then((response)=> {return response.data});
  //    console.log("apiData",apiData);
  //    apiData.then((res)=>setData(res));

  // },[])

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        localStorage.setItem("products", JSON.stringify(res));
      })
      .catch((error) => {
        let collection = localStorage.getItem("products");
        setData(JSON.parse(collection));
      });
  }, []);

  console.log("data", data);
  return (
    <>
      <div className="text-[26px] font-bold text-center"> Dashboard Page</div>
      {data.length !== 0 &&
        data.products.map((product) => {
          return <div>{product.category}</div>;
        })}
    </>
  );
};

export default Dashboard;
