import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     <div className="navbar bg-base-100">
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
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Statistics</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>
        
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
    <li><NavLink>Home</NavLink></li>
        <li><NavLink>Statistics</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
     <img  className="w-[30px]" src="https://img.icons8.com/?size=24&id=85080&format=png" alt="" />
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <img className="w-[30px]" src="https://img.icons8.com/?size=50&id=581&format=png" alt="" />
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
