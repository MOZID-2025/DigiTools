import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successfull");
  };

  const handleRemove = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Product remove to cart");
  };
  return (
    <div className="bg-white border border-slate-100 max-w-[1280px] mx-auto rounded-[32px] p-8 md:p-12 shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111827]">Your Cart</h1>
      </div>

      <div className="space-y-4">
        {carts.map((item) => (
          <div
            key={item.id}
            className="bg-[#F9FAFC] p-4 rounded-2xl flex justify-between items-center transition-all hover:shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-slate-100 p-3 shadow-sm">
                <img
                  className="w-full h-full object-contain"
                  src={item.icon}
                  alt={item.name}
                />
              </div>

              <div>
                <h2 className="font-bold text-[#111827]">{item.name}</h2>
                <p className="text-slate-400 text-sm">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(item)}
              className="text-pink-500 font-semibold text-sm hover:text-pink-600 px-4 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {carts.length > 0 ? (
        <div className="mt-10 pt-6 border-t border-slate-50">
          <div className="flex justify-between items-center mb-8">
            <span className="text-slate-400 font-medium">Total:</span>
            <span className="text-3xl font-bold text-[#111827]">${total}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-4 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-all shadow-lg shadow-purple-100"
          >
            Proceed To Checkout
          </button>
        </div>
      ) : (
        <div className="text-center py-10 text-slate-400">
          <FontAwesomeIcon
            icon={faCartArrowDown}
            className="text-5xl sm:text-6xl md:text-7xl mb-5"
          />
          <h2>Your cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
