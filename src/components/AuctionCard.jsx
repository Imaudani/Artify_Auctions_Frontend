import { useEffect, useState } from "react";
import PaymentPage from "./PaymentPage"; // Import the Payment UI

export default function AuctionCard({ img, title, artist, label, price, endTime }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance < 0) {
        setTimeLeft("AUCTION ENDED");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    setIsBidModalOpen(false);   // Close bid modal
    setIsPaymentModalOpen(true); // Open payment modal
  };

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow hover:-translate-y-2 transition">
        <div className="h-56 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5 flex flex-col h-full">
          <h3 className="font-serif text-xl">{title}</h3>
          <p className="text-gray-500 mb-3">{artist}</p>
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">{label}</span>
            <span className="text-blue-900 font-bold text-lg">${price}</span>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center mb-3">
            <div className="uppercase text-xs text-gray-500">Auction Ends In</div>
            <div className="text-gray-900 font-medium">{timeLeft}</div>
          </div>
          <button
            className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-gray-900"
            onClick={() => setIsBidModalOpen(true)}
            disabled={timeLeft === "AUCTION ENDED"}
          >
            {timeLeft === "AUCTION ENDED" ? "Auction Ended" : "Place Bid"}
          </button>
        </div>
      </div>

      {/* Bid Modal */}
      {isBidModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[350px] p-6">
            <div className="mb-2 text-gray-600 uppercase text-sm">Current Bid</div>
            <div className="text-3xl font-bold mb-1">$ {price}</div>
            <div className="text-gray-500 text-sm mb-4">Reserve price met</div>

            <div className="flex items-center mb-5">
              <img
                src="https://picsum.photos/seed/digital3/40"
                alt="Expert"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-sm">
                <div className="text-gray-600">Expert Estimate $ 3,900 - $ 4,300</div>
                <div className="text-gray-500">Selected by Ariana Helling</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <button type="button" onClick={() => setBidAmount(3210)} className="border border-gray-300 rounded py-2 hover:bg-gray-100">
                $ 3,210
              </button>
              <button type="button" onClick={() => setBidAmount(3310)} className="border border-gray-300 rounded py-2 hover:bg-gray-100">
                $ 3,310
              </button>
              <button type="button" onClick={() => setBidAmount(3410)} className="border border-gray-300 rounded py-2 hover:bg-gray-100">
                $ 3,410
              </button>
            </div>

            <input
              type="number"
              min={price + 200}
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder={`$ ${price + 200} or up`}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />

            <div className="flex gap-2">
              <button
                onClick={handleBidSubmit}
                className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 rounded hover:bg-gray-100"
              >
                Place bid
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Set max bid
              </button>
            </div>

            <button
              onClick={() => setIsBidModalOpen(false)}
              className="mt-4 w-full text-gray-500 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <PaymentPage />
          </div>
        </div>
      )}
    </>
  );
}
