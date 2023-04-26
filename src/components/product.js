import React from "react";
import ProductsCard from "./ProductsCard";

function product({ products }) {
  // console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl py-2 w-80 bg-black text-white text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-black text-center">
          An artisan is someone that works with their hands to create unique,
          functional and/or decorative items using traditional techniques.
          Artisans are masters of their craft and create products such as
          clothes, toys, tools or furnishings.
        </p>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default product;
