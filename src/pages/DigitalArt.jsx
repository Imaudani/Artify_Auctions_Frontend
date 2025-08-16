import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Filters from "../components/Filters";
import AuctionCard from "../components/AuctionCard";
import Footers from "../components/Footers";

export default function DigitalArt() {
  const auctions = [
    { img: "https://picsum.photos/seed/digital3/600/400", title: "Neon Dystopia #7", artist: "by Unit 731", label: "Current Bid", price: "1150", endTime: "2025-08-08T22:00:00Z" },
    { img: "https://picsum.photos/seed/digital4/600/400", title: "Crystalline Forms", artist: "by Ava Nguyen", label: "Starting Bid", price: "800", endTime: "2025-08-09T20:00:00Z" },
    { img: "https://picsum.photos/seed/digital5/600/400", title: "The Android's Dream", artist: "by The Oracle AI", label: "Current Bid", price: "3200", endTime: "2025-08-11T19:30:00Z" },
    { img: "https://picsum.photos/seed/pixelart1/600/400", title: "8-Bit Sunset", artist: "by RetroGrade", label: "Current Bid", price: "450", endTime: "2025-08-15T23:00:00Z" },
    { img: "https://picsum.photos/seed/fractal1/600/400", title: "Infinite Recursion", artist: "by Unit 731", label: "Reserve Not Met", price: "950", endTime: "2025-08-18T12:00:00Z" },
    { img: "https://picsum.photos/seed/illustration2/600/400", title: "Forest Spirit", artist: "by Ava Nguyen", label: "Current Bid", price: "1500", endTime: "2025-08-20T21:00:00Z" },
  ];

  return (
    <>
      <Navbar />
      <PageHeader />
      <main className="container mx-auto px-5 py-12">
        <Filters />
        <div className="grid md:grid-cols-3 gap-8">
          {auctions.map((auction, index) => (
            <AuctionCard key={index} {...auction} />
          ))}
        </div>
      </main>
      <Footers />
    </>
  );
}
