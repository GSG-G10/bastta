import axios from 'axios';

const fetchAllData = () => {
  const fetchData = async () => {
    const response = await axios.get('/api/v1/products/public');
    if (!response.data) {
      return [];
    }
    return response.data;
  };
  return fetchData();
};
const data = fetchAllData();

const initialState = {
  city: '', section: 'الإلكترونيات', type: 'موبايل', price: '0', search: '', filteredData: data,
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'CITY':
      return {
        ...state,
        city: action.payload,
        filteredData: state.filteredData.filter((ele) => ele.city.includes(action.payload)),
      };
    case 'SECTION':
      return {
        ...state,
        section: action.payload,
        filteredData: state.filteredData.filter((ele) => ele.class.includes(action.payload)),
      };
    case 'TYPE':
      return {
        ...state,
        type: action.payload,
        filteredData: state.filteredData.filter((ele) => ele.type.includes(action.payload)),
      };
    case 'PRICE':
      return {
        ...state,
        price: action.payload.join('-'),
        filteredData: state.filteredData
          .filter((ele) => (
            action.payload[1]
              ? ele.price >= action.payload[0]
                && ele.price <= action.payload[1]
              : ele.price >= action.payload[0])),
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'FILTERED_DATA':
      return {
        ...state,
        filteredData: action.payload,
      };
    case 'CLEAR':
      return initialState;
    default:
      return initialState;
  }
};

export default FilterReducer;
