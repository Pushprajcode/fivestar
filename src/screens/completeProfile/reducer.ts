import STRINGS from "../../utils/strings";

const intialState = {
  profileData:[],
  zipCodeData:[],
};

const completProfileReducer = (state = intialState, action: any) => {
  const {type,payload} = action;
  switch (type) {
    case STRINGS.ACTION_TYPE.SET_SPORT:
      return {...state, profiledata:payload};
      case STRINGS.ACTION_TYPE.SET_ZIPCODE:
      return{...state,zipCodeData:payload}
    default:
      return state;
  }
};
export default completProfileReducer;
