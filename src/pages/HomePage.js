import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { set } from "mongoose";

export default function HomePage() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const productUrl = "https://fakestoreapi.com/products";
  async function fetchProducts() {
    setLoading(true);
    const response = await fetch(productUrl);
    const data = await response.json();
    setFilteredProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(()=>{
    const result = filteredProducts.filter((product)=>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredProducts(result)
  },[searchTerm])


  return (
    <>
      <div className="max-w-md mx-auto mt-12 flex-1">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          className="w-full flex-1 px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-wrap gap-8 justify-between">
        {loading
          ? "Loading...."
          : filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
    </>
  );
}
