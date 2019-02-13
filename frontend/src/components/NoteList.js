import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  	// console.log("In NoteList. Props are :", props)





  return (
    <ul>
      {
      	props.notes.map(function(note){
      		// console.log(" Creating NoteItem using :", note)
      		return <NoteItem 
      		key={note.id}
      		noteId={note.id}
      		title={note.title}
      		body={note.body.substring(0,16)+'...'}
      		handleClick={props.handleClick}
      		/>

      	})

      }
    </ul>
  );
}

export default NoteList;
