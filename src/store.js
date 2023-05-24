import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = text => {
  return {
    type: ADD,
    text
  }
}

const deleteTodo = id => {
  return {
    type: DELETE,
    id,
    // id: parseInt(id)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

//  변화가 일어난 부분과 함꼐 리렌더링이 발생함을 원함
// store.subscribe(); // 변경사항을 우리에게 알려줌

export const actionCreators = {
  addTodo,
  deleteTodo
}

export default store;