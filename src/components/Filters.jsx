export default function Filters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-wrap gap-4 items-center mb-12">
      <div className="flex flex-grow min-w-[250px]">
        <input type="text" placeholder="Search within Digital Art..."
          className="w-full p-3 border border-gray-300 rounded-l-full outline-none" />
        <button className="bg-blue-900 text-white px-5 rounded-r-full hover:bg-gray-900">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <select className="p-3 border border-gray-300 rounded-full">
        <option>All Sub-Categories</option>
        <option>AI-Generated</option>
        <option>3D Modeling</option>
        <option>Illustration</option>
        <option>Pixel Art</option>
      </select>
      <select className="p-3 border border-gray-300 rounded-full">
        <option>Sort By</option>
        <option>Ending Soon</option>
        <option>Newly Listed</option>
        <option>Price: High to Low</option>
        <option>Price: Low to High</option>
      </select>
    </div>
  );
}
