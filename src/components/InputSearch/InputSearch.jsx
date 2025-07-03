'use client';

import React, { forwardRef } from 'react';
import styles from './InputSearch.module.css';
import useInputSearch from './useInputSearch';

const InputSearch = forwardRef(({
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
}, ref) => {

	// Custom Hook useInputSearch to controll the logic
	const {
		handleSearch,
		handleKeyDown: hookHandleKeyDown,
		handleCloseSearch
	} = useInputSearch({
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
	});

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
				ref={ref} 
				type="text"
				onChange={handleSearch}
				onKeyDown={hookHandleKeyDown || handleKeyDown}
				value={searchQuery}
				placeholder="Buscar"
				className={styles.searchInput}
				aria-label="search"
			/>
			<button 
				className={styles.closeButton}
				onClick={handleCloseSearch}
				aria-label="Cerrar búsqueda"
			>
				&times;
			</button>
		</div>
	);
});

export default InputSearch;