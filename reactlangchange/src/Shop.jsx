import React, { useEffect, useState } from "react";

import Header from "./Header";

import langData from "./data/langData";
import axios from "axios";

const Shop = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setMydata(res.data));

    // axios.get("https://fakestoreapi.com/products").then((res)=>{setMydata(res.data)});
  }, []);
  console.log("menim datamdida : " + mydata);

  const [mylangData, setMyLangData] = useState(
    localStorage.getItem("lang") === "en" ? langData.en : langData.az
  );

  if (mydata.length === 0) {
    return <h2>Loading</h2>;
  } else {
    return (
      <div>
        {mydata.map((item, i) => {
          return <p>{item.title}</p>;
        })}
        <Header />

        <div className="slider">
          <p>{mylangData.slider.book}</p>
          <p>{mylangData.slider.car}</p>
        </div>
      </div>
    );
  }
};

export default Shop;
