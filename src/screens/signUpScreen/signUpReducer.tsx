const initialState = {
    countryCode: '',
    phoneNo: '',
    userId: '',
  };
  
  const SignUpReducer = (state = initialState, action:any) => {
    const {type, payload} = action;
    //console.log('actiondata',action)
  
    switch (type) {
     case 'SET_USERID':
        return {...state,...payload};
      default:
        return state;
    }
  };
  export default SignUpReducer;