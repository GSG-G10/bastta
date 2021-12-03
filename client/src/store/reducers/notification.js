/* eslint-disable default-param-last */
const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return {
        type: action.style,
        message: action.message,
      };
    default:
      return state;
  }
};

export default notificationReducer;
