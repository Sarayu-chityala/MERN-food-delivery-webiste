import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';



const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }


  return (
    <div className='navbar'>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href="#contactus" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        <a href="#seasonaltheme" onClick={() => setMenu("seasonaltheme")} className={menu === "Blog" ? "active" : ""}>Seasonal Food</a>
        <a href="#Chef-Stories" onClick={() => setMenu("Chef-Stories")} className={menu === "Chef-Stories" ? "active" : ""}>Chef Stories</a>
        <a href="#Blog" onClick={() => setMenu("Blog")} className={menu === "Blog" ? "active" : ""}>Our Blogs</a>
        <a href="#Location" onClick={() => setMenu("Location")} className={menu === "Location" ? "active" : ""}>Our Location</a>

      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt='' />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt='' /><p>orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt='' /><p>logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar