import useDocumentTitle from "../../utility/useDocumentTitle";
import Hero from "../Hero/Hero";
import MainContainer from "../MainContainer/MainContainer";


const Home = () => {
      useDocumentTitle("Home")
      return (
            <div>

                  <Hero></Hero>
                  <MainContainer></MainContainer>
            </div>
      );
};

export default Home;