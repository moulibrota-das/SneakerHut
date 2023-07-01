import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { NewsLetter2 } from "../components/Newsletter2";
import Footer2 from "../components/Footer2";

function Home() {
  return (
    <div>
      <Navbar2 />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      {/* <NewsLetter2 /> */}
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}

export default Home;
