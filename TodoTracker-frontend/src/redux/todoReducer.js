import { SET_TODOS, ADD_LIST } from "./constants";


export default function todoReducer(state = {lists: []}, action){
    switch(action.type) {
        case SET_TODOS: 
            return action.payload
        case ADD_LIST:
            console.log(action.payload)
            // return [...state, action.payload]
        default: 
            return state
    }

}