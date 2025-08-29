import Navbar from "../components/Navbar";
import Footer from "../components/Footers";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Winning Bid</h2>

        <div
          className="max-w-sm bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => navigate("/checkout")}
        >
          <div className="h-40 overflow-hidden rounded-t-lg">
            <img
              src="https://picsum.photos/seed/painting1/300/200"
              alt="Winning Art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-serif font-bold mb-1 text-gray-900">Ethereal Vista</h3>
            <p className="text-gray-500 text-sm mb-1">by Marianne Dubois</p>
            <span className="text-blue-900 font-semibold text-sm">View Details →</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
