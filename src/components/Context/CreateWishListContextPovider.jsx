import { createContext, useState } from "react";
import PropTypes from "prop-types";

const WishListContext = createContext({})



const CreateWishListContextPovider = ({ children }) => {
      const [wishlist, SetWishlist] = useState([])
      return (
            <div>
                  <WishListContext.Provider value={{ wishlist, SetWishlist }}>
                        {children}
                  </WishListContext.Provider>

            </div>
      );
};


CreateWishListContextPovider.propTypes = {
      children: PropTypes.object.isRequired
}
export { WishListContext, CreateWishListContextPovider }