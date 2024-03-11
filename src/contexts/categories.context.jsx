import { createContext, useState, useEffect, useReducer } from "react";
import { getCatergoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  console.log(`dispatch ${type}`)

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});

  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);

  const { categoriesMap } = state;

  const setCategoriesMap = (categoryMap) => {
    dispatch({
      type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
      payload: categoryMap,
    });
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCatergoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
