const initialState = {
  data: [],
};

const verifyOtpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  console.log('actiondata', action);
  console.log('safdghdfgh', payload);

  switch (type) {
    case 'SET_OTP':
      console.log("#######",action,"@@@@@@@@",state)
      return {...state, data: payload};
    default:
      return state;
  }
};
export default verifyOtpReducer;
