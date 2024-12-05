import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  theme: "",
  favs: lsFavs,
  dentists: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((response) => {
      console.log(response.data);
      dispatch({ type: "GET_DENTISTS", payload: response.data });
      // setRecipes(res.data.recipes);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
