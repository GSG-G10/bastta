import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import authReducer from './user-reducer';

const reducer = combineReducers({
  data: DashboardReducer,
  auth: authReducer,
});

export default reducer;
