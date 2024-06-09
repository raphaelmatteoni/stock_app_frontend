import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../actions/stock';

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
    <div>
      <label htmlFor="ticker">Enter a stock ticker:</label>
      <input
        id="ticker"
        type="text"
        value={ticker}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick} className="btn-primary">
        Search
      </button>
    </div>
  );
};

export default TickerInput;
