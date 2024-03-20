// Preloader.js

import React from 'react';
// import styles from './Preloader.module.css'; // Import CSS module for styling?

const Preloader = () => {
  return (
    <div className='preloaderContainer'>
      <div className='loader fadeOut'>
        <div className='border'></div>
        <img src="assets/img/logo/preloader.png" alt="Loading" className='loaderImage' />
      </div>
      <style jsx>{
        `
        
      .preloaderContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      
      .loader {
        position: relative;
        width: 180px;
        height: 180px;
      }
      
      .border {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
      
      .loaderImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%; /* Adjust the size of the image */
        height: auto; /* Maintain aspect ratio */
        animation: fadeInOut 1.5s ease-in-out infinite; /* CSS animation for fading in and out */
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes fadeInOut {
        0%, 100% { opacity: 0; } /* Fully transparent at the beginning and end */
        50% { opacity: 1; } /* Fully opaque in the middle */
      }
          `
      }
      </style>
    </div>
  );
};

export default Preloader;
