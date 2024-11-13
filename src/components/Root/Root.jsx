import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";





const Root = () => {

      return (
            <div>

                  <header>
                        <Nav></Nav>
                  </header>
                  <main className=" min-h-[30vh] ">

                        <Outlet></Outlet>

                  </main>
                  <footer>
                        <Footer></Footer>
                  </footer>

            </div>
      );
};

export default Root;