import { useEffect, useRef } from 'react';
import getRequest from '../../api/getRequest';
import styles from './InputSearch.module.css';
import { useRouter } from 'next/router';

export default function useInputSearch({
  typesenseCollection,
  handleKeyDown,
  searchQuery,
  setSearchQuery,
  setResults,
  setLoading,
  expandSearch,
  setExpandSearch,
  onInputChange,
  dropdownRef,
  ref
}) {
  const router = useRouter();
  const debounceTimeout = useRef();

  // search products in the getRequest endpoint
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Si hay menos de 3 letras, no busques y limpia resultados
    if (query.length < 3) {
      setLoading(false);
      setResults([]);
      document.querySelector(`.${styles.searchInput}`)?.classList.remove(styles.inputExpanded);
      if (onInputChange) {
        onInputChange(query);
      }
      return;
    }

    setLoading(true);

    // Debounce: espera 400ms después de que el usuario deja de tipear
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    
    debounceTimeout.current = setTimeout(async () => {
      try {
        const results = await getRequest({ query, typesenseCollection });
        setResults(results);
      } catch (error) {
        console.error(error);
        setResults([]);
      }
      setLoading(false);
      document.querySelector(`.${styles.searchInput}`)?.classList.add(styles.inputExpanded);
    }, 180);

    if (onInputChange) {
      onInputChange(query);
    }
  };

  // Close the input when the user clicks the close button
  const handleCloseSearch = (event) => {
    event.stopPropagation();
    setExpandSearch(false);
    setSearchQuery('');
    setResults([]);
    if (ref && ref.current) {
      ref.current.classList.remove(styles.inputExpanded);
    } else {
      const inputEl = document.querySelector(`.${styles.searchInput}`);
      if (inputEl) {
        inputEl.classList.remove(styles.inputExpanded);
      }
    }
    if (ref && ref.current) {
      ref.current.blur(); // Quita el foco del input
    }
  };

  // Close the input when the user scrolls
  useEffect(() => {
    const onScroll = (event) => {
      if (window.scrollY > 100 && expandSearch) {
        handleCloseSearch(event);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [expandSearch]);

  // Close the input when the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandSearch && ref &&
        ref.current &&
        !ref.current.contains(event.target) &&
        (!dropdownRef || !dropdownRef.current || !dropdownRef.current.contains(event.target))
      ) {
        handleCloseSearch(event);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandSearch, ref, dropdownRef]);

  // Close the input when the user changes the route
  useEffect(() => {
    const handleRouteChange = () => {
      handleCloseSearch({ stopPropagation: () => {} });
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return {
    handleSearch,
    handleKeyDown,
    handleCloseSearch
  };
} 