import counterReducer from  './counter';
import loggedReducer from './isLogged';
import status from './status'
import setValue from './setValue';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
    status:status,
    value:setValue
});

export default allReducers;