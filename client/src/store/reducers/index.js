import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import FilterReducer from './filter-reducer';
import authReducer from './user-reducer';
import notificationReducer from './notification';

const reducer = combineReducers({
  data: DashboardReducer,
  filter: FilterReducer,
  authId: authReducer,
  notification: notificationReducer,
});

export default reducer;
