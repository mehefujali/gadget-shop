import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className=" h-[100vh] flex items-center justify-center flex-col ">
                  <div className=" flex flex-col items-center">
                        <h1 className=" text-9xl font-bold ">404</h1>
                        <p className=" text-lg text-gray-600 my-6">Page not found</p>
                        <Link to='/'><button className=" btn text-white hover:text-primary-color bg-primary-color">Back to home</button></Link>
                  </div>
            </div>
      );
};

export default Error;