import React, { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ErrorBoundary from './components/ErrorBoundary';
import FilterLoading from './components/FilterLoading';
import { useCompanies } from './hooks/useCompanies';
import { filterCompanies, sortCompanies, paginateCompanies, getUniqueIndustries, getUniqueLocations } from './utils/filterCompanies';
import './App.css';

function App() {
  const { companies, loading, error, retry } = useCompanies();
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isFiltering, setIsFiltering] = useState(false);

  const industries = getUniqueIndustries(companies);
  const locations = getUniqueLocations(companies);

  useEffect(() => {
    if (searchTerm || industryFilter !== 'all' || locationFilter !== 'all' || sortBy !== 'name-asc') {
      setIsFiltering(true);
      const timer = setTimeout(() => {
        setIsFiltering(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchTerm, industryFilter, locationFilter, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, industryFilter, locationFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setIndustryFilter('all');
    setLocationFilter('all');
    setSortBy('name-asc');
    setCurrentPage(1);
  };

  const filteredCompanies = filterCompanies(companies, { 
    search: searchTerm,
    industry: industryFilter,
    location: locationFilter
  });
  
  const sortedCompanies = sortCompanies(filteredCompanies, sortBy);
  const paginatedCompanies = paginateCompanies(sortedCompanies, currentPage, itemsPerPage);
  
  const totalPages = Math.ceil(sortedCompanies.length / itemsPerPage);

  if (loading) {
    return <LoadingSpinner message="Loading companies..." />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={retry} retryText="Retry Loading" />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Companies Directory
            </h1>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover and explore companies across various industries and locations. 
              <span className="text-blue-600 font-medium">Find your next opportunity</span> or business partner.
            </p>
          </div>
          
          <Filters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            industryFilter={industryFilter}
            onIndustryChange={setIndustryFilter}
            locationFilter={locationFilter}
            onLocationChange={setLocationFilter}
            industries={industries}
            locations={locations}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={clearFilters}
          />
          
          <FilterLoading isFiltering={isFiltering} />
          
          <CompanyList companies={paginatedCompanies} />
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={sortedCompanies.length}
            onItemsPerPageChange={setItemsPerPage}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App
