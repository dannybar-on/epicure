import {
  CartDispatchTypes,
  CART_FAIL,
  CART_LOADING,
  CART_SUCCESS,
} from './cart.action.types';

interface initialStateI {
  loading: boolean;
  dishes?: [];
}

const initialState: initialStateI = {
  loading: false,
  dishes: [],
};

export const cartReducer = (
  state: initialStateI = initialState,
  action: CartDispatchTypes
) => {
  switch (action.type) {
    case CART_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload,
      };
    default:
      return state;
  }
};
