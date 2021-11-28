/* eslint-disable default-param-last */
const initialState = {
  members: [], published: [], pending: [], sold: [], viewTitle: 'members', viewData: [],
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        data: action.payload,
      };
    case 'MEMBERS_DATA':
      return {
        ...state,
        members: action.payload,
      };
    case 'PUBLISHED_DATA':
      return {
        ...state,
        published: action.payload,
      };
    case 'PENDING_DATA':
      return {
        ...state,
        pending: action.payload,
      };
    case 'SOLD_DATA':
      return {
        ...state,
        pending: action.payload,
      };
    case 'TITLE':
      return {
        ...state,
        viewTitle: action.payload,
      };
    case 'VIEW_DATA':
      return {
        ...state,
        viewData: action.payload,
      };
    case 'DELETE_MEMBER_ROW':
      return {
        ...state,
        viewData: state.viewData.filter((elm) => elm.id !== action.payload),
        members: state.members.filter((elm) => elm.id !== action.payload),
      };
    case 'DELETE_PRODUCTS_ROW':
      return {
        ...state,
        viewData: state.viewData.filter((elm) => elm.id !== action.payload),
        published: state.published.filter((elm) => elm.id !== action.payload),
      };
    case 'DELETE_PENDING_ROW':
      return {
        ...state,
        viewData: state.viewData.filter((elm) => elm.id !== action.payload),
        pending: state.pending.filter((elm) => elm.id !== action.payload),
      };
    default:
      return state;
  }
};
export default DashboardReducer;
