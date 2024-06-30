import { AnyAction } from "redux-saga";
import { Category } from "./category.types";
import { fetchCategoriesStart, fetchCategoriesSuccess, FetchCategoriesFail, fetchCategoriesFail } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE, 
  action = {} as AnyAction
): CategoriesState => {
  // const { type, payload } = action;

  if(fetchCategoriesStart.match(action)){
    return {...state, isLoading: true};
  }

  if(fetchCategoriesSuccess.match(action)){
    return {...state, categories: action.payload, isLoading: false};
  }

  if(fetchCategoriesFail.match(action)){
    return{...state, error: action.payload, isLoading: false};
  }

 
  return state;
  
};
