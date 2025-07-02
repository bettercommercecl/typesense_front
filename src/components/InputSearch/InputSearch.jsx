'use client';

import React, { forwardRef, useEffect } from 'react';
import getRequest from '../../api/getRequest';
import styles from './InputSearch.module.css';

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

	// search products in the getRequest endpoint
	const handleSearch = async (e) => {
		const query = e.target.value;
		setSearchQuery(query);

		if (query) {
			setLoading(true);
			try {
				const results = await getRequest({query,typesenseCollection});
				setResults(results);
			} catch (error) {
				console.error(error);
				setResults([]);
			}
			setLoading(false);
			document.querySelector(`.${styles.searchInput}`).classList.add(styles.inputExpanded);
		} else {
			setLoading(false);
			// setResults([]);
			document.querySelector(`.${styles.searchInput}`).classList.remove(styles.inputExpanded);
		}

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
			if (window.scrollY > 200 && expandSearch) {
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
				onKeyDown={handleKeyDown}
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