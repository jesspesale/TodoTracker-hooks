import { FETCH_LISTS, ADD_LIST, ADD_ITEM, DELETE_LIST_ITEM } from "./constants";

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
          let newLists = state.lists.map((list) => {
            if (list.id === action.payload.id) {
              return action.payload
            } else {
              return list
            }
          });
          return {
            ...state,
            lists: newLists
          }
        case DELETE_LIST_ITEM:
          console.log(action.type)
          console.log(state.lists)

      default:
        return state;
    }

}