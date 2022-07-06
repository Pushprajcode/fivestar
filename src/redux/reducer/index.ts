import {combineReducers} from 'redux';
import signUpReducer from '../../screens/signUpScreen/reducer';
import verifyOtpReducer from '../../screens/verificationOtpScreen/reducer';

const rootReducer = combineReducers({
  signUpReducer,
  verifyOtpReducer
});
export default rootReducer;
