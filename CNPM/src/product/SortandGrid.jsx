import React from 'react';

const SortandGrid = ({ onSortChange, view, setView }) => {
  return (
    <div className="flex m-auto justify-between items-center p-2  bg-white shadow-md">
      <h1 className="text-lg font-bold">
        Showing <span className="text-red-500">Tours</span> activities in Ho Chi Minh City
      </h1>
      <div className="flex space-x-4">
        <div>
          <label className="mr-2">Sort by:</label>
          <select
            className="border rounded p-2"
            onChange={e => onSortChange(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 border rounded ${view === 'grid' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`p-2 border rounded ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortandGrid;
