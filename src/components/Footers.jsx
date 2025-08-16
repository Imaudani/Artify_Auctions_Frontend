import ChatBot from "./ChatBot";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8 px-5">
        <div>
          <h4 className="font-serif text-white text-lg mb-4">Artify Auctions</h4>
          <p>The modern web-based auction platform designed for artists, collectors, and art lovers.</p>
        </div>
        <div>
          <h4 className="font-serif text-white text-lg mb-4">For Buyers</h4>
          <ul>
            <li><a href="#">How to Bid</a></li>
            <li><a href="#">Track My Bids</a></li>
            <li><a href="#">Payment Information</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white text-lg mb-4">For Sellers</h4>
          <ul>
            <li><a href="#">How to Sell</a></li>
            <li><a href="#">Create a Listing</a></li>
            <li><a href="#">Pricing & Fees</a></li>
            <li><a href="#">Seller Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white text-lg mb-4">Connect With Us</h4>
          <p>Stay updated with our latest auctions and news.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#"><i className="fab fa-facebook-f text-xl"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-5 text-sm">
        © 2025 Artify Auctions. All Rights Reserved.
      </div>
       <ChatBot/>
    </footer>
  );
}
