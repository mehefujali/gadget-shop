import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { setDataToLocal } from "../../utility/localstorage";
import { toast } from "react-toastify";
const ProductDetails = () => {
      const { productId } = useParams()
      const products = useLoaderData()

      const product = products.find(product => product.product_id === parseInt(productId))
      const { product_title, product_image, price, availability, description, specification, rating } = product

      console.log(product);


      return (
            <div className="bg-primary-color h-96 py-7  mb-[500px]">
                  <ScrollRestoration></ScrollRestoration>
                  <div className="container mx-auto">
                        <div className=" w-4/5 mx-auto">
                              <div className=" text-center py-5 mx-auto flex flex-col gap-3 max-w-4xl ">
                                    <h1 className=" text-3xl font-bold text-white ">Product Details</h1>
                                    <p className=" text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                              </div>
                              <div className=" py-12 relative top-10 bg-white rounded-2xl">
                                    <div className="flex gap-8">
                                          <div className=" p-8">
                                                <img className=" rounded-2xl w-96 h-full" src={product_image} alt="" />
                                          </div>
                                          <div className="text-lg flex flex-col justify-between h-full gap-2 ">
                                                <h1 className=" text-2xl font-bold">{product_title}</h1>
                                                <p className=" text-gray-500">Price : ${price}</p>
                                                <p className={`  font-semibold w-fit px-3  p-1 rounded-full border-2 text-center ${availability ? 'border-green-500 bg-green-100 text-green-500' : 'border-red-500 text-red-500 bg-red-100'}`}>{availability ? "In stock" : "Out of stock"}</p>
                                                <p className=" text-gray-500">{description}</p>
                                                <ol className=" list-inside list-decimal">
                                                      <h2 className="text-lg font-bold">Specification:</h2>
                                                      {
                                                            specification.map((li, idx) => <li className=" text-gray-500" key={idx} >{li}</li>)
                                                      }
                                                </ol>
                                                <div>
                                                      <h2 className="text-lg font-bold">Rating : </h2>
                                                      <p>{rating}⭐</p>
                                                </div>
                                                <div className=" flex gap-4">
                                                      <button
                                                            onClick={() => availability ? setDataToLocal("cart", productId) : toast.error("Product out of stock")}
                                                            className=" btn flex items-center gap-2 bg-primary-color text-white">Add to cart <IoCartOutline className="text-xl" /></button>
                                                      <span className=" btn btn-circle  text-2xl border-primary-color"><CiHeart /></span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDetails;