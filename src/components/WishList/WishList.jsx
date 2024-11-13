import { useContext, useEffect, useState } from "react";
import { getDataFromLocal } from "../../utility/localstorage";
import WishListCard from "../WishListCard/WishListCard";
import { WishListContext } from "../Context/CreateWishListContextPovider";
import useDocumentTitle from "../../utility/useDocumentTitle";


const WishList = () => {
      const [wishListProductId, setWishListProductId] = useState([])
      const [products, setProducts] = useState([])
      const { wishList } = useContext(WishListContext)
      useDocumentTitle("Dashboard|wishlist")
      useEffect(() => {
            fetch("/products.json")
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])

      useEffect(() => {
            const localWishList = getDataFromLocal("wishlist")
            setWishListProductId(localWishList)
      }, [wishList])

      const filterWishlistData = products.filter(product => wishListProductId.includes(product.product_id.toString()))



      return (
            <div >
                  <div className=" container mx-auto ">
                        <div>
                              <h1 className=" my-8 text-2xl font-bold">Wish list</h1>
                        </div>
                        <div className=" flex flex-col gap-4 mt-10 min-h-[20vh] border-2 rounded-2xl p-5">
                              {
                                    filterWishlistData.length < 1 ? <div className=" h-full flex justify-center items-center text-center"> <h1 className=" mt-8 text-xl text-gray-500">No Wish added</h1></div> :
                                          filterWishlistData.map(product => <WishListCard key={product.product_id} product={product}></WishListCard>)

                              }
                        </div>
                  </div>
            </div>
      );
};

export default WishList;