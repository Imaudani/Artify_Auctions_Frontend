export default function Filters({ onFilterChange, onSearchChange }) {
  const handleSubCategoryChange = (e) => {
    onFilterChange({ type: "category", value: e.target.value });
  };

  const handleSortChange = (e) => {
    onFilterChange({ type: "sort", value: e.target.value });
  };

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-wrap gap-4 items-center mb-12">
      <div className="flex flex-grow min-w-[250px]">
        <input
          type="text"
          placeholder="Search within Digital Art..."
          className="w-full p-3 border border-gray-300 rounded-l-full outline-none"
          onChange={handleSearchChange}
        />
        <button className="bg-blue-900 text-white px-5 rounded-r-full hover:bg-gray-900">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <select onChange={handleSubCategoryChange} className="p-3 border border-gray-300 rounded-full">
        <option value="All">All Sub-Categories</option>
        <option value="AI">AI-Generated</option>
        <option value="3D">3D Modeling</option>
        <option value="Illustration">Illustration</option>
        <option value="Pixel">Pixel Art</option>
      </select>

      <select onChange={handleSortChange} className="p-3 border border-gray-300 rounded-full">
        <option value="">Sort By</option>
        <option value="ending">Ending Soon</option>
        <option value="new">Newly Listed</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
      </select>
    </div>
  );
}
