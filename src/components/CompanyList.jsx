import React from 'react';
import CompanyCard from './CompanyCard';

const CompanyList = ({ companies }) => {
  if (companies.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 max-w-md mx-auto border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-slate-700 text-xl font-bold mb-3">No companies found</div>
            <p className="text-slate-500 text-lg">Try adjusting your search terms or filters to discover more companies</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="company-list">
      <div className="mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20 max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-slate-700 text-sm font-medium">
              Showing <span className="font-bold text-blue-600 text-base">{companies.length}</span> companies
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div 
            key={company.id} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
