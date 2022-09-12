import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { dishReducer } from './dish/dish.reducer';
import { restaurantReducer } from './restaurant/restaurant.reducer';
import { chefReducer } from './chef/chef.reducer';
import { cartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
  dishes: dishReducer,
  restaurants: restaurantReducer,
  chef: chefReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootStore = ReturnType<typeof rootReducer>;
