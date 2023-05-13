import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // old state를 return 하면 안됨
      return [ { text : action.text, id: Date.now() }, ...state]; // 중요! state를 변형시키지 않는다. 새로운 걸 만들어 return 한다
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id ); // 새로운 배열을 뱉어준다
      // toDo.id -->> 각각의 toDo의 id
      // action.id -->> 방금 너가 누른 id
    default:
      return state;
  }
}

// const createTodo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// }
// 이거 대신에 dispatch 할거임

const store = createStore(reducer);
// store를 수정할 수 있는 유일한 방법 : action

store.subscribe(() => console.log(store.getState()));
 
const dispatchAddToDo = text => {
  if(text !== "") store.dispatch(addToDo(text)); // type 외에 뭐든 넣을 수 있다
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id); // html로부터 오는 ID는 string일거싱기에 parseInt해준다.
  store.dispatch(deleteToDo(id)) // dispatch의 파라미터는 reducer의 액션의 인자로감
  console.log(e.target.parentNode.id);
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement('button');
    btn.innerText = 'Del';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  })
}

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener('submit', onSubmit);