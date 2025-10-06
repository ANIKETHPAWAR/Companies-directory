// CompanyList component - displays the list of all companies
import React from 'react';
import CompanyCard from './CompanyCard';

const CompanyList = ({ companies }) => {
  return (
    <div className="company-list">
      <div className="mb-6">
        <p className="text-gray-600 text-center">
          Showing {companies.length} companies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
