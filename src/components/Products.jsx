import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ productsPromise, carts, setCarts }) => {
  const products = use(productsPromise);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
