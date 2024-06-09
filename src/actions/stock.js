import axios from 'axios';

export const fetchStockData = (ticker) => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:3000/stocks?ticker=${ticker}`);
    dispatch({ type: 'FETCH_STOCK_DATA_SUCCESS', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao buscar dados da ação:", error);
    dispatch({ type: 'FETCH_STOCK_DATA_FAILURE' });
  }
};
