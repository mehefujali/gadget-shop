import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";
import { removeItemFromLocal, setDataToLocal } from "../../utility/localstorage";
import { useContext } from "react";
import { CartContext } from "../Context/CreateCartContextPov";
import { WishListContext } from "../Context/CreateWishListContextPovider";
import { toast } from "react-toastify";

const WishListCard = ({ product }) => {
      const { setWishlist } = useContext(WishListContext)
      const { setCart } = useContext(CartContext)
      const { product_title, product_image, price, product_id, description } = product
      const handleAddCart = (productId) => {
            setDataToLocal("cart", productId.toString())
            setCart(productId)
            handleRemoveWishList(productId)

      }
      const handleRemoveWishList = (product_id) => {
            removeItemFromLocal("wishlist", product_id)
            setWishlist(product_id)
      }
      return (
            <div>
                  <div className=" flex  justify-between items-center bg-white rounded-xl p-3" >
                        <div className=" flex items-center gap-8">
                              <div className=" bg-white rounded-xl p-5 w-fit">
                                    <img className=" w-36" src={product_image} alt="" />
                              </div>
                              <div className=" flex flex-col h-full">
                                    <h1 className=" text-2xl font-bold">{product_title}</h1>
                                    <p className=" text-lg text-gray-500">{description}</p>
                                    <p className=" text-lg text-gray-500">Price :${price}</p>
                                    <div>
                                          <button
                                                onClick={() => handleAddCart(product_id)}
                                                className=" btn rounded-lg text-white bg-primary-color">Add to cart</button>
                                    </div>
                              </div>


                        </div>
                        <div
                              onClick={() => {
                                    toast.warn("Product removed from Wishlist")
                                    handleRemoveWishList(product_id)
                              }}
                              className=" text-3xl text-red-600  relative  -left-4 -top-16 cursor-pointer "><RxCrossCircled /></div>


                  </div>
            </div>
      );
};

WishListCard.propTypes = {
      product: PropTypes.object.isRequired
}

export default WishListCard;