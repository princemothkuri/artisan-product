import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/artisanSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = product.title;
  const idtemp = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const idString = idtemp(id);

  const handleDetails = () => {
    navigate(`/product/${idString}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="h-96 p-7 cursor-pointer overflow-hidden border-[1px] flex items-center"
      >
        <div>
          <img
            className="object-cover group-hover:scale-110 duration-500"
            src={product.image}
            alt="prpoductImage"
          />
        </div>
      </div>
      <div className="w-full border-[1px] px-2 py-4 h-24">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-titleFont text-base font-bold w-40">
              {product.title.substring(0, 30)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-semibold text-lg">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added to cart`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 text-sm font-bold"
            >
              add to cart{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>{product.category}</div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductsCard;
