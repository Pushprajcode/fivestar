import STRINGS from '../../utils/strings';

const initialState = {
  name: '',
  email: '',
  password: '',
  countryCode: '',
  phoneNo: '',
  userId: '',
};

const signUpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  console.log('actiondata', action);

  switch (type) {
    case STRINGS.ACTION_TYPE.SIGN_UP:
      return {...payload};
    default:
      return state;
  }
};
export default signUpReducer;
