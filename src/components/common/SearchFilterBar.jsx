import React from 'react';
import { Search, Filter, X } from 'lucide-react';

export default function SearchFilterBar({
  searchValue = '',
  onSearchChange,
  placeholder = 'Search by name, ID, or department...',
  filters = [],
  activeFilters = {},
  onFilterChange,
  onResetFilters
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
      <div className="input-with-icon" style={{ flex: '1 1 260px' }}>
        <Search size={18} className="input-icon" />
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchValue && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            style={{ position: 'absolute', right: '0.75rem', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {filters.map((flt) => (
        <div key={flt.key} style={{ minWidth: '150px' }}>
          <select
            className="form-select"
            value={activeFilters[flt.key] || ''}
            onChange={(e) => onFilterChange(flt.key, e.target.value)}
          >
            <option value="">{flt.label}</option>
            {flt.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      {onResetFilters && (
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onResetFilters}
          title="Reset all filters"
        >
          Reset
        </button>
      )}
    </div>
  );
}

