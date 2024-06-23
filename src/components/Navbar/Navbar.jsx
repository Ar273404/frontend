import React, { useState } from 'react';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import { assets } from '../../assets/admin_assets/assets';
import { asset } from '../../assets/frontend_assets/asset';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkMode/DarkModeTogle';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const CartItemCount = useSelector(state => state.CartItemCount.count);

  return (
    <div className="navbar ">
      {console.log(asset)}
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}><Link to="#">Menu</Link></li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}><Link to="/contact-us">Contact us</Link></li>
      </ul>
      <div className="navbar-right">
        <DarkModeToggle />
        <img src={asset.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={asset.basket_icon} alt="" />
          </Link>
          <div className="dot"><span>{CartItemCount}</span></div>
        </div>
        <Link to="/login">
          <button className="sign-in">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
