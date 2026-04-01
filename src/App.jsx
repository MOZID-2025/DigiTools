import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StateSection from "./components/StateSection";
import Products from "./components/Products";
import Cart from "./Cart";
import StepsSection from "./components/StepsSection";
import PriceSection from "./components/PriceSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("Products");

  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} setCarts={setCarts} />
      <Banner />
      <StateSection />

      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Premium Digital Tools
          </h2>

          <div className="inline-flex rounded-full border border-slate-200 p-1">
            <div className="tabs bg-transparent gap-2">
              <input
                type="radio"
                name="tabs"
                className="tab rounded-full px-6 py-2 text-slate-600 
                checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] 
                checked:text-white font-bold"
                aria-label="Products"
                checked={activeTab === "Products"}
                onChange={() => setActiveTab("Products")}
              />

              <input
                type="radio"
                name="tabs"
                className="tab rounded-full px-6 py-2 text-slate-600 
                checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] 
                checked:text-white font-bold"
                aria-label={`Cart (${carts.length})`}
                checked={activeTab === "Cart"}
                onChange={() => setActiveTab("Cart")}
              />
            </div>
          </div>
        </div>
      </div>

      {activeTab === "Products" && (
        <Products
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}

      <StepsSection />
      <PriceSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
