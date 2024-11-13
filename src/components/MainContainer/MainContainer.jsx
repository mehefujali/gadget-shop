import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";



const MainContainer = () => {
      return (
            <div className=" container mx-auto mt-36 md:mt-96 ">
                  <h1 className=" text-center my-16 md:text-4xl text-2xl font-bold">Explore Cutting-Edge Gadgets</h1>
                  <div className=" grid grid-cols-12   md:gap-8">

                        <div className=" lg:min-h-96 h-fit w-full col-span-12 lg:col-span-3 xl:col-span-2" >
                              <Categories></Categories>
                        </div>
                        <div className=" border-2  border-white bg-white bg-opacity-30 rounded-xl min-h-96 col-span-12 lg:col-span-9 xl:col-span-10">
                              <Outlet></Outlet>
                        </div>
                  </div>
            </div>
      );
};

export default MainContainer;