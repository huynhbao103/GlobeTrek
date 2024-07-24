import React from 'react';
import Select from 'react-select';

const SortandGrid = ({ onSortChange, view, setView }) => {
  const options = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'priceLowHigh', label: 'Price: Low to High' },
    { value: 'priceHighLow', label: 'Price: High to Low' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4CA771' : state.isFocused ? '#d1fae5' : '#ffffff',
      color: '#000',
      '&:hover': {
        backgroundColor: '#d1fae5',
      },
    }),
    control: (provided) => ({
      ...provided,
      borderColor: '#4CA771',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#4CA771',
      },
    }),
  };

  return (
    <div className="flex justify-between items-center p-2 bg-[rgba(174,249,231,0.2)] flex-wrap">
      <h1 className="text-md sm:text-lg font-bold flex-shrink-0">
        Showing <span className="text-red-500">Tours</span> activities in Ho Chi Minh City
      </h1>
      <div className="flex items-center space-x-4">
        <div className="w-full flex items-center md:w-auto px-6">
          <label className="mr-2 font-bold text-sm text-gray-400">Sort by:</label>
          <Select
            options={options}
            styles={customStyles}
            onChange={(selectedOption) => onSortChange(selectedOption.value)}
            className="w-full md:w-64 font-bold text-sm text-gray-400" // Chiều rộng 100% trên thiết bị nhỏ, 64 đơn vị trên thiết bị lớn hơn
          />
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 border rounded ${view === 'grid' ? 'bg-[#4CA771] text-white' : 'bg-white'}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`p-2 border rounded ${view === 'list' ? 'bg-[#4CA771] text-white' : 'bg-white'}`}
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
