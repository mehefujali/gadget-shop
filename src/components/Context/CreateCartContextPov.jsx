import { createContext, useState } from "react";
import PropTypes from "prop-types";
const CartContext = createContext({})


const CreateCartContextPov = ({ children }) => {
      const [cart, setCart] = useState([])
      return (
            <CartContext.Provider value={{ cart, setCart }}>
                  {
                        children
                  }
            </CartContext.Provider>
      )
}
CreateCartContextPov.propTypes = {
      children: PropTypes.object.isRequired
}

export { CartContext, CreateCartContextPov };