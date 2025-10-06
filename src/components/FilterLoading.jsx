// FilterLoading component - shows loading state while filtering
import React from 'react';

const FilterLoading = ({ isFiltering }) => {
  if (!isFiltering) return null;

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center space-x-2 text-gray-600">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        <span className="text-sm">Filtering results...</span>
      </div>
    </div>
  );
};

export default FilterLoading;
