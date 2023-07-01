import styled from "styled-components";
// import { popularProducts } from "../data";
import { useState, useEffect } from "react";
import ProductItems from "./ProductItems";
import ProductItem2 from "./ProductItem2";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  console.log("cat", cat);

  //Fetching products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products?category=${cat}`
            : `http://localhost:4000/api/products`
        );
        setProducts(res.data);
        console.log("Products.jsx", res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [cat]);

  //Filtering Products
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-8 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {cat
        ? filterProducts.map((item) => (
            <ProductItem2 item={item} key={item.id} />
          ))
        : products.map((item) => <ProductItem2 item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
