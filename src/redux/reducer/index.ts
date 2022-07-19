import {combineReducers} from 'redux';
import signUpReducer from '../../screens/signUpScreen/reducer';
import verifyOtpReducer from '../../screens/verificationOtpScreen/reducer';
import completProfileReducer from '../../screens/completeProfile/reducer';
import HomeReducer from '../../screens/home/reducer';
const rootReducer = combineReducers({
  signUpReducer,
  verifyOtpReducer,
  completProfileReducer,
  HomeReducer
  
});
export default rootReducer;
