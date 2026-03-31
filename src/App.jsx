import "./App.css";
import Banner from "./components/Banner";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import Products from "./components/Products";
import StateSection from "./components/StateSection";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StateSection></StateSection>
      <Products></Products>
      <StepsSection></StepsSection>
      <PriceSection></PriceSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}

export default App;
