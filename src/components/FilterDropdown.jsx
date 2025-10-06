import React from 'react';

const FilterDropdown = ({ 
  label, 
  value, 
  onChange, 
  options, 
  placeholder = "All" 
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full px-4 py-3 border-2 border-blue-200 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 bg-white/90 backdrop-blur-sm transition-all duration-300 appearance-none cursor-pointer text-slate-700 font-medium hover:shadow-xl"
        >
          <option value="all">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
