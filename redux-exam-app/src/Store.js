import {combineReducers,createStore} from 'redux';
import { TodoReducer } from './TodoReducer';
import { LoginReducer } from "./LoginReducer";
import { cartReducer } from './CartReducer';

const rootReducer = combineReducers({
  todo: TodoReducer,
  login: LoginReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer);