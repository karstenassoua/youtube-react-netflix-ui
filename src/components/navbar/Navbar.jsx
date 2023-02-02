import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { Component } from "react";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://camo.githubusercontent.com/ec60b3a9a7df275aedca7e14ebe0ce02bbf885fcc0d53eb32a2d59a478fface9/68747470733a2f2f692e696d6775722e636f6d2f677833434357322e706e67"
            alt=""
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>Recently Added</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Mr. Tran</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
