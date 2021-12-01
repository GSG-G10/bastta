/* eslint-disable default-param-last */
const initialState = { auth: false, id: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_AUTH':
      return {
        auth: true,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
