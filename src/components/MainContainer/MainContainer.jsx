import Categories from "../Categories/Categories";
import Products from "../Products/Products";


const MainContainer = () => {
      return (
            <div className=" container mx-auto">
                  <div className=" grid grid-cols-12  lg:mt-96 gap-8">
                        <div className=" min-h-96 h-fit col-span-2">
                              <Categories></Categories>
                        </div>
                        <div className=" border-2 min-h-96 col-span-10">
                              <Products></Products>
                        </div>
                  </div>
            </div>
      );
};

export default MainContainer;