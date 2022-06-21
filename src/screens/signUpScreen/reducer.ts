const initialState = {
  countryCode: '',
  phoneNo: '',
  userId: '',
};

const signUpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  console.log('actiondata',action);

  switch (type) {
    case 'SET_USERID':
      return {...payload};
    default:
      return state;
  }
};
export default signUpReducer;
