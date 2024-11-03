import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
      return (
            <div >
                  <header>
                        <Nav></Nav>
                  </header>
                  <main className=" ">
                        <Outlet></Outlet>
                  </main>
                  <footer>

                  </footer>
            </div>
      );
};

export default Root;