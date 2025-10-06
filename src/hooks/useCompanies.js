import { useState, useEffect, useCallback } from 'react';

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompanies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (Math.random() < 0.1) {
        throw new Error('Network request failed. Please check your connection.');
      }
      
      const response = await fetch('/data/companies.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCompanies(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch companies');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const retry = useCallback(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return { companies, loading, error, retry };
};
