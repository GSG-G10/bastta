const initialState = {
  city: '', section: '', type: '', price: '0', search: '', filteredData: [],
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
