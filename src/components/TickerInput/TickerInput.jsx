import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../actions/stock';
import styles from './TickerInput.module.css';

const TickerInput = () => {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const dispatch = useDispatch();

  const handleInputChange = (event, field) => {
    switch (field) {
      case 'ticker':
        setTicker(event.target.value);
        break;
      case 'startDate':
        setStartDate(event.target.value);
        break;
      case 'endDate':
        setEndDate(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSearchClick = () => {
    dispatch(fetchStockData(ticker, startDate, endDate));
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="ticker" className={styles.label}>Enter a stock ticker:</label>
      <input
        id="ticker"
        type="text"
        className={`${styles.searchInput} ${styles.ticker}`}
        value={ticker}
        onChange={(e) => handleInputChange(e, 'ticker')}
      />
      <label htmlFor="startDate" className={styles.label}>Start Date:</label>
      <input
        id="startDate"
        type="date"
        className={`${styles.searchInput} ${styles.startDate}`}
        value={startDate}
        onChange={(e) => handleInputChange(e, 'startDate')}
      />
      <label htmlFor="endDate" className={styles.label}>End Date:</label>
      <input
        id="endDate"
        type="date"
        className={`${styles.searchInput} ${styles.endDate}`}
        value={endDate}
        onChange={(e) => handleInputChange(e, 'endDate')}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default TickerInput;
