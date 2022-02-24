import {reducer} from "./reducer/Index";
import thunk from "redux-thunk";
import {createStore,compose,applyMiddleware} from "redux";
declare global{
	interface Window{
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose 
	}
}


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
