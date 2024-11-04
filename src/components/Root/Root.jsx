import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
      return (
            <div style={{ backgroundColor: 'rgba(9, 8, 15, 0.05)' }}>
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