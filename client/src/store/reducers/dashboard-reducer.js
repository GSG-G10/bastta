/* eslint-disable default-param-last */
const initialState = { data: [] };

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        data: [action.payload],
      };
    default:
      return state;
  }
};
export default DashboardReducer;
