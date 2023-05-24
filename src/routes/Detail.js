import React from 'react'
import { useParams, } from 'react-router-dom'
import { connect } from 'react-redux';

const Detail = ( {toDo} ) => {
  console.log('{toDo}>> ', toDo);
  // console.log('toDo>> ', toDo);

  return (
    <>
      <div>Detail</div>
      <div>props: { toDo ? toDo.text : 'bye' }</div>
      {/* <div>{toDo?.text}</div> */}
    </>
    )
  }
  
  
function mapStateToProps(state) {
    const id = Number(useParams().id);
    console.log('id>> ', id);
    console.log('state>> ', state);
  
    return { toDo: state.find(toDo => parseInt(toDo.id) === id) };
  }

export default connect(mapStateToProps)(Detail);
