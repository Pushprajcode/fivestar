import STRINGS from '../../utils/strings';

const initialState = {
  data: [],
};

const verifyOtpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case STRINGS.ACTION_TYPE.SET_OTP:
      return {...state, data: payload};
    default:
      return state;
  }
};
export default verifyOtpReducer;
