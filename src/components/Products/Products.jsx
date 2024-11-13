import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import useDocumentTitle from "../../utility/useDocumentTitle";


const Products = () => {
      const { category } = useParams()
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('/products.json')
                  .then(res => res.json())
                  .then(data => handleFilterProduct(data))
      }, [category])
      const handleFilterProduct = (data) => {
            if (category === 'all-products') {
                  setProducts(data)
            }
            else {
                  const filterCategory = data.filter(product => product.category === category)
                  setProducts(filterCategory)
            }
      }
      useDocumentTitle(`Home | ${category}`)
      return (
            <div className=" p-6 ">
                  {
                        products.length < 1 ? <div className=" flex gap-2 flex-col">

                              <img className=" mt-10 max-w-44 mx-auto" src="https://i.postimg.cc/pLch18n0/image.png" alt="" />

                              <h1 className=" text-center text-gray-600  text-4xl">No data available</h1>
                        </div> : <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                              {products.map(product => <Product key={product.id} product={product}></Product>)}
                        </div>
                  }
            </div>
      );
};

export default Products;