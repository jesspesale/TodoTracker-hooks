import {SET_TODOS, ADD_LIST} from './constants'

export function fetchTodos(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/lists")
          .then((res) => res.json())
          .then((todos) => dispatch({ type: SET_TODOS, payload: todos }));
    }
}


export function createList(list){
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/lists/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(list)
      })
        .then((res) => res.json())
        .then((list) => dispatch({ type: ADD_LIST, payload: list }));
    };    
}