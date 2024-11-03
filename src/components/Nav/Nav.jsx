import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const Nav = () => {
      const navLocation = useLocation()
      console.log(navLocation);

      return (
            <nav className=" container mx-auto">
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
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <NavLink to='/home'>Home</NavLink>
                                          <NavLink to='/home'>Statistics</NavLink>
                                          <NavLink to='/home'>Dashboard</NavLink>


                                    </ul>
                              </div>
                              <Link to='/' className="text-xl font-bold">Gadget Shop</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 gap-8">
                                    <NavLink to='/home'>Home</NavLink>
                                    <NavLink to='/statistics'>Statistics</NavLink>
                                    <NavLink to='/dashboard'>Dashboard</NavLink>


                              </ul>
                        </div>
                        <div className="navbar-end">
                              <div className=" text-3xl font-semibold flex items-center gap-3">
                                    <span className="bg-white p-1 rounded-full cursor-pointer"><MdOutlineShoppingCart /></span>
                                    <span className="bg-white p-1 rounded-full cursor-pointer"><CiHeart /></span>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;