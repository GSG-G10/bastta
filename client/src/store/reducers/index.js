import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import authReducer from './user-reducer';

const reducer = combineReducers({
  data: DashboardReducer,
  authId: authReducer,
});

export default reducer;
