import React from 'react';
import { useSelector } from 'react-redux';

const StockTable = () => {
  const { data, error } = useSelector(state => ({
    data: state.data,
    error: state.error,
  }));

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || Object.keys(data).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <table>
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
          <td>{data.max_price}</td>
          <td>{data.min_price}</td>
          <td>{data.avg_price}</td>
        </tr>
        <tr key="volume">
          <td>Volume</td>
          <td>{data.max_volume}</td>
          <td>{data.min_volume}</td>
          <td>{data.avg_volume}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StockTable;
