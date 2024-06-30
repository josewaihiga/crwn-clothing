import { AnyAction } from "redux-saga";
import { CART_ACTION_TYPES } from "./cart.types";

import { CartItemType } from "./cart.types";

export type CartState = {
  readonly isCartOpen : boolean;
  readonly cartItems : CartItemType[];
}

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE, 
  action = {} as AnyAction
): CartState => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:

    return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
