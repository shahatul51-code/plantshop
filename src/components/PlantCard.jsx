import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/CartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAdded = cartItems.some((item) => item.id === plant.id);

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
      <p className="text-gray-600">₹{plant.price}</p>
      <button
        onClick={() => dispatch(addItem(plant))}
        disabled={isAdded}
        className={`mt-2 px-4 py-2 rounded ${
          isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 text-white"
        }`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
