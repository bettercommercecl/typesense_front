'use client';

import React, { useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://typesense-front.vercel.app/components/PopUpSearcher/PopUpSearcher.js'; // Asegúrate de que esta URL sea correcta
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <pop-up-searcher></pop-up-searcher> {/* Usar el Web Component */}
      </main>
    </div>
  );
}