'use client'
import PopUpSearcher from "@/components/PopUpSearcher/PopUpSearcher";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PopUpSearcher/>
      </main>
    </div>
  );
}
