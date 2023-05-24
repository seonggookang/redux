import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import ToDo from '../components/ToDo'
// import { useLocation, useParams, useNavigate  } from 'react-router-dom'; v6

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <>
      <h1 >To Do</h1 >
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {/* {JSON.stringify(toDos)} */}
        {toDos.map((toDo) => 
          <ToDo {...toDo} key={toDo.id}/>
        )}
      </ul>
    </>
  )
}

// store.getState() -->> state 관리
function mapStateToProps(state) {
  return {toDos: state};
}

// store.dispatch() -->> state 변경함수 관리
function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(actionCreators.addTodo(text))
  };
}

// redux state -> home 컴포넌트에 prop으로써 전달
export default connect(mapStateToProps, mapDispatchToProps)(Home); // connect가 Home으로 보내준다