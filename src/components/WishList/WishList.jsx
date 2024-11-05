import { useEffect, useState } from "react";
import { getDataFromLocal } from "../../utility/localstorage";
import WishListCard from "../WishListCard/WishListCard";


const WishList = () => {
      const [wishListProductId, setWishListProductId] = useState([])
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch("/products.json")
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])

      useEffect(() => {
            const localWishList = getDataFromLocal("wishlist")
            setWishListProductId(localWishList)
      }, [])

      const filterWishlistData = products.filter(product => wishListProductId.includes(product.product_id.toString()))



      return (
            <div >
                  <div className=" container mx-auto ">
                        <div>
                              <h1 className=" my-8 text-2xl font-bold">Wish list</h1>
                        </div>
                        <div className=" flex flex-col gap-4 mt-10 min-h-[20vh] border-2 rounded-2xl p-5">
                              {
                                    filterWishlistData.map(product => <WishListCard key={product.product_id} product={product}></WishListCard>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default WishList;