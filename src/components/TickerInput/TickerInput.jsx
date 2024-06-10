import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../actions/stock';
import styles from './TickerInput.module.css';

const TickerInput = () => {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [errors, setErrors] = useState({
    ticker: '',
    startDate: '',
    endDate: ''
  });
  const dispatch = useDispatch();

  const handleInputChange = (event, field) => {
    switch (field) {
      case 'ticker':
        setTicker(event.target.value);
        setErrors({...errors, ticker: '' });
        break;
      case 'startDate':
        setStartDate(event.target.value);
        setErrors({...errors, startDate: '' });
        break;
      case 'endDate':
        setEndDate(event.target.value);
        setErrors({...errors, endDate: '' });
        break;
      default:
        break;
    }
  };

  const handleSearchClick = () => {
    if (!ticker) {
      setErrors({...errors, ticker: 'Please enter a stock ticker.' });
    }
    if (!startDate) {
      setErrors({...errors, startDate: 'Please enter a start date.' });
    }
    if (!endDate) {
      setErrors({...errors, endDate: 'Please enter an end date.' });
    }
    if (ticker && startDate && endDate) {
      setErrors({...errors, ticker: '', startDate: '', endDate: '' });
      dispatch(fetchStockData(ticker, startDate, endDate));
    }
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="ticker" className={styles.label}>Enter a stock ticker:</label>
      <div className={styles.inputContainer}>
        <input
          id="ticker"
          type="text"
          className={`${styles.searchInput} ${styles.ticker}`}
          value={ticker}
          onChange={(e) => handleInputChange(e, 'ticker')}
        />
        {errors.ticker && <p className={styles.errorMessage}>{errors.ticker}</p>}
      </div>
      <label htmlFor="startDate" className={styles.label}>Start Date:</label>
      <div className={styles.inputContainer}>
        <input
          id="startDate"
          type="date"
          className={`${styles.searchInput} ${styles.startDate}`}
          value={startDate}
          onChange={(e) => handleInputChange(e, 'startDate')}
        />
        {errors.startDate && <p className={styles.errorMessage}>{errors.startDate}</p>}
      </div>
      <label htmlFor="endDate" className={styles.label}>End Date:</label>
      <div className={styles.inputContainer}>
        <input
          id="endDate"
          type="date"
          className={`${styles.searchInput} ${styles.endDate}`}
          value={endDate}
          onChange={(e) => handleInputChange(e, 'endDate')}
        />
        {errors.endDate && <p className={styles.errorMessage}>{errors.endDate}</p>}
      </div>
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default TickerInput;
