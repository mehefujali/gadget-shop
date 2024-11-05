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
import { WishListContext } from "../Context/CreateWishListContextPovider";

const Nav = () => {
      const { pathname } = useLocation()
      const { cart } = useContext(CartContext)
      const { wishList } = useContext(WishListContext)
      const [localCart, setLoclaCart] = useState([])
      const [localWishList, setLocalWishlist] = useState([])
      useEffect(() => {
            const lcoalData = getDataFromLocal("cart")
            setLoclaCart(lcoalData)
      }, [cart])
      useEffect(() => {
            const localData = getDataFromLocal("wishlist")
            setLocalWishlist(localData)
      }, [wishList])




      return (
            <div className=" lg:pt-6">
                  <ToastContainer
                        hideProgressBar
                        position="top-center"
                        theme="colored"
                        autoClose="700"
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
                                                <NavLink to='aboutus'>About us</NavLink>

                                          </ul>
                                    </div>
                                    <Link to='/' className=" text-md sm:text-xl font-bold ">Gadget Shop</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                    <ul className={`menu menu-horizontal px-1 gap-8  `} id="navLinks">
                                          <NavLink to='/home'>Home</NavLink>
                                          <NavLink to='/statistics'>Statistics</NavLink>
                                          <NavLink to='dashboard'>Dashboard</NavLink>
                                          <NavLink to='aboutus'>About us</NavLink>


                                    </ul>
                              </div>
                              <div className="navbar-end">
                                    <div className="  font-semibold flex items-center gap-3   text-black">
                                          <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                      <div className="indicator bg-white p-2 rounded-full">
                                                            <Link to='/dashboard/cart'><MdOutlineShoppingCart className="text-2xl" /></Link>
                                                            <span className="badge badge-sm indicator-item text-primary-color">{localCart.length}</span>
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                      <div className="indicator bg-white p-2 rounded-full">
                                                            <Link to='/dashboard/wishlist'><CiHeart className="text-2xl" /></Link>
                                                            <span className="badge badge-sm indicator-item text-primary-color">{localWishList.length}</span>
                                                      </div>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Nav;