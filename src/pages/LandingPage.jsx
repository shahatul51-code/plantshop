import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function LandingPage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <h1 className="text-5xl font-bold">🌱 Green Haven</h1>
      <p className="mt-4 text-lg max-w-xl">
        Welcome to Green Haven – your trusted online plant shop. We bring nature closer to your home with a variety of beautiful, easy-to-care houseplants.
      </p>
      <Link
        to="/products"
        className="mt-6 px-6 py-3 bg-green-700 rounded-lg text-white text-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
