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

    default:
      return state;
  }
};
export const randomIdReducer = 
(state = initialState, { type,payload}:reducerType) => {
  switch (type) {
    case ActionTypes.RANDOM_ID:
      return {...state, randomId : payload };

    default:
      return state;
  }
};
