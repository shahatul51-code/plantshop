import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="flex justify-between items-center p-4 bg-green-700 text-white">
      <h1 className="text-2xl font-bold">🌱 Plant Shop</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
      </nav>
    </header>
  );
}
