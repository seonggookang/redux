import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createTodo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createTodo(toDo);
}

form.addEventListener('submit', onSubmit);

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = 0;
// countModifier가 return 하는 것은 data가 된다.
// 내가 전송한 메세지는 action에 들어감.
// data modify는 이 안에서만 일어남. 이 reducer 안에서

// 상수화 시킴으로써 오타로 인한 에러를 없애준다.
const ADD = "ADD";
const MINUS = "MINUS"; 

// countmodifier가 데이터를 수정하고 이함수가 리턴하는건 이 에플리케이션의 스테이트가 됨
const countModifier = (count = 0, action) => { // 여기서만 data 수정이 일어남
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }

  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if(action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
};

const countStore = createStore(countModifier);
 
const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange); // If you wanna listen for changes your store.

const handleAdd = () => {
  countStore.dispatch({type : ADD}) // 이 액션은 객체여야만함. type을 항상 가지고 있음.
}
const handleMinus = () => {
  countStore.dispatch({type : MINUS}) // dispaatch를 이용해서 액션을 reducer에 보냄
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
const num = parseInt(10).toString(2);
console.log(parseInt(10).toString(2));

console.log(num.split('')); // 배열화


// countModifier가 소통하는 법 : countModifier에게 action을 보내
// message를 send 하는 방법 : dispatch
// countStore.dispatch({type : "ADD"});
// countStore.dispatch({type : "ADD"});
// countStore.dispatch({type : "ADD"});
// countStore.dispatch({type : "ADD"});
// countStore.dispatch({type : "ADD"});
// countStore.dispatch({type : "MINUS"});

// console.log(countStore.getState());