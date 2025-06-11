'use client';

import React from 'react';
import products from "../../utils/products.json";
import ProductCard from '../Cards/ProductCard/ProductCard';
import InputSearch from '../InputSearch/InputSearch';
import styles from './PopUpSearcher.module.css';

const PopUpSearcher = ({
  setTypesenseProducts,
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
  
  const handleInputChange = (query) => {
    if (query) {
      document.querySelector(`.${styles.dropDown}`).classList.add(styles.inputExpanded);
    } else {
      setResults([]);
      document.querySelector(`.${styles.dropDown}`).classList.remove(styles.inputExpanded);
    }
  };

  return (
    <div className={styles.container}>
      <InputSearch
        setTypesenseProducts={setTypesenseProducts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setLoading={setLoading}
        expandSearch={expandSearch}
        setExpandSearch={setExpandSearch}
        onInputChange={handleInputChange}
      />
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
