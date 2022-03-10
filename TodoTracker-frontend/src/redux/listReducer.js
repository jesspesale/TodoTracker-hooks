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
          console.log(action.payload)
          console.log(state)
          let newLists = state.lists.map(list => {
            if(list.id === action.payload.list_id){
              return action.payload
            }else{
              return list
            }
          })
          // debugger
          return {
            ...state,
            lists: newLists
          };

      default:
        return state;
    }

}