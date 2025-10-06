import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-white/20 max-w-md mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
        <div className="relative">
          <div className="relative mb-8">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-600 shadow-lg"></div>
          </div>
          
          <div className="text-2xl text-slate-800 font-bold mb-3 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">{message}</div>
          <div className="text-slate-600 text-lg">Please wait while we fetch the data...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
