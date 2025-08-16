import React from "react";

export default function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[350px] p-6">
        <h2 className="text-xl font-bold mb-4">Payment</h2>

        <input
          type="text"
          placeholder="Card Number"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Dummy payment successful!");
              onClose();
            }}
            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
