import { Link } from 'react-router-dom';
import './banner.css'
const Hero = () => {
      return (
            <div className=" bg-primary-color h-[550px] md:h-[622px]   lg:mx-6 " id='banner'>
                  <div className=" max-w-6xl mx-auto text-center pt-8">
                        <h1 className=" text-3xl md:text-5xl text-white mx-auto font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className=" text-gray-200 max-w-3xl mt-4 mx-auto text-md md:text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                        <Link to='/dashboard'><button className=" btn bg-white text-primary-color mt-6 rounded-full text-xl font-bold px-7">Shop now</button></Link>
                  </div>
                  <div className=" max-w-72 sm:max-w-2xl  lg:max-w-3xl xl:max-w-5xl mx-auto relative top-32 md:top-16 border-2 border-white bg-white bg-opacity-25 p-6 rounded-2xl">
                        <img className=" rounded-2xl w-full max-h-[563px] object-cover " src="https://i.postimg.cc/fRKtDMN3/banner.jpg" alt="Banner image" />
                  </div>
            </div>
      );
};

export default Hero;