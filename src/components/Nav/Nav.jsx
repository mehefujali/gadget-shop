import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import './nav.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CreateCartContextPov";
import { getDataFromLocal } from "../../utility/localstorage";

const Nav = () => {
      const { pathname } = useLocation()
      const { cart } = useContext(CartContext)

      const [localCart, setLoclaCart] = useState([])
      useEffect(() => {
            const lcoalData = getDataFromLocal("cart")
            setLoclaCart(lcoalData)
      }, [cart])



      return (
            <div className=" lg:pt-6">
                  <ToastContainer
                        hideProgressBar
                        position="top-center"
                        theme="colored"
                        autoClose="800"
                  />
                  <nav className={`${pathname.includes('/home') ? ' bg-primary-color navLinksWhite ' : 'bg-transparent text-black'}  py-3  lg:mx-6`} id="navBar">
                        <div className="navbar container mx-auto ">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                                                <FaBars />
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className={`menu menu-sm dropdown-content bg-primary-color bg-opacity-5 shadow-md border backdrop-blur-3xl ${pathname.includes('/home') ? 'text-gray-300' : 'text-black'}  tr rounded-box z-[1] mt-3 w-52 p-2  `} id="dropNav">
                                                <NavLink to='/home' >Home</NavLink>
                                                <NavLink to='/statistics' >Statistics</NavLink>
                                                <NavLink to='/dashboard'>Dashboard</NavLink>


                                          </ul>
                                    </div>
                                    <Link to='/' className=" text-md sm:text-xl font-bold ">Gadget Shop</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                    <ul className={`menu menu-horizontal px-1 gap-8  `} id="navLinks">
                                          <NavLink to='/home'>Home</NavLink>
                                          <NavLink to='/statistics'>Statistics</NavLink>
                                          <NavLink to='dashboard'>Dashboard</NavLink>


                                    </ul>
                              </div>
                              <div className="navbar-end">
                                    <div className="  font-semibold flex items-center gap-3   text-black">
                                          <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                      <div className="indicator bg-white p-2 rounded-full">
                                                            <MdOutlineShoppingCart className="text-2xl" />
                                                            <span className="badge badge-sm indicator-item">{localCart.length}</span>
                                                      </div>
                                                </div>
                                                <div
                                                      tabIndex={0}
                                                      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                                      <div className="card-body">
                                                            <span className="text-lg font-bold">{localCart.length} Items</span>

                                                            <div className="card-actions">
                                                                  <Link to='dashboard/cart' className=" w-full">
                                                                        <button className="btn bg-primary-color text-white btn-block">View cart</button>
                                                                  </Link>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <span className="bg-white p-2 rounded-full cursor-pointer border border-gray-200"><CiHeart className="text-2xl" /></span>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Nav;