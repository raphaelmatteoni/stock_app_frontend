import axios from 'axios';

export const fetchStockData = (ticker) => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:3000/stocks?ticker=${ticker}&start_date=2023-01-01&end_date=2023-12-31`);
    dispatch({ type: 'FETCH_STOCK_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_STOCK_DATA_FAILURE', payload: error.response.data });
  }
};
