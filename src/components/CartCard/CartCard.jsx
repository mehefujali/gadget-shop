import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";
import { removeItemFromLocal } from "../../utility/localstorage";
const CartCard = ({ product }) => {
      const { product_title, product_image, price, product_id, description } = product
      return (
            <div className=" flex  justify-between items-center bg-white rounded-xl p-3" >
                  <div className=" flex items-center gap-8">
                        <div className=" bg-white rounded-xl p-5 w-fit">
                              <img className=" w-36" src={product_image} alt="" />
                        </div>
                        <div className=" flex flex-col h-full">
                              <h1 className=" text-2xl font-bold">{product_title}</h1>
                              <p className=" text-lg text-gray-500">{description}</p>
                              <p className=" text-lg text-gray-500">Price :${price}</p>
                        </div>

                  </div>
                  <div onClick={() => removeItemFromLocal("cart", product_id)} className=" text-3xl text-red-600  relative  -left-4 -top-16 cursor-pointer "><RxCrossCircled /></div>
            </div>
      );
};

CartCard.propTypes = {
      product: PropTypes.object.isRequired
}

export default CartCard;