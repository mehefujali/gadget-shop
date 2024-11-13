



const Footer = () => {
      return (
            <div className=" mt-24 bg-white pt-20 ">
                  <div className=" container mx-auto text-center" >
                        <h1 className=" text-3xl font-bold ">Gadget Shop</h1>
                        <p className=" my-3 text-gray-400 text-lg">Leading the way in cutting-edge technology and innovation.</p>
                        <footer className="footer text-black p-10 border-t-2 border-gray-300 w-fit   md:w-2/3 mx-auto justify-between items-center ">
                              <nav className="text-center flex flex-col justify-center md:items-center">
                                    <h6 className="footer-title">Services</h6>
                                    <a className="link link-hover">Product Support</a>
                                    <a className="link link-hover">Order Tracking</a>
                                    <a className="link link-hover">Shipping & Delivery</a>
                                    <a className="link link-hover">Returns</a>
                              </nav>
                              <nav className="text-center flex flex-col justify-center md:items-center">
                                    <h6 className="footer-title">Company</h6>
                                    <a className="link link-hover">About us</a>
                                    <a className="link link-hover">Careers</a>
                                    <a className="link link-hover">Contact</a>

                              </nav>
                              <nav className="text-center flex flex-col justify-center md:items-center">
                                    <h6 className="footer-title">Legal</h6>
                                    <a className="link link-hover">Terms of use</a>
                                    <a className="link link-hover">Privacy policy</a>
                                    <a className="link link-hover">Cookie policy</a>
                              </nav>
                        </footer>
                  </div>
            </div>
      );
};

export default Footer;