import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { removeItem, updateQuantity } from "../slices/CartSlice";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-center my-6">Shopping Cart</h2>
      <div className="px-6">
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
                <div className="space-x-2">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "increment" }))} className="px-2 bg-green-600 text-white">+</button>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "decrement" }))} className="px-2 bg-yellow-600 text-white">-</button>
                  <button onClick={() => dispatch(removeItem(item.id))} className="px-2 bg-red-600 text-white">Delete</button>
                </div>
              </div>
            ))}

            <div className="mt-6 text-right">
              <p>Total Items: {totalQuantity}</p>
              <p>Total Price: ₹{totalPrice}</p>
              <button onClick={() => alert("Checkout Coming Soon!")} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Checkout</button>
              <Link to="/products" className="ml-4 px-4 py-2 bg-gray-600 text-white rounded">Continue Shopping</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
