export const CART_LOADING = 'CART_LOADING';
export const CART_FAIL = 'CART_FAIL';
export const CART_SUCCESS = 'CART_SUCCESS';

export interface CartLoading {
  type: typeof CART_LOADING;
}

export interface CartFail {
  type: typeof CART_FAIL;
}

export interface CartSuccess {
  type: typeof CART_SUCCESS;
  payload: [];
}

export type CartDispatchTypes = CartLoading | CartFail | CartSuccess;
