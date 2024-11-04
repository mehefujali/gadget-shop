import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import './nav.css'

const Nav = () => {
      const { pathname } = useLocation()

      return (
            <div className=" lg:pt-6">
                  <nav className={`${pathname.includes('/home') ? ' bg-primary-color navLinksWhite ' : 'bg-transparent text-black'}  py-3  lg:mx-6`} id="navBar">
                        <div className="navbar container mx-auto ">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                                                <FaBars />
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className={`menu menu-sm dropdown-content bg-primary-color bg-opacity-5 shadow-md border backdrop-blur-3xl ${pathname === '/home' ? 'text-white' : 'text-black'}  rounded-box z-[1] mt-3 w-52 p-2  `} id="dropNav">
                                                <NavLink to='/home'>Home</NavLink>
                                                <NavLink to='/statistics'>Statistics</NavLink>
                                                <NavLink to='/dashboard'>Dashboard</NavLink>


                                          </ul>
                                    </div>
                                    <Link to='/' className=" text-md sm:text-xl font-bold ">Gadget Shop</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                    <ul className={`menu menu-horizontal px-1 gap-8`} id="navLinks">
                                          <NavLink to='/home'>Home</NavLink>
                                          <NavLink to='/statistics'>Statistics</NavLink>
                                          <NavLink to='/dashboard'>Dashboard</NavLink>


                                    </ul>
                              </div>
                              <div className="navbar-end">
                                    <div className=" text-2xl font-semibold flex items-center gap-3  text-black">
                                          <span className="bg-white p-2 rounded-full cursor-pointer border border-gray-200"><MdOutlineShoppingCart /></span>
                                          <span className="bg-white p-2 rounded-full cursor-pointer border border-gray-200"><CiHeart /></span>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Nav;