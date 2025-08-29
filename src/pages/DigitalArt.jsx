import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Filters from "../components/Filters";
import AuctionCard from "../components/AuctionCard";
import Footers from "../components/Footers";

export default function DigitalArt() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const auctions = [
    { img: "https://picsum.photos/seed/digital3/600/400", title: "Neon Dystopia #7", artist: "by Unit 731", label: "Current Bid", price: 1150, endTime: "2025-12-30T22:00:00Z", category: "AI" },
    { img: "https://picsum.photos/seed/digital4/600/400", title: "Crystalline Forms", artist: "by Ava Nguyen", label: "Starting Bid", price: 800, endTime: "2025-12-30T22:00:00Z", category: "3D" },
    { img: "https://picsum.photos/seed/digital5/600/400", title: "The Android's Dream", artist: "by The Oracle AI", label: "Current Bid", price: 3200, endTime: "2025-12-30T22:00:00Z", category: "AI" },
    { img: "https://picsum.photos/seed/pixelart1/600/400", title: "8-Bit Sunset", artist: "by RetroGrade", label: "Current Bid", price: 450, endTime: "2025-12-30T22:00:00Z", category: "Pixel" },
    { img: "https://picsum.photos/seed/fractal1/600/400", title: "Infinite Recursion", artist: "by Unit 731", label: "Reserve Not Met", price: 950, endTime: "2025-12-30T22:00:00Z", category: "3D" },
    { img: "https://picsum.photos/seed/illustration2/600/400", title: "Forest Spirit", artist: "by Ava Nguyen", label: "Current Bid", price: 1500, endTime: "2025-12-30T22:00:00Z", category: "Illustration" },
  ];

  const handleFilterChange = ({ type, value }) => {
    if (type === "category") setSelectedCategory(value);
    if (type === "sort") setSortBy(value);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  // 🔍 Filter
  let filteredAuctions = auctions.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.artist.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // 🔃 Sort
  if (sortBy === "ending") {
    filteredAuctions.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
  } else if (sortBy === "new") {
    filteredAuctions.sort((a, b) => new Date(b.endTime) - new Date(a.endTime));
  } else if (sortBy === "high") {
    filteredAuctions.sort((a, b) => b.price - a.price);
  } else if (sortBy === "low") {
    filteredAuctions.sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <Navbar />
      <PageHeader />
      <main className="container mx-auto px-5 py-12">
        <Filters onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
        <div className="grid md:grid-cols-3 gap-8">
          {filteredAuctions.map((auction, index) => (
            <AuctionCard key={index} {...auction} />
          ))}
        </div>
      </main>
      <Footers />
    </>
  );
}
