import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import Product from "../components/product";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Product products={products} />
    </div>
  );
}

export default Home;
