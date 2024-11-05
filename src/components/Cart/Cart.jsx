import { useContext, useEffect, useState } from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { getDataFromLocal } from "../../utility/localstorage";
import CartCard from "../CartCard/CartCard";
import { CartContext } from "../Context/CreateCartContextPov";
import chackImg from '../../assets/images/Group.png'
import './cart.css'
import { useNavigate } from "react-router-dom";
const Cart = () => {
      const { setCart } = useContext(CartContext)
      const [cartProductsId, setCartsProductId] = useState([])
      const [products, setProducts] = useState([])
      const [short, setShort] = useState(false)
      const { cart } = useContext(CartContext)
      const navigate = useNavigate()
      useEffect(() => {
            const cartsId = getDataFromLocal("cart")
            setCartsProductId(cartsId)
      }, [cart])
      useEffect(() => {
            fetch('/products.json')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])
      const filterCartProduct = products.filter(product => cartProductsId.includes(product.product_id.toString()))
      const totalPrice = filterCartProduct.reduce((acc, curr) => acc + curr.price, 0)
      short && filterCartProduct.sort((a, b) => b.price - a.price);
      const handleBuyProduct = () => {
            document.getElementById('my_modal_1').showModal()



      }
      const closeModal = () => {
            localStorage.removeItem('cart')
            setCart(0)

            navigate('/home')

      }

      return (
            <div>
                  <div className=" container mx-auto ">
                        {/* nav  */}
                        <div className=" flex justify-between items-center" >
                              <h1 className=" text-2xl font-bold">Cart</h1>
                              <div className=" flex flex-col sm:flex-row items-center gap-1 md:gap-4">
                                    <h3 className=" text-md md:text-2xl font-bold">Toatal cost : $ {totalPrice}</h3>
                                    <button className="   font-bold flex items-center btn px-4 rounded-full btn-outline border-primary-color btn-sm md:btn-md  text-primary-color"
                                          onClick={() => setShort(true)}
                                    >Sort by Price <HiOutlineAdjustmentsVertical className="text-xl" /></button>
                                    <button disabled={filterCartProduct.length < 1}
                                          onClick={handleBuyProduct}
                                          id="purchaseBtn"
                                          className="  w-full sm:w-fit btn-sm md:btn-md btn bg-primary-color   rounded-full text-white px-4">Purchase</button>
                              </div>
                        </div>
                        <div className=" flex flex-col gap-4 mt-10 min-h-[20vh] border-2 rounded-2xl p-5">
                              {
                                    filterCartProduct.length < 1 ? <div className=" h-full flex justify-center items-center text-center"> <h1 className=" mt-8 text-xl text-gray-500">No Cart added</h1></div> :
                                          filterCartProduct.map(product => <CartCard key={product.product_id} product={product}></CartCard>)

                              }
                        </div>
                  </div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}

                  <dialog id="my_modal_1" className="modal">
                        <div className="modal-box py-8">
                              <div className=" flex flex-col text-center ">
                                    <img className=" w-16 mx-auto" src={chackImg} alt="" />
                                    <h3 className="font-bold text-2xl">Payment Successfully</h3>
                                    <div className=" text-lg text-gray-600">
                                          <p className="">Thanks for purchasing.</p>
                                          <p className="">Total:$ {totalPrice}</p>
                                    </div>
                              </div>
                              <div className="modal-action">
                                    <form method="dialog" className=" w-full flex  justify-center">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn w-2/4 mx-auto text-lg btn-md" onClick={closeModal}>Close</button>
                                    </form>
                              </div>
                        </div>
                  </dialog>
            </div>
      );
};

export default Cart;