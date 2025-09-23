import Header from "../components/Header";
import PlantCard from "../components/PlantCard";

const plants = [
  { id: 1, name: "Snake Plant", price: 350, image: "https://via.placeholder.com/150?text=Snake+Plant" },
  { id: 2, name: "Peace Lily", price: 400, image: "https://via.placeholder.com/150?text=Peace+Lily" },
  { id: 3, name: "Spider Plant", price: 250, image: "https://via.placeholder.com/150?text=Spider+Plant" },
  { id: 4, name: "Aloe Vera", price: 300, image: "https://via.placeholder.com/150?text=Aloe+Vera" },
  { id: 5, name: "Rubber Plant", price: 500, image: "https://via.placeholder.com/150?text=Rubber+Plant" },
  { id: 6, name: "Money Plant", price: 200, image: "https://via.placeholder.com/150?text=Money+Plant" },
];

export default function ProductListing() {
  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-center my-6">Our House Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
