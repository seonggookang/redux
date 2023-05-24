import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

const ToDo = ({text, onBtnClick, id}) => {

  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

// store.getState() -->> state 관리
// 하지만 여기선 state 는 사용 안할거임
// function mapStateToProps(state) {
//   console.log('state in ToDo>>', state);
//   return {toDos: state};
// }

// store.dispatch() -->> state 변경함수 관리
function mapDispatchToProps(dispatch, ownProps) {
  // 상황에 따라 prop을 만들 수 있음.
  // console.log('ownProps in ToDo>>', ownProps);
  // ToDo의 prop와 redux-store의 dispatch의 조합으로.
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
  // console.log(ownProps); // 우리가 입력한 state가 출력됨. // 이미 id가 있는 상황
}

export default connect(null, mapDispatchToProps)(ToDo); // connect가 Home으로 보내준다
// export default ToDo 