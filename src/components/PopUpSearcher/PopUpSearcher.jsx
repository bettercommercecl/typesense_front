'use client';

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import products from "../../utils/products.json";
import ProductCard from '../Cards/ProductCard/ProductCard';
import styles from './PopUpSearcher.module.css';

const PopUpSearcher = ({
  searchQuery,
  setSearchQuery,
  results,
  setResults,
  loading,
  setLoading,
  apiUrl,
  expandSearch,
  setExpandSearch
}) => {

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      setLoading(true);
      document.querySelector(`.${styles.searchInput}`).classList.add(styles.inputExpanded);
      document.querySelector(`.${styles.dropDown}`).classList.add(styles.inputExpanded);
    } else {
      setResults([]);
      document.querySelector(`.${styles.searchInput}`).classList.remove(styles.inputExpanded);
      document.querySelector(`.${styles.dropDown}`).classList.remove(styles.inputExpanded);
    }
  };

  return (
    <div
      className={`${styles.searchContainer} ${expandSearch ? styles.expanded : ''}`}
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
      <div className={`${styles.dropDown} ${expandSearch && searchQuery ? styles.inputExpanded : ''}`}>
        <div className={styles.content}>
          <ul className={styles.unlistOrder}>
            Búsquedas Recientes:
            <li>Bicicleta Spinning Magnética</li>
            <li>Trotadora Eléctrica E470 Pro</li>
          </ul>
          <h4 className={styles.titleCards}>Sugerencias de búsqueda</h4>
          <div className={styles.gridContainer}> 
            {products.map((item) => (
              <ProductCard key={item.id} product={item} background={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpSearcher;
