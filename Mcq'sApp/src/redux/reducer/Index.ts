import {combineReducers} from "redux";
import {AppReducer,AppReducer1,Answer5Reducer} from "./AppReducer";
export const reducer=combineReducers({
	rootState:AppReducer,
	answers:AppReducer1,
	answer5:Answer5Reducer
})
export type RootState=ReturnType<typeof reducer>