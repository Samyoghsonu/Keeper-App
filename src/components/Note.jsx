import React from 'react'

const Note = (props) => {
  const handleClick = ()=>{
    props.onDelete(props.id);
  }
  return (
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick}>DELETE</button>
  </div>
  )
}

export default Note
