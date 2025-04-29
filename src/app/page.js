'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import PopUpSearcher from '../components/PopUpSearcher/PopUpSearcher.jsx';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PopUpSearcher 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          results={results}
          setResults={setResults}
          loading={loading}
        />
      </main>
    </div>
  );
}