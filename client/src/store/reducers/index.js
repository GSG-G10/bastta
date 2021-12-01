import { combineReducers } from 'redux';
import DashboardReducer from './dashboard-reducer';
import FilterReducer from './filter-reducer';

const reducer = combineReducers({
  data: DashboardReducer,
  filter: FilterReducer,
});

export default reducer;
