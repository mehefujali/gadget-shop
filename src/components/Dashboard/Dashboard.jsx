import { NavLink, Outlet } from "react-router-dom";
import './dashboard.css'

import 'react-tabs/style/react-tabs.css';
const Dashboard = () => {


      return (
            <div>
                  <div className=" bg-primary-color   items-center justify-center py-10">
                        <div className=" container mx-auto h-fit   flex flex-col items-center justify-center gap-3">
                              <h1 className=" text-white text-3xl font-bold text-center">Dashboards</h1>
                              <p className=" text-white text-lg w-2/4 mx-auto text-center ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                              <div className=" flex gap-2 items-center" id="tabBtns">
                                    <NavLink to='cart' className=" btn rounded-full btn-outline border-white text-white w-32 hover:bg-white  hover:text-primary-color hover:border-white">Cart</NavLink>

                                    <NavLink to='wishlist' className=" btn rounded-full btn-outline border-white text-white w-32 hover:bg-white hover:border-white hover:text-primary-color">
                                          Wishlist
                                    </NavLink>
                              </div>

                        </div>




                  </div>
                  <div>
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Dashboard;