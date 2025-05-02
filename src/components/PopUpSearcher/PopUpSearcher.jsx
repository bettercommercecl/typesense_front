'use client';

import HomeBannerInfo from '../../api/getBannerInfo';
import './PopUpSearcher.css';

const PopUpSearcher = ({searchQuery,setSearchQuery,results,setResults,loading,setLoading,apiUrl,expandSearch,setExpandSearch}) => {

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      setLoading(true);
      try {
        const data = await HomeBannerInfo(apiUrl); // Llama a la API
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]); // Limpia los resultados si no hay consulta
    }
  };

  const handleCloseSearcher = async (e) => {
    console.log('HELLO 2');
    setExpandSearch(false);
  };


  return (
    <div className={`searchContainer ${expandSearch ? 'expanded' : ''}`}
      onClick={(event) => {
        event.preventDefault(); // Evita la acción predeterminada
        setExpandSearch(true); // Expande la búsqueda
      }}
    >
      <div className="searchIconWrapper">
        <svg className="searchIcon" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </div>
      <input 
        type="text"
        onChange={handleSearch}
        placeholder="Buscar"
        className="searchInput"
        id={apiUrl === 'false' ? '' : "search-doofinder"}
        aria-label="search"
      />
      <button 
        className="closeButton" 
        // onClick={handleCloseSearcher} // Esto no esta teniendo efecto
        onClick={(event) => {
          event.stopPropagation();
          setExpandSearch(false); // Expande la búsqueda
        }}
        aria-label="Cerrar búsqueda"
      >
        &times; {/* Este es el símbolo de la "X" */}
      </button>
    </div>
  );
};

export default PopUpSearcher; 