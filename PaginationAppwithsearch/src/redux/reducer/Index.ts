import {combineReducers} from "redux";
import {AppReducer,RowDataReducer} from "./AppReducer";

export const reducer=combineReducers({
	hits:AppReducer,
	rowData:RowDataReducer
})
export type RootState=ReturnType<typeof reducer>