import { FETCH_LISTS, ADD_LIST } from "./constants";

export default function listReducer(state = {lists: []}, action){
    switch (action.type) {
      case FETCH_LISTS:
        return {
          ...state,
          lists: action.payload
        }
      case ADD_LIST:
        console.log(action.payload);
      // return [...state, action.payload]
      default:
        return state;
    }

}