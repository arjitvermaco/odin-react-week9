import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

export default function ProductPage() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const appContext = useContext(AppContext);
  console.log("AppContext", appContext);
  async function fetchProduct() {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const isInCart =
    appContext.cartItems.findIndex((item) => item.id === product.id) !== -1;

  const updateCartItemQuantity = (quantity) => {
    const newCartItems = appContext.cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity };
      }
      return item;
    });

    appContext.setCartItems(newCartItems);
    toast("cart updated");
  };

  function addItemToCart() {
    // const productIndex = appContext.cartItems.findIndex(
    //   (item) => item.id === product.id
    // );

    // if (productIndex !== -1) {
    //   //Product is already in cart , so update the quantity

    //   const newCartItems = appContext.cartItems.map((item, index) => {
    //     if (index === productIndex) {
    //       return { ...item, quantity: item.quantity ? item.quantity + 1 : 2 };
    //     }

    //     return item;
    //   });
    //   appContext.setCartItems(newCartItems);
    // } else {
    //   appContext.setCartItems([
    //     ...appContext.cartItems,
    //     { ...product, quantity: 1 },
    //   ]);
    // }

    appContext.setCartItems([
      ...appContext.cartItems,
      { ...product, quantity: 1 },
    ]);
    toast("Item added to cart!!");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16  gap-8 justify-between">
      {loading ? (
        "Loading...."
      ) : (
        <div className="flex ">
          <div className="w-1/2">
            <img src={product.image} className="w-full" alt={product.name} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h3 className="text-xl font-bold mt-8">Description</h3>
            <p>{product.description}</p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700">$ {product.price}</p>
              <p className="text-gray-700 flex bg-teal-500 text-white px-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                {product?.rating?.rate}{" "}
              </p>
            </div>
            {!isInCart ? (
              <button
                className="mt-12 bg-teal-500 rounded-md shadow-md px-4 p-2"
                onClick={() => {
                  addItemToCart();
                }}
              >
                Add To Cart
              </button>
            ) : (
              <div className="mt-12">
                <select
                  onChange={(e) =>
                    updateCartItemQuantity(parseInt(e.target.value))
                  }
                  defaultValue={
                    appContext.cartItems.find((item) => item.id === product.id)
                      ?.quantity
                  }
                  className="rounded-md"
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      Qty: {n + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
