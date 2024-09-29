import React, { useState } from 'react';
import Header from './components/Header/Header';
import GlobalMenu from './components/GlobalMenu/GlobalMenu';
import ContextMenu from './components/ContextMenu/ContextMenu';
import MainContent from './components/MainContent/MainContent';
import Ads from './components/Ads/Ads';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    return (
      <div className={styles.container}>
        <Header toggleMenu={toggleMenu} />
        <GlobalMenu isOpen={isMenuOpen} />
        <ContextMenu isGlobalMenuOpen={isMenuOpen} />
        <MainContent />
        <Ads />
        <Footer />
      </div>
    );
  }