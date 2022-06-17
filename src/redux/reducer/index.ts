import {combineReducers} from 'redux';
import signUpReducer from '../../screens/signUpScreen/reducer';

const rootReducer = combineReducers({
  signUpReducer,
});
export default rootReducer;
