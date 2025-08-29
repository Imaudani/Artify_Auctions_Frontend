import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({ name: "", number: "", expiry: "", cvc: "" });
  const [feedback, setFeedback] = useState({ message: "", status: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const winningBid = 2700;
  const premium = winningBid * 0.1;
  const tax = winningBid * 0.05;
  const total = winningBid + premium + tax;

  const handlePay = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      const { name, number, expiry, cvc } = cardDetails;
      if (!name || !number || !expiry || !cvc) {
        setFeedback({ message: "Please fill out all card details.", status: "error" });
        return;
      }
    }

    setIsProcessing(true);
    setFeedback({ message: "", status: "" });

    setTimeout(() => {
      setIsProcessing(false);
      setFeedback({ message: "Payment Successful! A confirmation email has been sent.", status: "success" });
    }, 2000);
  };

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif mb-2">Congratulations!</h1>
        <p className="text-gray-600 text-lg">You are the winning bidder. Please complete your purchase below.</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif border-b pb-3 mb-4">Order Summary</h3>
          <div className="flex gap-4 items-center mb-6">
            <img src="https://picsum.photos/seed/painting1/200/160" alt="Ethereal Vista" className="w-24 h-20 object-cover rounded" />
            <div>
              <h4 className="text-lg font-semibold">Ethereal Vista</h4>
              <p className="text-gray-500">by Marianne Dubois</p>
            </div>
          </div>

          <ul className="text-gray-700 text-sm space-y-2 border-t pt-4">
            <li className="flex justify-between"><span>Winning Bid</span><span>${winningBid.toFixed(2)}</span></li>
            <li className="flex justify-between"><span>Buyer's Premium (10%)</span><span>${premium.toFixed(2)}</span></li>
            <li className="flex justify-between"><span>Taxes (5%)</span><span>${tax.toFixed(2)}</span></li>
            <li className="flex justify-between font-bold text-lg border-t pt-4"><span>Total</span><span>${total.toFixed(2)}</span></li>
          </ul>
        </div>

        {/* Payment Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif border-b pb-3 mb-4">Secure Payment</h3>

          {/* Payment Method Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`border px-4 py-3 rounded text-left flex items-center gap-2 font-medium ${
                paymentMethod === "card" ? "border-blue-700 bg-blue-50" : "border-gray-300"
              }`}
            >
              💳 Credit Card
            </button>
            <button
              onClick={() => setPaymentMethod("paypal")}
              className={`border px-4 py-3 rounded text-left flex items-center gap-2 font-medium ${
                paymentMethod === "paypal" ? "border-blue-700 bg-blue-50" : "border-gray-300"
              }`}
            >
              🅿️ PayPal
            </button>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePay}>
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="0000 0000 0000 0000"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Expiry</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">CVC</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="123"
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full mt-6 bg-blue-800 text-white py-3 rounded hover:bg-blue-900 transition disabled:bg-gray-400"
            >
              {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
            </button>

            {/* Feedback */}
            <p className={`text-center mt-4 font-medium h-6 ${feedback.status === "error" ? "text-red-500" : "text-green-600"}`}>
              {feedback.message}
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
