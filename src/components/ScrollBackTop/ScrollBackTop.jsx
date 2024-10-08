import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={styles.button}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

// Basic button styles
const styles = {
  button: {
    position: 'fixed',
    bottom: '80px',
    right: '30px',
    padding: '10px 20px',
    fontSize: '12px',
    fontWeight:'bold',
    borderRadius: '5px',
    backgroundColor: '#3986fa',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1000,
    textTransform :'uppercase',
    letterSpacing:'1px'
  },
};

export default ScrollToTopButton;
