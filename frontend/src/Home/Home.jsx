import React, { useState, useEffect } from 'react';
import Tree from '../Tree/Tree';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showSecondQuote, setShowSecondQuote] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setShowTree(true);
    }, 9000); // Total duration for both quotes
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  useEffect(() => {
    const secondQuoteTimer = setTimeout(() => {
      setShowSecondQuote(true);
    }, 5000); // Delay for the second quote to appear after the first one fades out
    return () => clearTimeout(secondQuoteTimer); // Clean up the timer
  }, []);

  useEffect(() => {
  }, [showTree]); // Log whenever showTree changes

  return (
    <>
      {showTree ? (
        <Tree />
      ) : (
        <div className={`home-container ${isLoaded ? 'fade-in-out' : ''}`}>
          {!showSecondQuote ? (
            <div className="quote first-quote">
              <p>&quot;OMG This is huge guys!&quot;</p>
              <p>- Maria Cristoforo Spring 2024 -</p>
            </div>
          ) : (
            <div className="quote second-quote">
              <p>Maria, you ate</p>
              <p>- Wispees 2024 -</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
