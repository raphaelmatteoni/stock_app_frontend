import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../actions/stock';
import styles from './TickerInput.module.css';

const TickerInput = () => {
  const [ticker, setTicker] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(fetchStockData(ticker));
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="searchInput" className={styles.label}>Enter a stock ticker:</label>
      <input
        id="ticker"
        type="text"
        className={styles.searchInput}
        value={ticker}
        onChange={handleInputChange}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default TickerInput;
