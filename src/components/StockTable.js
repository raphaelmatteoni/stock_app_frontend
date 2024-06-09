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

  if (!data.length) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Maximum</th>
          <th>Minimum</th>
          <th>Average Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.t}</td>
            <td>{item.h}</td>
            <td>{item.l}</td>
            <td>{(item.o + item.c) / 2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
