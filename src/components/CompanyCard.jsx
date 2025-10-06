// CompanyCard component - displays individual company information
import React from 'react';

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{company.name}</h3>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-semibold">Industry:</span> {company.industry}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {company.location}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Founded:</span> {company.founded}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Employees:</span> {company.employees}
        </p>
        <p className="text-gray-700 mt-3 text-sm">{company.description}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
