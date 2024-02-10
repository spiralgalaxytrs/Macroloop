// Preloader.js

import React from 'react';
import styles from './Preloader.module.css'; // Import CSS module for styling

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <div className={`${styles.loader} ${styles.fadeOut}`}>
        <div className={styles.border}></div>
        <img src="assets/img/logo/preloader.png" alt="Loading" className={styles.loaderImage} />
      </div>
    </div>
  );
};

export default Preloader;
