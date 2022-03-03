import {combineReducers} from "redux";
import {AppReducer,AppReducer1} from "./AppReducer";
export const reducer=combineReducers({
	rootState:AppReducer,
	rowData:AppReducer1
})
export type RootState=ReturnType<typeof reducer>