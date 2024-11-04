import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './categories.css'

const Categories = () => {
      const [categories, setCategories] = useState([])
      useEffect(() => {
            fetch('./categories.json')
                  .then(res => res.json())
                  .then(data => setCategories(data))

      }, [])



      return (
            <div className=" rounded-lg p-3 flex h-full flex-col gap-3 bg-white" id="categories">
                  {
                        categories.map(category => <NavLink to={category.path}
                              className=" px-4 py-2 cursor-pointer rounded-full bg-[#09080F0D]"
                              key={category.id}>{category.name}
                        </NavLink>)
                  }
            </div>
      );
};

export default Categories;