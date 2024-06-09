import React from 'react';
import { useSelector } from 'react-redux';
import styles from './StockTable.module.css';

const StockTable = () => {
  const { data, error } = useSelector(state => ({
    data: state.data,
    error: state.error,
  }));

  if (error) {
    return <div className={styles.errorMessage}><p>Error: {error}</p></div>;
  }

  if (!data || Object.keys(data).length === 0) {
    return <p>Loading...</p>;
  }

  const priceInfo = data.prices;
  const volumeInfo = data.volumes;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Maximum</th>
          <th>Minimum</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        <tr key="price">
          <td>Price</td>
          <td>${priceInfo.max_price}</td>
          <td>${priceInfo.min_price}</td>
          <td>${priceInfo.avg_price}</td>
        </tr>
        <tr key="volume">
          <td>Volume</td>
          <td>{volumeInfo.max_volume}</td>
          <td>{volumeInfo.min_volume}</td>
          <td>{volumeInfo.avg_volume}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StockTable;
