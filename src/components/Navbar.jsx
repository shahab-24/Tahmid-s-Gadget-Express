import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartProvider";

const Navbar = () => {
  const {cart, wishlist} = useContext(CartContext)
  return (
    <div className="">
     <div className="navbar pt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
          <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        
        
      </ul>
    </div>
    
    <a className="btn btn-ghost text-xl text-white font-extrabold"><span className="text-sky-400 text-4xl">Ts </span>  Gadget   <span className="text-sky-400 text-3xl">x</span>press</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex gap-4 text-white font-semibold">
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
  <div className="indicator">
  
  <img  className="w-[30px] bg-white opacity-85 rounded-full p-2" src="https://img.icons8.com/?size=24&id=85080&format=png" alt="" />

  <span className="badge badge-md badge-primary indicator-item">{cart.length}</span>
  </div>
     
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <img className="w-[30px] bg-white rounded-full p-2  opacity-85" src="https://img.icons8.com/?size=50&id=581&format=png" alt="" />
        <span className="badge badge-md badge-secondary indicator-item">{wishlist.length}</span>
      </div>
    </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
