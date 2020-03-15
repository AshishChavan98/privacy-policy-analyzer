import counterReducer from  './counter';
import loggedReducer from './isLogged';
import status from './status'
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
    status:status,
});

export default allReducers;