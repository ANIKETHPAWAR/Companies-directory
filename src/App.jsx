import React from 'react';
import CompanyList from './components/CompanyList';
import { useCompanies } from './hooks/useCompanies';
import './App.css';

function App() {
  const { companies, loading, error } = useCompanies();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading companies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Companies Directory
        </h1>
        <CompanyList companies={companies} />
      </div>
    </div>
  );
}

export default App
