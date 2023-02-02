import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import React, { Component } from "react";
import "./home.scss";
import List from "../../components/list/List";
import List2 from "../../components/list2/List2";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <List2/>
    </div>
  );
};

export default Home;
