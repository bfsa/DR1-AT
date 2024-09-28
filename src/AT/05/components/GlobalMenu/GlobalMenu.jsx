import React from 'react';
import styles from './GlobalMenu.module.css';

export default function GlobalMenu({ isOpen }) {
  return (
    <nav className={`${styles.globalMenu} ${isOpen ? styles.open : ''}`}>
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
    </nav>
  );
}