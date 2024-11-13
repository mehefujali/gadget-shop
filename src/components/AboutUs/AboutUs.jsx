import useDocumentTitle from "../../utility/useDocumentTitle";

const AboutUs = () => {
      useDocumentTitle("about us")
      return (
            <div className=" container mx-auto">
                  <div className=" w-3/5 mx-auto text-center mt-14">
                        <h1 className=" text-center text-3xl font-bold ">About Us</h1>
                        <div>
                              <p className=" text-justify mt-11 text-lg text-gray-600">
                                    Welcome to Gadget Shop – your ultimate destination for all things tech! At Gadget Shop, we are passionate about connecting you with the latest gadgets and accessories that elevate your digital experience. We specialize in providing top-quality products that combine innovation, style, and functionality, making sure there something for every tech enthusiast. <br /> <br />

                                    Our team works hard to curate a selection of the best gadgets, from smartphones and tablets to essential accessories and smart home devices. We’re committed to offering you not only the best products but also a seamless shopping experience, with a focus on customer satisfaction and after-sales support. <br /> <br />

                                    Join us on this journey to discover technology that fits your lifestyle. Thank you for choosing Gadget Shop – where technology meets convenience!
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUs;