import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { AppReducer } from './reducers/AppReducer';
import { AuthReducer } from './reducers/AuthReducer';

const rootReducer = combineReducers(
   {
      app: AppReducer,
      auth: AuthReducer
   }
);
const middleware = applyMiddleware(thunk)
const configureStore = () => {
   return createStore(rootReducer, middleware);
}
export default configureStore;