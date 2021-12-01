/* eslint-disable default-param-last */
const initialState = { id: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_AUTH':
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
