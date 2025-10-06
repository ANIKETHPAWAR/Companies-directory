// ErrorMessage component - displays error with retry functionality
import React from 'react';

const ErrorMessage = ({ error, onRetry, retryText = "Try Again" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-6">

        
        {/* Error Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
        
        {/* Error Message */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 font-medium">Error Details:</p>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {retryText}
            </button>
          )}
          
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            Refresh Page
          </button>
        </div>
        
        {/* Help Text */}
        <p className="text-gray-500 text-sm mt-4">
          If the problem persists, please check your internet connection or try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
