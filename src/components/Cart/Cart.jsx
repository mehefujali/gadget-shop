import { useEffect, useState } from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { getDataFromLocal } from "../../utility/localstorage";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
      const [cartProductsId, setCartsProductId] = useState([])
      const [products, setProducts] = useState([])
      useEffect(() => {
            const cartsId = getDataFromLocal("cart")
            setCartsProductId(cartsId)
      }, [])
      useEffect(() => {
            fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])


      const filterCartProduct = products.filter(product => cartProductsId.includes(product.product_id.toString()))





      return (
            <div>
                  <div className=" container mx-auto">
                        {/* nav  */}
                        <div className=" flex justify-between items-center" >
                              <h1 className=" text-2xl font-bold">cart</h1>
                              <div className=" flex flex-col sm:flex-row items-center gap-1 md:gap-4">
                                    <h3 className=" text-md md:text-2xl font-bold">Toatal cost</h3>
                                    <button className="   font-bold flex items-center btn px-4 rounded-full btn-outline border-primary-color btn-sm md:btn-md  text-primary-color">Sort by Price <HiOutlineAdjustmentsVertical className="text-xl" /></button>
                                    <button className=" w-full sm:w-fit btn-sm md:btn-md btn bg-gradient-to-b from-primary-color to-violet-600 rounded-full text-white px-4">Purchase</button>
                              </div>
                        </div>
                        <div className=" flex flex-col gap-4 mt-10">
                              {
                                    filterCartProduct.map(product => <CartCard key={product.product_id} product={product}></CartCard>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Cart;