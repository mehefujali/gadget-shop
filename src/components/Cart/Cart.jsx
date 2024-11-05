import { useContext, useEffect, useState } from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { getDataFromLocal } from "../../utility/localstorage";
import CartCard from "../CartCard/CartCard";
import { CartContext } from "../Context/CreateCartContextPov";

const Cart = () => {
      const [cartProductsId, setCartsProductId] = useState([])
      const [products, setProducts] = useState([])
      const { cart } = useContext(CartContext)
      useEffect(() => {
            const cartsId = getDataFromLocal("cart")
            setCartsProductId(cartsId)
      }, [cart])
      useEffect(() => {
            fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])
      const { setCart } = useContext(CartContext)

      const filterCartProduct = products.filter(product => cartProductsId.includes(product.product_id.toString()))





      return (
            <div>
                  <div className=" container mx-auto ">
                        {/* nav  */}
                        <div className=" flex justify-between items-center" >
                              <h1 className=" text-2xl font-bold">cart</h1>
                              <div className=" flex flex-col sm:flex-row items-center gap-1 md:gap-4">
                                    <h3 className=" text-md md:text-2xl font-bold">Toatal cost</h3>
                                    <button className="   font-bold flex items-center btn px-4 rounded-full btn-outline border-primary-color btn-sm md:btn-md  text-primary-color">Sort by Price <HiOutlineAdjustmentsVertical className="text-xl" /></button>
                                    <button className=" w-full sm:w-fit btn-sm md:btn-md btn bg-gradient-to-b from-primary-color to-violet-600 rounded-full text-white px-4">Purchase</button>
                              </div>
                        </div>
                        <div className=" flex flex-col gap-4 mt-10 min-h-[20vh] border-2 rounded-2xl p-5">
                              {
                                    filterCartProduct.length < 1 ? <div className=" h-full flex justify-center items-center text-center"> <h1 className=" mt-8 text-xl text-gray-500">No Cart added</h1></div> :
                                          filterCartProduct.map(product => <CartCard key={product.product_id} product={product}></CartCard>)

                              }
                        </div>
                  </div>
            </div>
      );
};

export default Cart;