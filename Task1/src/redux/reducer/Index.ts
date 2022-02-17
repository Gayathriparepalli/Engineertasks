import { combineReducers } from "redux";
import {
 astroidDetailsReducer,
 randomIdReducer, 
} from "./AstroidReducer";
const reducer = combineReducers({
 astroidDetails: astroidDetailsReducer,
 randomId:randomIdReducer, 
})
export default reducer;

export const rootReducer = combineReducers({
astroidDetails: astroidDetailsReducer,
randomId:randomIdReducer,

});

export type RootState = ReturnType<typeof rootReducer>