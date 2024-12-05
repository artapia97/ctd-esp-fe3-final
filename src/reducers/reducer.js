export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
    case "CLEAR_FAVS":
      return { ...state, favs: [] };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "" ? "dark" : "" };
    default:
      throw new Error();
  }
};
