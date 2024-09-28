import React from 'react';
import styles from './ContextMenu.module.css';

export default function ContextMenu({ isGlobalMenuOpen }) {
  return (
    <nav className={`${styles.contextMenu} ${isGlobalMenuOpen ? styles.hidden : ''}`}>
      <h2>Context Menu</h2>
    </nav>
  );
}