// state의 초기값
const initState = {
  id: "",
  uAuth: "",
  LoggedIn: false,
};

//액션
export const uAuth = "uAuth";
export const LoggedIn = "LoggedIn";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case uAuth:
      return {
        ...state,
        uAuth: action.data,
      };
    case LoggedIn:
      return {
        ...state,
        LoggedIn: action.data,
      };

    //기본값
    default:
      return state;
  }
};

export default reducer;
