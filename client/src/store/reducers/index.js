import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';

const reducer = combineReducers({
  data: DashboardReducer,
});

export default reducer;
