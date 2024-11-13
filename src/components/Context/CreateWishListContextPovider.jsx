import { createContext, useState } from "react";
import PropTypes from "prop-types";

const WishListContext = createContext({})



const CreateWishListContextPovider = ({ children }) => {
      const [wishList, setWishlist] = useState([])
      return (
            <div>
                  <WishListContext.Provider value={{ wishList, setWishlist }}>
                        {children}
                  </WishListContext.Provider>

            </div>
      );
};


CreateWishListContextPovider.propTypes = {
      children: PropTypes.object.isRequired
}
export { WishListContext, CreateWishListContextPovider }