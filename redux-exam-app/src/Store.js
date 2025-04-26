import {combineReducers,createStore} from 'redux';
import { TodoReducer } from './TodoReducer';
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  login: LoginReducer
})

export const store = createStore(rootReducer);