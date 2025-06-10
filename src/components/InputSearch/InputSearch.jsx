'use client';

import React from 'react';
import styles from './InputSearch.module.css';

const InputSearch = ({
  searchQuery,
  setSearchQuery,
  setLoading,
  expandSearch,
  setExpandSearch,
  onInputChange,
  className
}) => {
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query) {
      setLoading(true);
      document.querySelector(`.${styles.searchInput}`).classList.add(styles.inputExpanded);
    } else {
      document.querySelector(`.${styles.searchInput}`).classList.remove(styles.inputExpanded);
    }

    // Call the optional onInputChange callback if provided
    if (onInputChange) {
      onInputChange(query);
    }
  };

  return (
    <div
      className={`${styles.searchContainer} ${expandSearch ? styles.expanded : ''} ${className || ''}`}
      onClick={(event) => {
        event.preventDefault();
        setExpandSearch(true);
      }}
    >
      <div className={styles.searchIconWrapper}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </div>
      <input 
        type="text"
        onChange={handleSearch}
        placeholder="Buscar"
        className={styles.searchInput}
        aria-label="search"
      />
      <button 
        className={styles.closeButton}
        onClick={(event) => {
          event.stopPropagation();
          setExpandSearch(false);
        }}
        aria-label="Cerrar búsqueda"
      >
        &times;
      </button>
    </div>
  );
};

export default InputSearch; 