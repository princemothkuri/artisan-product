import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/artisanSlice";

const CartItem = () => {
  const productData = useSelector((state) => state.artisan.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6 border-[1px] p-3"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="product-image"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">{item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    item.quantity === 1
                      ? (item.quantity = 1)
                      : dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity + 1,
                            description: item.description,
                          })
                        )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: item.quantity + 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
