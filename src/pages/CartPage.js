import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

export default function CartPage() {
  const appContext = useContext(AppContext);
  console.log(appContext);
  const deleteItemFromCart = (id) => {
    const newCartItems = appContext.cartItems.filter((item) => item.id !== id);
    appContext.setCartItems(newCartItems);
    toast("Item Removed from cart!");
  };

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);
    const newCartItems = appContext.cartItems.map((item) => {
      if (item.id === id) {
        toast.success("Quantity Changed");
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    appContext.setCartItems(newCartItems);
  };

  const calculateTotal = ()=>{
    return appContext.cartItems.reduce((total,item)=>{
        return total + item.price * item.quantity
    },0)
  }

  return (
    <div className="max-w-2xl mx-auto mt-16">
      {appContext.cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className="shadow-md px-6 py-2 rounded-md flex items-center gap-12"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 object-contain"
            />
            <div>
              <h3>
                {item.title} .Price ${item.price}
              </h3>
              <select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  deleteItemFromCart(item.id);
                }}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <p className="text-xl">$ {calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}
