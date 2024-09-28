import React from 'react';
import styles from './Header.module.css';

export default function Header({ toggleMenu }) {
  return (
    <header className={styles.header}>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        ☰ Global Menu
      </button>
      <h2>Header</h2>
    </header>
  );
}