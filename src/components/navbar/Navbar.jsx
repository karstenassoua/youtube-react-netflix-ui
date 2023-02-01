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
            src="https://previews.dropbox.com/p/thumb/ABxtFfwW1QxXKfcDh863f4gbOTkThUrLFUwB86RaVAxkWhdXAy5P7Rl-Bw-kaBpKhnwzSn96I47O6Se85dRvDmEUkXzL0g202qWNrNTBHfhJecyDEzOGeVR-WJSMS9OJZLAElVxCx-eqJk0EPVrw86K8r8EaL_jABhMcDCco6GtMDaaT8KbCu5bLSq0IHypOwRbgJHzzKeWqVa7LlJ_Yr4wFEe-KJcuzACTzglNbjbD4yjE5BBZ61G-8ZFgSXMpanrTOxQEu_r4rnZnMSPu6hHdN0b7wua66owwRGU3L-Pbu3PF5DuvY38g4_iDI4yeDVtC__qh-fCoPMuIdOQ4B6YzUODRhQPDDCpYWwuIYsx1xOkDfT8P9cosOGYfnOe-Q82w/p.png"
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
