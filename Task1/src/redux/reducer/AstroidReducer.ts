import { ActionTypes } from "../contents/ActionTypes";
type reducerType={
  type:string,
  payload:any
}
const initialState = {
  astroidDetails:[],
  randomId:[],
  };


export const astroidDetailsReducer = 
(state = initialState, { type,payload}:reducerType) => {
  switch (type) {
    case ActionTypes.Astroid_Details:
      return {...state, astroidDetails : payload };
      case ActionTypes.FETCH_DATA:
      return {...state, randomId : payload };
    default:
      return state;
  }
};
