import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
      const { category } = useParams()
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('/products.json')
                  .then(res => res.json())
                  .then(data => handleFilterProduct(data))
      }, [products])
      const handleFilterProduct = (data) => {
            if (category === 'all-products') {
                  setProducts(data)
            }
            else {
                  const filterCategory = data.filter(product => product.category === category)
                  setProducts(filterCategory)
            }
      }
      return (
            <div className=" p-6 ">
                  {
                        products.length < 1 ? <h1 className=" text-center mt-10 text-xl">No data available</h1> : <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                              {products.map(product => <Product key={product.id} product={product}></Product>)}
                        </div>
                  }
            </div>
      );
};

export default Products;