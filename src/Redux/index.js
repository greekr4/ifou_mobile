// state의 초기값
const initState = {
  id: "",
  uAuth: "",
  LoggedIn: false,
  search_option: "",
};

//액션
export const uAuth = "uAuth";
export const LoggedIn = "LoggedIn";
export const search_option = "search_option";

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
    case search_option:
      return {
        ...state,
        search_option: action.data,
      };
    //기본값
    default:
      return state;
  }
};

export default reducer;
