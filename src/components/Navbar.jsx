export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow sticky top-0 z-50">
      <div className="text-2xl font-serif text-gray-900">Artify Auctions</div>

      <ul className="flex space-x-4">
        <li><a href="/" className="text-gray-500 hover:text-gray-900">Home</a></li>
        <li><a href="#featured" className="text-gray-500 hover:text-gray-900">Auctions</a></li>
        <li><a href="#categories" className="text-gray-900 font-semibold">Categories</a></li>
        <li><a href="/artists" className="text-gray-500 hover:text-gray-900">Artists</a></li>
        <li><a href="/about" className="text-gray-500 hover:text-gray-900">About</a></li>
        <li><a href="/profile" className="text-gray-500 hover:text-gray-900">Profile</a></li>
      </ul>

      <div>
        <a href="#" className="border border-blue-900 text-blue-900 px-4 py-2 rounded-full mr-2 hover:bg-blue-900 hover:text-white">Login</a>
        <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-gray-900">Register</a>
      </div>
    </nav>
  );
}
