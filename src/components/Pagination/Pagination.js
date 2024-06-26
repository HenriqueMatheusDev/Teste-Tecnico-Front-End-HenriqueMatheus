import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {pages.map((page) => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
}

export default Pagination;
