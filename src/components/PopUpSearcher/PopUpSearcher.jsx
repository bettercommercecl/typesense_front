'use client';

import React from 'react';
// import products from "../../utils/products.json";
import ProductCard from '../Cards/ProductCard/ProductCard';
import InputSearch from '../InputSearch/InputSearch';
import styles from './PopUpSearcher.module.css';

const PopUpSearcher = ({
  handleKeyDown,
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
      // console.log('results:', results);
      // console.log('query:', query);
    } else {
      setResults([]);
      document.querySelector(`.${styles.dropDown}`).classList.remove(styles.inputExpanded);
    }
  };


  return (
    <div className={styles.container}>
      <InputSearch
        setResults={setResults}
        handleKeyDown={handleKeyDown} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setLoading={setLoading}
        expandSearch={expandSearch}
        setExpandSearch={setExpandSearch}
        onInputChange={handleInputChange}
      />
        <div className={`${styles.dropDown} ${expandSearch && searchQuery ? styles.inputExpanded : ''}`}>
          {results && results.length > 0 && (
            <div className={styles.content}>
              {/* <ul className={styles.unlistOrder}>
                Búsquedas Recientes:
                <li>Bicicleta Spinning Magnética</li>
                <li>Trotadora Eléctrica E470 Pro</li>
              </ul> */}
              <div className={styles.titleContainer}>
                <h4 className={styles.titleCards}>Sugerencias de búsqueda:</h4>
              </div>
              <div className={styles.gridContainer}> 
                {results.slice(0, 2).map((item) => (
                  <ProductCard key={item.id} product={item} background={true} />
                ))}
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default PopUpSearcher;
