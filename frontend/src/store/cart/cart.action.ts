import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Dish } from '../../interfaces/dish';
import DishService from '../../services/dish.service';
import { RootStore } from '../store';
import {
  CartDispatchTypes,
  CART_FAIL,
  CART_LOADING,
  CART_SUCCESS,
} from './cart.action.types';
