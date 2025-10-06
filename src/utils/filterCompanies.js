// Utility functions for filtering and searching companies
export const filterCompanies = (companies, filters) => {
  return companies.filter(company => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch = 
        company.name.toLowerCase().includes(searchTerm) ||
        company.industry.toLowerCase().includes(searchTerm) ||
        company.location.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm);
      
      if (!matchesSearch) return false;
    }

    // Industry filter
    if (filters.industry && filters.industry !== 'all') {
      if (company.industry !== filters.industry) return false;
    }

    // Location filter
    if (filters.location && filters.location !== 'all') {
      if (company.location !== filters.location) return false;
    }

    return true;
  });
};

export const getUniqueIndustries = (companies) => {
  const industries = companies.map(company => company.industry);
  return [...new Set(industries)];
};

export const getUniqueLocations = (companies) => {
  const locations = companies.map(company => company.location);
  return [...new Set(locations)];
};
