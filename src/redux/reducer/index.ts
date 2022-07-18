import {combineReducers} from 'redux';
import signUpReducer from '../../screens/signUpScreen/reducer';
import verifyOtpReducer from '../../screens/verificationOtpScreen/reducer';
import completProfileReducer from '../../screens/completeProfile/reducer';
const rootReducer = combineReducers({
  signUpReducer,
  verifyOtpReducer,
  completProfileReducer
  
});
export default rootReducer;
