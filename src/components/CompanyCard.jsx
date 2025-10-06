import React from 'react';

const CompanyCard = ({ company }) => {
  const getIndustryColor = (industry) => {
    const colors = {
      'Technology': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'Healthcare': 'bg-gradient-to-r from-emerald-500 to-green-500 text-white',
      'Energy': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      'Finance': 'bg-gradient-to-r from-violet-500 to-purple-500 text-white',
      'Education': 'bg-gradient-to-r from-sky-500 to-blue-500 text-white',
      'Retail': 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
    };
    return colors[industry] || 'bg-gradient-to-r from-slate-500 to-gray-500 text-white';
  };

  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/20 hover:border-blue-200/50 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
            {company.name}
          </h3>
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 group-hover:scale-110 shadow-lg ${getIndustryColor(company.industry)}`}>
            {company.industry}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{company.location}</span>
          </div>

          <div className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-200">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Founded {company.founded}</span>
          </div>

          <div className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-200">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{company.employees} employees</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-200">
          <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-200">{company.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
