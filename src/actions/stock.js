import axios from 'axios';

export const fetchStockData = (ticker, startDate, endDate) => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:3000/stocks?ticker=${ticker}&start_date=${startDate}&end_date=${endDate}`);
    dispatch({ type: 'FETCH_STOCK_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_STOCK_DATA_FAILURE', payload: error.response.data });
  }
};
