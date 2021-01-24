import ActionEnums from '../utils/actionEnums';

const initialState = {
  isLogin: false,
};

export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case ActionEnums.LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case ActionEnums.LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
