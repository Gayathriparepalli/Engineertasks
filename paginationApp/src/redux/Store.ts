  import { createStore, applyMiddleware, compose } from 'redux';
  import thunk from "redux-thunk";
  import {reducer} from "./reducer/Index";

  declare global{
  	interface Window{
  		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?:typeof compose
  	}
  }

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))





//  import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {reducer} from "./reducer/Index";
// import thunk from "redux-thunk";
// export const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(thunk),
  
// ));