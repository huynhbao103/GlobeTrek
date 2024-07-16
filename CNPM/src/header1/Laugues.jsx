import React, { useState } from 'react';

const Select = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className="form-select">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Sử dụng component
const App = () => {
  const options = [
    { label: 'VI | VND', value: 'vn' },
    { label: 'EN | SGD', value: 'sg' },
    // Thêm các lựa chọn khác tại đây
  ];

  const handleSelect = (value) => {
    console.log('Bạn đã chọn:', value);
  };

  return (
    <div className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-4 text-base font-medium'>
      <Select className='' options={options} onSelect={handleSelect}  />
    </div>
  );
};

export default App;
