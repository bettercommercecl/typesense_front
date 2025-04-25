'use client';

import React, { useEffect } from 'react';
import styles from './page.module.css';
import '../components/PopUpSearcher/PopUpSearcher';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <pop-up-searcher></pop-up-searcher>
      </main>
    </div>
  );
}