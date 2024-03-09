import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = React.useState([]);
  const categoryUrl = "https://fakestoreapi.com/products/categories";
  async function fetchCategories() {
    const response = await fetch(categoryUrl);
    const data = await response.json();
    setCategories(data);
    console.log(data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-teal-500 ">
      <header className="flex justify-between items-center py-4 px-8">
        <div>
          <Link to="/">
            <h3 className="font-bold text-xl">MyWebsiteLogo</h3>
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-4">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category}`} className="capitalize">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
            ))}

            <li >
              <Link className="flex" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
                Cart</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
