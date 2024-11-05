import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { createContext } from "react";


export const CartContext = createContext([])

const Root = () => {

      return (
            <div>
                  <CartContext.Provider value={[]}>
                        <header>
                              <Nav></Nav>
                        </header>
                        <main className=" min-h-[30vh] ">

                              <Outlet></Outlet>

                        </main>
                        <footer>
                              <Footer></Footer>
                        </footer>
                  </CartContext.Provider>
            </div>
      );
};

export default Root;