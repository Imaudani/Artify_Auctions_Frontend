import { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Payment</h2>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Pay With:</label>
          <div className="flex gap-4">
            <button
              onClick={() => setMethod("card")}
              className={`px-4 py-2 rounded border ${method === "card" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
            >
              💳 Card
            </button>
            <button
              onClick={() => setMethod("wallet")}
              className={`px-4 py-2 rounded border ${method === "wallet" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
            >
              👜 Digital Wallet
            </button>
            <button
              onClick={() => setMethod("bank")}
              className={`px-4 py-2 rounded border ${method === "bank" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
            >
              🏦 Bank Transfer
            </button>
          </div>
        </div>

        {/* Dynamic Payment Form */}
        {method === "card" && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-1">Expiration Date</label>
                <input type="text" placeholder="MM/YY" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex-1">
                <label className="block mb-1">CVV</label>
                <input type="text" placeholder="***" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
            </div>
          </>
        )}

        {method === "wallet" && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Select Wallet</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>PayPal</option>
                <option>Apple Pay</option>
                <option>Google Pay</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Wallet Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </>
        )}

        {method === "bank" && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Account Number</label>
              <input type="text" placeholder="Enter account number" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Bank Name</label>
              <input type="text" placeholder="Enter bank name" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </>
        )}

        {/* Pay Button */}
        <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
          Pay $250.28
        </button>
      </div>
    </div>
  );
}
