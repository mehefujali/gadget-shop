import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className=" h-[100vh] flex items-center justify-center flex-col ">
                  <img className=" max-w-96" src="https://i.postimg.cc/pLkz21ck/image.png" alt="" />
                  <Link to='/'><button className=" btn btn-lg text-white hover:text-primary-color bg-primary-color">Back to home</button></Link>
            </div>
      );
};

export default Error;