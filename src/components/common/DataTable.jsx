import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';

export default function DataTable({
  columns = [],
  data = [],
  keyField = 'id',
  pageSize = 8,
  emptyMessage = 'No records found.'
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (aVal === bVal) return 0;
    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="table-responsive">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                style={{ cursor: col.sortable ? 'pointer' : 'default', width: col.width || 'auto' }}
                onClick={() => col.sortable && handleSort(col.field)}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  {col.header}
                  {col.sortable && <ArrowUpDown size={12} color="#94A3B8" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rIdx) => (
              <tr key={row[keyField] || rIdx}>
                {columns.map((col, cIdx) => (
                  <td key={cIdx}>
                    {col.render ? col.render(row) : row[col.field]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--diu-text-muted)' }}>
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--diu-border)', backgroundColor: 'var(--diu-surface-hover)' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--diu-text-muted)' }}>
            Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} records
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, padding: '0 0.5rem' }}>
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

