import { ActionTypes } from "../contents/ActionTypes";
export const astroidDetails = (data:any) => {
  return {
    type: ActionTypes.Astroid_Details,
    payload: data,
  };
};
export const randomAstroidId = (data:any) => {
  return {
    type: ActionTypes.RANDOM_ID,
    payload: data,
  };
};

