import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import Product from "../components/product";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const userInfo = useSelector((state) => state.artisan.userInfo);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (userInfo) {
      setProducts(data.data);
    }
    // else {
    //   navigate("/login");
    // }
  }, [userInfo]);

  return (
    <div>
      <Banner />
      <Product products={products} />
    </div>
  );
}

export default Home;
