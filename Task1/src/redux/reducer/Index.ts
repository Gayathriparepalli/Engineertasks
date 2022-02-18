import { combineReducers } from "redux";
import {
 astroidDetailsReducer,
} from "./AstroidReducer";
const reducer = combineReducers({
 astroidDetails: astroidDetailsReducer, 
})
export default reducer;
export const rootReducer = combineReducers({
astroidDetails: astroidDetailsReducer,

});

export type RootState = ReturnType<typeof rootReducer>