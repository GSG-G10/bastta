import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import authReducer from './user-reducer';
import notificationReducer from './notification';

const reducer = combineReducers({
  data: DashboardReducer,
  authId: authReducer,
  notification: notificationReducer,
});

export default reducer;
