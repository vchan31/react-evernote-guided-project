import React from 'react';

const NoteItem = (props) => {
	// console.log("In NoteItem. Props are:  ", props)
	return <li key={props.noteId}
  onClick={()=>props.handleClick(props.noteId)}
  >
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </li>
}

export default NoteItem;
