import STRINGS from '../../utils/strings';

const intailState = {
  homeData: [],
};

const HomeReducer = (state = intailState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case STRINGS.ACTION_TYPE.REEL_DATA:
      return {...state, homeData: payload};
    default:
      return state;
  }
};
export default HomeReducer;
