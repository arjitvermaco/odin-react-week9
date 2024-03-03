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

            {/* <a href="/contact">Contact</a> */}
          </ul>
        </div>
      </header>
    </div>
  );
}
