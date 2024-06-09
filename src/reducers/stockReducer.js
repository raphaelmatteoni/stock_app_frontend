const initialState = {
  data: [],
  error: null,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STOCK_DATA_SUCCESS':
      return {...state, data: action.payload.results, error: null };
    case 'FETCH_STOCK_DATA_FAILURE':
      return {...state, error: action.payload.message };
    default:
      return state;
  }
};

export default stockReducer;
