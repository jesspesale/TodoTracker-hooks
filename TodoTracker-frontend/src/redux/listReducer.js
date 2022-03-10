import { FETCH_LISTS, ADD_LIST, ADD_ITEM } from "./constants";

export default function listReducer(state = {lists: []}, action){
    switch (action.type) {
      case FETCH_LISTS:
        return {
          ...state,
          lists: action.payload,
        };
        case ADD_LIST:
          return {
            ...state,
            lists: [...state.lists, action.payload],
          };
        case ADD_ITEM:
          console.log(action.payload);
          // return {
          //   ...state,
          // };
      default:
        return state;
    }

}