import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import FilterReducer from './filter-reducer';
import authReducer from './user-reducer';

const reducer = combineReducers({
  data: DashboardReducer,
  filter: FilterReducer,
  authId: authReducer,
});

export default reducer;
