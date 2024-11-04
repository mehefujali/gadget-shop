import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";



const MainContainer = () => {
      return (
            <div className=" container mx-auto lg:mt-96 ">
                  <h1 className=" text-center my-16 md:text-4xl text-2xl font-bold">Explore Cutting-Edge Gadgets</h1>
                  <div className=" grid grid-cols-12   gap-8">

                        <div className=" min-h-96 h-fit col-span-2">
                              <Categories></Categories>
                        </div>
                        <div className=" border-2 min-h-96 col-span-10">
                              <Outlet></Outlet>
                        </div>
                  </div>
            </div>
      );
};

export default MainContainer;