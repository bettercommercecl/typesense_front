'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import dynamic from 'next/dynamic';

const PopUpSearcher = dynamic(
  () => import('../components/PopUpSearcher/PopUpSearcher'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <pop-up-searcher></pop-up-searcher>
      </main>
    </div>
  );
}