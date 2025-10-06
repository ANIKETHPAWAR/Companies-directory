export const filterCompanies = (companies, filters) => {
  return companies.filter(company => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch = 
        company.name.toLowerCase().includes(searchTerm) ||
        company.industry.toLowerCase().includes(searchTerm) ||
        company.location.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm);
      
      if (!matchesSearch) return false;
    }

    if (filters.industry && filters.industry !== 'all') {
      if (company.industry !== filters.industry) return false;
    }

    if (filters.location && filters.location !== 'all') {
      if (company.location !== filters.location) return false;
    }

    return true;
  });
};

export const sortCompanies = (companies, sortBy) => {
  if (!sortBy || sortBy === 'none') return companies;

  const [field, direction] = sortBy.split('-');
  const sorted = [...companies].sort((a, b) => {
    let aValue, bValue;

    switch (field) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'founded':
        aValue = a.founded;
        bValue = b.founded;
        break;
      case 'employees':
        aValue = a.employees;
        bValue = b.employees;
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
};

export const paginateCompanies = (companies, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return companies.slice(startIndex, endIndex);
};

export const getUniqueIndustries = (companies) => {
  const industries = companies.map(company => company.industry);
  return [...new Set(industries)];
};

export const getUniqueLocations = (companies) => {
  const locations = companies.map(company => company.location);
  return [...new Set(locations)];
};
