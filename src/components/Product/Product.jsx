import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
      const { product_title, product_image, price } = product
      return (
            <div>
                  <div className=" w-full h-full p-4 rounded-lg border-2 bg-white shadow-lg flex flex-col justify-between gap-1">
                        <div>
                              <img className=" mb-3 max-w-60 h-80 object-contain mx-auto" src={product_image} alt="" />
                        </div>
                        <h1 className=" text-xl font-semibold">{product_title}</h1>
                        <p className=" text-lg ">Price ${price}</p>
                        <Link><button className=" btn btn-outline border-primary-color text-primary-color w-fit">View Details</button></Link>
                  </div>
            </div>
      );
};

Product.propTypes = {
      product: PropTypes.object.isRequired
}


export default Product;