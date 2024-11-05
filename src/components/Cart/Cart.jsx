import { RiSortNumberAsc } from "react-icons/ri";

const Cart = () => {
      return (
            <div>
                  <div>
                        <div>
                              <h1>cart</h1>
                              <div>
                                    <h3>Toatal cost</h3>
                                    <button className=" text-xl font-bold flex items-center btn px-4 rounded-full bg-primary-color">Sort by Price <RiSortNumberAsc /></button>
                                    <button>Purchase</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Cart;