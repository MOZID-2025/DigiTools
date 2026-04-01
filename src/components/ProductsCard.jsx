import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductsCard = ({ product, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuyProduct = () => {
    setIsBuy(true);
    setCarts([...carts, product]);
    toast.success("Product successfully added to cart");
  };
  return (
    <div
      key={product.id}
      className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Dynamic Tag */}
      <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
        {product.tag}
      </span>

      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
        <img
          className="w-full h-full object-contain"
          src={product.icon}
          alt={product.name}
        />
      </div>

      <h3 className="text-xl font-bold text-[#111827] mb-2">{product.name}</h3>

      <p className="text-slate-500 text-sm mb-6">{product.description}</p>

      <div className="text-2xl font-bold text-[#111827] mb-6">
        ${product.price}
        <span className="text-slate-400 text-sm font-normal">
          /{product.period === "monthly" ? "Mo" : "Once"}
        </span>
      </div>

      {/* Dynamic Features List */}
      <ul className="space-y-3 mb-8 text-sm text-slate-600">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✓</span> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyProduct}
        className="w-full py-3 bg-gradient-to-r from-[#6039F6] to-[#A31CFB] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors"
      >
        {isBuy ? "✓ Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductsCard;
