import {FETCH_LISTS, ADD_LIST, GET_LIST} from './constants'

export function fetchLists(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/lists")
          .then((res) => res.json())
          .then((lists) => dispatch({ type: FETCH_LISTS, payload: lists }));
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


// export function getList(id) {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/lists/${id}`)
//       .then((res) => res.json())
//       .then((lists) => dispatch({ type: GET_LIST, payload: lists }));
//   };
// }