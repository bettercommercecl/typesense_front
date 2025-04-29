'use client';

import HomeBannerInfo from '../../api/getBannerInfo';
import './PopUpSearcher.css';

const PopUpSearcher = ({ searchQuery, setSearchQuery, results, setResults, loading }) => {

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      try {
        const data = await HomeBannerInfo(); // Llama a la API
        console.log('data',data);

        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setResults([]); // Limpia los resultados si no hay consulta
    }
  };

  return (
    <div className="popup-searcher-container" 
      // ref={popupRef}
    >
      <button 
        className="search-button"
        // onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="search-icon" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </button>

        <div className="popup-content">
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="search-results">
            <div className="no-results">
              No se encontraron resultados
            </div>
          </div>
        </div>
    </div>
  );
};

export default PopUpSearcher; 