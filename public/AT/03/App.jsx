import React, { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [images, setImages] = useState([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ]);

  const addImage = () => {
    setImages([...images, 'https://via.placeholder.com/100']);
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={removeImage}>-</button>
        <span>{images.length}</span>
        <button onClick={addImage}>+</button>
      </div>
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </div>
  );
}