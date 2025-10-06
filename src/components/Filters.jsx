import React from 'react';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import SortDropdown from './SortDropdown';

const Filters = ({ 
  searchTerm, 
  onSearchChange, 
  industryFilter, 
  onIndustryChange, 
  locationFilter, 
  onLocationChange, 
  industries, 
  locations,
  sortBy,
  onSortChange,
  onClearFilters
}) => {
  const hasActiveFilters = searchTerm || industryFilter !== 'all' || locationFilter !== 'all';

  return (
    <div className="mb-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
        <div className="relative">
          <div className="mb-8">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
              placeholder="Search companies by name, industry, location..."
            />
          </div>
          
          <div className="flex flex-col xl:flex-row gap-6 items-end">
            <div className="flex flex-col lg:flex-row gap-6 flex-1">
              <div className="flex-1">
                <FilterDropdown
                  label="Filter by Industry"
                  value={industryFilter}
                  onChange={onIndustryChange}
                  options={industries}
                  placeholder="All Industries"
                />
              </div>
              <div className="flex-1">
                <FilterDropdown
                  label="Filter by Location"
                  value={locationFilter}
                  onChange={onLocationChange}
                  options={locations}
                  placeholder="All Locations"
                />
              </div>
              <div className="flex-1">
                <SortDropdown
                  sortBy={sortBy}
                  onSortChange={onSortChange}
                />
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex-shrink-0">
                <button
                  onClick={onClearFilters}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
